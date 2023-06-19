import API, { type ChatsAPI } from '../api/chats'
import store from '../utils/Store'
import MessagesController from './messages'

class Chats {
    private readonly api: ChatsAPI

    constructor () {
        this.api = API
    }

    async create (title: string): Promise<void> {
        await this.api.create(title)

        void this.fetchChats()
    }

    async fetchChats (): Promise<void> {
        const chats = await this.api.read()

        chats.map(async (chat) => {
            const token = await this.getToken(chat.id)

            await MessagesController.connect(chat.id, token)
        })

        store.set('chats', chats)
    }

    addUserToChat (id: number, userId: number): void {
        void this.api.addUsers(id, [userId]).then(async () => await this.getUsers(id))
    }

    async deleteUserToChat (id: number, userId: number): Promise<void> {
        await this.api.deleteUsers(id, [userId]).then(async () => await this.getUsers(id))
    }

    async delete (id: number): Promise<void> {
        await this.api.delete(id)

        void this.fetchChats()
    }

    async getToken (id: number): Promise<string> {
        return await this.api.getToken(id)
    }

    async getUsers (id: number): Promise<void> {
        const users = await this.api.getUsers(id)
        store.set(`usersChat.${id}`, users)
    }

    async selectChat (id: number): Promise<void> {
        store.set('selectedChat', id)
        await this.getUsers(id)
    }
}

const controller = new Chats()

// eslint-disable-next-line
window.chatsController = controller

export default controller
