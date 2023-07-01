import Block from '../../utils/Block'
import compiledTemplate from './chat.hbs'
import './chat.scss'
import { Avatar } from '../avatar/avatar'

interface ChatProps {
    avatar: string
}

export class Chat extends Block<ChatProps> {
    constructor (props: ChatProps) {
        super(props)
    }

    init (): void {
        this.children.avatar = new Avatar({
            modifier: 'chat-list__item--avatar',
            src: this.props.avatar
        })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, {
            ...this.props
        })
    }
}
