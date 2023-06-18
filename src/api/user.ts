import BaseAPI from './base'

export interface UserInfo {
    data?: {
        first_name: string
        second_name: string
        display_name: string
        login: string
        email: string
        phone: string
    }
    file?: File
}

export class UserAPI extends BaseAPI {
    constructor () {
        super('/user')
    }

    async changeProfile (data): Promise<void> {
        await this.http.put('/profile', data)
    }

    async changeProfileAvatar (avatar: FormData): Promise<void> {
        await this.http.put('/profile/avatar', avatar)
    }

    async changePassword (data): Promise<void> {
        await this.http.put('/password', data)
    }

    update = undefined
}

export default new UserAPI()
