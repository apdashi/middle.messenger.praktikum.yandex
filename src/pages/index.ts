import { PageLogin } from '../pages/login/login'
import { PageSignup } from './signup/signup'
import Router from '../utils/Router'
import { PageProfile } from '../pages/profile/profile'
import { PageChat } from '../pages/chat/chat'
import AuthController from '../controllers/auth'
import '../../static/styles/global.scss'

enum Routes {
    Index = '/',
    SignUp = '/sign-up',
    Profile = '/settings',
    Chat = '/messenger',
}

window.addEventListener('DOMContentLoaded', async () => {
    Router
        .use(Routes.Index, PageLogin)
        .use(Routes.SignUp, PageSignup)
        .use(Routes.Profile, PageProfile)
        .use(Routes.Chat, PageChat)

    let isProtectedRoute = true

    switch (window.location.pathname) {
        case Routes.Index:
        case Routes.SignUp:
            isProtectedRoute = false
            break
    }

    try {
        await AuthController.fetchUser()
        Router.start()

        if (!isProtectedRoute) {
            Router.go(Routes.Profile)
        }
    } catch (e) {
        Router.start()

        if (isProtectedRoute) {
            Router.go(Routes.Index)
        }
    }
})
