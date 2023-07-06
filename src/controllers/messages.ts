import WSTransport, { WSTransportEvents } from '../utils/WSTransport'
import store from '../utils/Store'

export interface Message {
    chat_id: number
    time: string
    type: string
    user_id: number
    content: string
    file?: {
        id: number
        user_id: number
        path: string
        filename: string
        content_type: string
        content_size: number
        upload_date: string
    }
}

class Messages {
    private readonly sockets = new Map<number, WSTransport>()

    async connect (id: number, token: string): Promise<void> {
        if (this.sockets.has(id)) {
            return
        }

        const userId: number = store.getState().user.id

        const wsTransport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`)

        this.sockets.set(id, wsTransport)

        await wsTransport.connect()

        this.subscribe(wsTransport, id)
        this.fetchOldMessages(id)
    }

    sendMessage (id: number, message: string): void {
        const socket = this.sockets.get(id)

        if (!socket) {
            throw new Error(`Chat ${id} is not connected`)
        }

        socket.send({
            type: 'message',
            content: message
        })
    }

    fetchOldMessages (id: number): void {
        const socket = this.sockets.get(id)

        if (!socket) {
            throw new Error(`Chat ${id} is not connected`)
        }

        socket.send({ type: 'get old', content: '0' })
    }

    closeAll (): void {
        Array.from(this.sockets.values()).forEach(socket => { socket.close() })
    }

    private onMessage (id: number, messages: Message | Message[]): void {
        let messagesToAdd: Message[] = []

        if (Array.isArray(messages)) {
            messagesToAdd = messages.reverse()
        } else {
            messagesToAdd.push(messages)
        }

        const currentMessages = store.getState().messages?.[id] || []

        messagesToAdd = [...currentMessages, ...messagesToAdd]

        store.set(`messages.${id}`, messagesToAdd)
    }

    private onClose (id: number): void {
        this.sockets.delete(id)
    }

    private subscribe (transport: WSTransport, id: number): void {
        transport.on(WSTransportEvents.Message, (message) => { this.onMessage(id, message) })
        transport.on(WSTransportEvents.Close, () => { this.onClose(id) })
    }
}

const controller = new Messages()

// @ts-expect-error
window.messagesController = controller

export default controller
