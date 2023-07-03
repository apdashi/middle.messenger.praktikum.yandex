import { expect } from 'chai'

describe('Проверяем переходы у Роута', () => {
    it('Переход на новую страницу должен менять состояние сущности history', () => {
        window.history.pushState({ page: 'login' }, 'Login', '/login')
        window.history.pushState({ page: 'sign-up' }, 'Register', '/sign-up')
        expect(window.history.length).to.eq(3)
    })
})
