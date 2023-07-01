import Block from '../../utils/Block'
import compiledTemplate from './chat-list.hbs'
import './chat-list.scss'
import { Input } from '../input/input'
import { Link } from '../link/link'
import { Button } from '../button/button'
import ChatController from '../../controllers/chats'
import { Chat } from '../chat/chat'

interface ChatListProps {
    chats: any[]
    user: any
}

export class ChatList extends Block<ChatListProps> {
    constructor (props: ChatListProps) {
        super(props)
    }

    init (): void {
        this.children.link = new Link({
            title: 'Профиль',
            to: '/settings'
        })
        this.children.input = new Input({
            name: 'search',
            type: 'text',
            placeholder: 'Поиск',
            value: ''
        })
        this.children.chats = this.createFields(this.props)
        this.children.addInput = new Input({
            placeholder: 'Имя чата',
            name: 'name_chat'
        })
        this.children.addButton = new Button({
            title: 'Создать',
            events: {
                click: async () => { await ChatController.create(this.children.addInput.props.value) }
            }
        })
    }

    private createFields (props: ChatListProps): Chat[] {
        return (props.chats ?? []).map(field => {
            return new Chat({
                ...field,
                events: {
                    click: () => {
                        void ChatController.selectChat(field.id)
                    }
                }
            })
        })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, {
            ...this.props
        })
    }
}
