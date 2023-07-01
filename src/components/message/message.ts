import Block from '../../utils/Block'
import compiledTemplate from './message.hbs'
import './message.scss'
import { Text } from '../text/text'

interface MessageProps {
    isYou: boolean
    text?: string
    isRead?: boolean
    time?: string
    img?: any
}

export class Message extends Block<MessageProps> {
    constructor (props: MessageProps) {
        super(props)
    }

    init (): void {
        this.children.text = new Text({ title: this.props.content })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, { ...this.props })
    }
}
