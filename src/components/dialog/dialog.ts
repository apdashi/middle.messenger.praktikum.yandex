import Block from '../../utils/Block'
import compiledTemplate from './dialog.hbs'
import './dialog.scss'
import { Avatar } from '../avatar/avatar'
import { Input } from '../input/input'
import { Button } from '../button/button'
import { Message } from '../message/message'
import { Text } from '../text/text'

interface DialogProps {
    input: any
    messages: any[]
    notText: any
    buttonSend: any
    buttonFile: any
    avatar: string
    name: string
}

export class Dialog extends Block<DialogProps> {
    constructor (props: DialogProps) {
        super(props)
    }

    init (): void {
        this.children.avatar = new Avatar({ src: this.props.avatar })
        this.children.input = new Input(this.props.input)
        this.children.buttonSend = new Button(this.props.buttonSend)
        this.children.buttonFile = new Button(this.props.buttonFile)
        this.children.notText = new Text(this.props.notText)
        this.children.text = new Text({ title: this.props.name })
        this.children.messages = this.createFields(this.props)
    }

    private createFields (props: DialogProps): Message[] {
        return props.messages.map(field => {
            return new Message(field)
        })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, {
            ...this.props
        })
    }
}
