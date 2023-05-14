import Avatar from '../../../static/img/avatar.png'

export const data = {
    form: {
        header: {
            avatar: Avatar,
            name: "Иван",
        },
        footer: [{
            title: 'Изменить данные',
            modifier: 'button--clear',
        },{
            title: 'Изменить пароль',
            modifier: 'button--clear',
        },{
            title: 'Выйти',
            modifier: 'button--clear',
        }],
        fields: [
            {
                label: "Почта",
                value: "i@lazy.ru",
            },
            {
                label: "Логин",
                value: "It's boring",
            },
            {
                label: "Имя",
                value: "Поздно"
            },
            {
                label: "Фамилия",
                value: "Слишком",
            },
            {
                label: "Имя в чате",
                value: "Имя в чате",
            },
            {
                label: "Телефон",
                value: '+7 800 3000 600'
            },
        ],
        modifier: 'h-text--center',
    },
};