import Base from './base'

export interface SigninData {
    login?: string
    password?: string
}

export interface SignupData {
    first_name?: string
    second_name?: string
    login?: string
    email?: string
    password?: string
    phone?: string
}

export interface User {
    display_name?: string
    id: number
    first_name: string
    second_name: string
    login: string
    email: string
    password: string
    phone: string
    avatar: string
}

export class AuthAPI extends Base {
    constructor () {
        super('/auth')
    }

    async signin (data: SigninData): Promise<void> {
        await this.http.post('/signin', data)
    }

    async signup (data: SignupData): Promise<void> {
        await this.http.post('/signup', data)
    }

    async read (): Promise<Record<string, any>> {
        return await this.http.get('/user')
    }

    async logout (): Promise<void> {
        await this.http.post('/logout')
    }

    create = undefined
    update = undefined
    delete = undefined
}

export default new AuthAPI()
