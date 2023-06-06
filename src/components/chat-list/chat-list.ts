import Block from '../../utils/Block'
import compiledTemplate from './chat-list.hbs'
import './chat-list.scss'
import { Input } from '../input/input'
import { Avatar } from '../avatar/avatar'

interface ChatListProps {
    list: any[]
    input: any
}

export class ChatList extends Block<ChatListProps> {
    constructor (props: ChatListProps) {
        super(props)
    }

    init (): void {
        this.children.input = new Input(this.props.input)
        this.children.avatars = this.createFields(this.props)
    }

    private createFields (props: ChatListProps): Avatar[] {
        return props.list.map(field => {
            return new Avatar({ src: field.avatar, modifier: 'chat-list__item--avatar' })
        })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, {
            ...this.props
        })
    }
}
