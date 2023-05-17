import compiledTemplate from "./chat.hbs";
import '../../layout/base-left/base-left';
import "./chat.scss";
import '../../components/chat-list/chat-list'
import '../../components/dialog/dialog'
import addFile from '../../components/add-file/add-file.hbs'
import Img from '../../../static/img/message.png'
import Avatar from '../../../static/img/avatar.png'
import "../../components/modal/modal"
import "../../components/add-file/add-file.scss"

const root = document.getElementById("root");
root.innerHTML = compiledTemplate({
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
        avatar: Avatar,
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
    }
});

const file = document.getElementById('file');
file.onclick = () => {
    const modal = document.getElementById('modal');
    modal.innerHTML = addFile();
    document.body.setAttribute('class', 'body--modal');
}