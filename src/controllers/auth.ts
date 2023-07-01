import API, { type AuthAPI, type SigninData, type SignupData } from '../api/auth'
import store from '../utils/Store'
import router from '../utils/Router'
import MessagesController from './messages'

export class Auth {
    private readonly api: AuthAPI

    constructor () {
        this.api = API
    }

    async signin (data: SigninData): Promise<void> {
        try {
            await this.api.signin(data)

            await this.fetchUser()

            router.go('/settings')
        } catch (e: any) {
            console.error(e)
        }
    }

    async signup (data: SignupData): Promise<void> {
        try {
            await this.api.signup(data)

            await this.fetchUser()

            router.go('/settings')
        } catch (e: any) {
            console.error(e.message)
        }
    }

    async fetchUser (): Promise<void> {
        const user = await this.api.read()

        store.set('user', user)
    }

    async logout (): Promise<void> {
        try {
            MessagesController.closeAll()

            await this.api.logout()

            router.go('/')
        } catch (e: any) {
            console.error(e.message)
        }
    }
}

export default new Auth()
