export const data = {
    form: {
        action: 'signin',
        header: {
            title: 'Вход',
            modifier: 'text--title-h1'
        },
        fields: [
            {
                name: 'login',
                type: 'text',
                placeholder: 'Логин',
                globalModifier: 'h-mb--20'
            },
            {
                name: 'password',
                type: 'password',
                placeholder: 'Пароль',
                globalModifier: 'h-mb--20'
            }
        ],
        button: {
            title: 'Вход',
            modifier: 'enter__form--button'
        },
        link: {
            to: '/sign-up',
            title: 'Ещё не зарегистрированы?',
            modifier: 'enter__form--link'
        }
    },
    modifier: 'h-text--center'
}
