import Block from '../../utils/Block'
import template from './chat.hbs'
import { data } from './data'
import './chat.scss'
import { ChatList } from '../../components/chat-list/chat-list'
import { Dialog } from '../../components/dialog/dialog'

export class PageChat extends Block {
    constructor () {
        super({})
    }

    init (): void {
        this.children.chatList = new ChatList(data.chat)
        this.children.dialog = new Dialog(data.dialog)
    }

    render (): DocumentFragment {
        return this.compile(template, { ...this.props })
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const pageChat = new PageChat()
    const root = document.getElementById('root')
    root!.append(pageChat.getContent()!)
    pageChat.dispatchComponentDidMount()
})
