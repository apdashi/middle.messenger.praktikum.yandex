import compiledTemplate from "./chat.hbs";
import '../../layout/base-left/base-left';
import "./chat.scss";
import '../../components/chat-list/chat-list'
import '../../components/dialog/dialog'

const root = document.getElementById("root");
root.innerHTML = compiledTemplate({
    chat: {
        input: {
            name: 'search',
            type: 'text',
            placeholder: 'Поиск',
        },
        list: [{
            name: 'Андрей',
            lastMessage: 'Сообщение 1',
            countNewMessage: 4,
            isYou: false,
            lastTime: '10:49',
        },{
            name: 'Киноклуб',
            lastMessage: 'Стикер',
            countNewMessage: 0,
            isYou: true,
            lastTime: '11:29',
        }],
    }
});
