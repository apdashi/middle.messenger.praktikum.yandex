import API, { type UserAPI, type UserInfo } from '../api/user'
import store from '../utils/Store'
import ChatController from './chats'

export class User {
    private readonly api: UserAPI

    constructor () {
        this.api = API
    }

    async changeProfile (data: UserInfo): Promise<void> {
        try {
            const user = await this.api.changeProfile(data)
            store.set('user', user)
        } catch (e: any) {
            console.error(e)
        }
    }

    async changeProfileAvatar (avatar: FormData): Promise<void> {
        try {
            const user = await this.api.changeProfileAvatar(avatar)
            store.set('user', user)
        } catch (e: any) {
            console.error(e)
        }
    }

    async changePassword (data: Record<string, string>): Promise<void> {
        try {
            const user = await this.api.changePassword(data)
            store.set('user', user)
        } catch (e: any) {
            console.error(e)
        }
    }

    async userSearch (data: Record<string, string>, selectedChat: number): Promise<void> {
        try {
            const user = await this.api.userSearch(data)
            if (user?.[0]) {
                ChatController.addUserToChat(selectedChat, user[0].id)
            }
        } catch (e: any) {
            console.error(e)
        }
    }
}

export default new User()
