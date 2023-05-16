import Avatar from '../../../static/img/avatar.png'

export const data = {
    header: {
        avatar: Avatar,
        name: "Иван",
    },
    footer: [{
        title: 'Изменить данные',
        modifier: 'button--clear',
    }, {
        title: 'Изменить пароль',
        modifier: 'button--clear',
    }, {
        title: 'Выйти',
        modifier: 'button--clear',
    }],
    footerEdit: [{
        title: 'Сохранить',
    }],
    fields: [
        {
            name: "email",
            label: "Почта",
            value: "i@lazy.ru",
            labelModifier: "input__label--hide",
            modifier: "input__input--no-border",
        },
        {
            name: "login",
            label: "Логин",
            value: "It's boring",
            labelModifier: "input__label--hide",
            modifier: "input__input--no-border",
        },
        {
            name: "first_name",
            label: "Имя",
            value: "Поздно",
            labelModifier: "input__label--hide",
            modifier: "input__input--no-border",
        },
        {
            name: "second_name",
            label: "Фамилия",
            value: "Слишком",
            labelModifier: "input__label--hide",
            modifier: "input__input--no-border",
        },
        {
            name: "display_name",
            label: "Имя в чате",
            value: "Имя в чате",
            labelModifier: "input__label--hide",
            modifier: "input__input--no-border",
        },
        {
            name: "phone",
            label: "Телефон",
            value: '+7 800 3000 600',
            labelModifier: "input__label--hide",
            modifier: "input__input--no-border",
        },
    ],
    modifier: 'h-text--center',
};