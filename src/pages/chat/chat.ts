import Block from '../../utils/Block'
import template from './chat.hbs'
import { data } from './data'
import './chat.scss'
import { ChatList } from '../../components/chat-list/chat-list'
import { Dialog } from '../../components/dialog/dialog'
import ChatsController from '../../controllers/chats'
import { withStore } from '../../utils/Store'
import { type User } from '../../api/auth'

interface ChatProps {
    usersChat: User[]
    chats: []
    messages: []
    user: User
    selectedChat?: number
}

export class PageChatBase extends Block<ChatProps> {
    constructor (props: ChatProps) {
        super(props)
    }

    init (): void {
        this.children.chatList = new ChatList(this.props)
        this.children.dialog = new Dialog({
            ...data.dialog,
            messages: this.props.messages,
            usersChat: this.props.usersChat
        })
        void ChatsController.fetchChats()
    }

    // @ts-expect-error
    protected componentDidUpdate (_oldProps, newProps): boolean {
        this.children.chatList = new ChatList(newProps)
        this.children.dialog = new Dialog({
            ...data.dialog,
            messages: newProps.messages,
            // @ts-expect-error
            chat: newProps.chats.find(c => c.id === newProps.selectedChat),
            selectedChat: newProps.selectedChat,
            user: newProps.user,
            usersChat: newProps.usersChat
        })
        return true
    }

    render (): DocumentFragment {
        return this.compile(template, { ...this.props })
    }
}

const withUser = withStore((state) => ({
    chats: state.chats,
    user: state.user,
    selectedChat: state.selectedChat,
    messages: state.messages?.[state.selectedChat!] || [],
    usersChat: state.usersChat?.[state.selectedChat!] || []
}))

// @ts-expect-error
export const PageChat = withUser(PageChatBase)
