import BaseAPI from './base'
import { type User } from './auth'

export interface ChatInfo {
    id: number
    title: string
    avatar: string
    unread_count: number
    last_message: {
        user: User
        time: string
        content: string
    }
}

export class ChatsAPI extends BaseAPI {
    constructor () {
        super('/chats')
    }

    async create (title: string): Promise<void> {
        await this.http.post('/', { title })
    }

    async delete (id: number): Promise<unknown> {
        return await this.http.delete('/', { chatId: id })
    }

    async read (): Promise<Record<string, any>> {
        return await this.http.get('/')
    }

    async getUsers (id: number): Promise<Record<string, any>> {
        return await this.http.get(`/${id}/users`)
    }

    async addUsers (id: number, users: number[]): Promise<void> {
        await this.http.put('/users', { users, chatId: id })
    }

    async deleteUsers (id: number, users: number[]): Promise<void> {
        await this.http.delete('/users', { users, chatId: id })
    }

    async getToken (id: number): Promise<string> {
        const response = await this.http.post(`/token/${id}`)

        return response.token
    }

    update = undefined
}

export default new ChatsAPI()
