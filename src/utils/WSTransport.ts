import { EventBus } from './EventBus'

export enum WSTransportEvents {
    Connected = 'connected',
    Error = 'error',
    Message = 'message',
    Close = 'close',
}

export default class WSTransport extends EventBus {
    private socket: WebSocket | null = null
    private pingInterval: NodeJS.Timer | undefined = undefined

    constructor (private readonly url: string) {
        super()
    }

    public send (data: unknown): any {
        if (!this.socket) {
            throw new Error('Socket is not connected')
        }

        this.socket.send(JSON.stringify(data))
    }

    public async connect (): Promise<void> {
        this.socket = new WebSocket(this.url)

        this.subscribe(this.socket)

        this.setupPing()

        await new Promise((resolve) => {
            this.on(WSTransportEvents.Connected, (v) => {
                resolve(v)
            })
        })
    }

    public close (): void {
        this.socket?.close()
    }

    private setupPing (): void {
        this.pingInterval = setInterval(() => {
            this.send({ type: 'ping' })
        }, 5000)

        this.on(WSTransportEvents.Close, () => {
            clearInterval(this.pingInterval)

            this.pingInterval = undefined
        })
    }

    private subscribe (socket: WebSocket): void {
        socket.addEventListener('open', () => {
            this.emit(WSTransportEvents.Connected)
        })
        socket.addEventListener('close', () => {
            this.emit(WSTransportEvents.Close)
        })

        socket.addEventListener('error', (e) => {
            this.emit(WSTransportEvents.Error, e)
        })

        socket.addEventListener('message', (message) => {
            const data = JSON.parse(message.data)

            if (data.type && data.type === 'pong') {
                return
            }

            this.emit(WSTransportEvents.Message, data)
        })
    }
}
