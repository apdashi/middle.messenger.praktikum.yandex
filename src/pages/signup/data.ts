export const data = {
    form: {
        action: 'signup',
        header: {
            title: 'Регистрация',
            modifier: 'text--title-h1'
        },
        fields: [
            {
                name: 'email',
                type: 'text',
                placeholder: 'Почта',
                label: 'Почта',
                globalModifier: 'h-mb--20'
            },
            {
                name: 'login',
                type: 'text',
                placeholder: 'Логин',
                globalModifier: 'h-mb--20',
                label: 'Логин'
            },
            {
                name: 'first_name',
                type: 'text',
                placeholder: 'Имя',
                globalModifier: 'h-mb--20',
                label: 'Имя'
            },
            {
                name: 'second_name',
                type: 'text',
                placeholder: 'Фамилия',
                globalModifier: 'h-mb--20',
                label: 'Фамилия'
            },
            {
                name: 'phone',
                type: 'text',
                placeholder: 'Телефон',
                globalModifier: 'h-mb--20',
                label: 'Телефон'
            },
            {
                name: 'password',
                type: 'password',
                placeholder: 'Пароль',
                globalModifier: 'h-mb--20',
                label: 'Пароль'
            },
            {
                name: 'password',
                type: 'password',
                placeholder: 'Пароль (ещё раз)',
                globalModifier: 'h-mb--40',
                label: 'Пароль (ещё раз)',
                hasError: true
            }
        ],
        button: {
            title: 'Зарегистрироваться',
            modifier: 'h-mb--20'
        },
        link: {
            to: '/',
            title: 'Войти',
            modifier: 'enter__form--link'
        }
    },
    modifier: 'h-text--center'
}
