// @ts-ignore
import Avatar from "../../../static/img/avatar.png";
// @ts-ignore
import Img from "../../../static/img/message.png";


export const data = {
    chat: {
        input: {
            name: 'search',
            type: 'text',
            placeholder: 'Поиск',
        },
        list: [{
            avatar: Avatar,
            name: 'Андрей',
            lastMessage: 'Сообщение 1',
            countNewMessage: 4,
            isYou: false,
            lastTime: '10:49',
        }, {
            name: 'Киноклуб',
            lastMessage: 'Стикер',
            countNewMessage: 0,
            isYou: true,
            lastTime: '11:29',
        }],
    },
    dialog: {
        name: 'Вадим',
        avatar: './',
        messages: [{
            text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
                '\n' +
                'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            time: '11:56',
        }, {
            img: Img,
            time: '11:56',
        }, {
            isYou: true,
            text: 'Круто!',
            time: '12:00',
            isRead: true,
        }],
        input: {
            placeholder: "Сообщение",
            name: "message",
        },
        buttonSend: {
            iconModifier: "button--send",
            modifier: "button--while",
        },
        buttonFile: {
            iconModifier: "button--file",
            modifier: "button--while",
        },
        notText: {
            title: 'Выберите чат чтобы отправить сообщение',
            modifier: "text--gray text--align-center"
        },
    }
};