export const data = {
    form: {
        header: {
            title: "Вход",
            modifier: "text--title-h1",
        },
        fields: [
            {
                name: "login",
                type: "text",
                placeholder: "Логин",
                globalModifier: "h-mb--20",
            },
            {
                name: "password",
                type: "password",
                placeholder: "Пароль",
                globalModifier: "h-mb--20",
            },
        ],
        button: {
            title: "Вход",
            modifier: "enter__form--button",
        },
        altLink: {
            link: "/signin.html",
            text: "Ещё не зарегистрированы?",
            modifier: "enter__form--link",
        },
        modifier: 'h-text--center',
        redirectUrl: '/chat.html',
    },
};