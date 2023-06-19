import BaseAPI from './base'

export interface UserInfo {
    first_name: string
    second_name: string
    display_name: string
    login: string
    email: string
    phone: string
}

export class UserAPI extends BaseAPI {
    constructor () {
        super('/user')
    }

    async changeProfile (data: UserInfo): Promise<void> {
        return await this.http.put('/profile', data)
    }

    async changeProfileAvatar (avatar: FormData): Promise<void> {
        return await this.http.put('/profile/avatar', avatar)
    }

    async changePassword (data: UserInfo): Promise<void> {
        return await this.http.put('/password', data)
    }

    async userSearch (data: UserInfo): Promise<void> {
        return await this.http.post('/search', data)
    }

    update = undefined
}

export default new UserAPI()
