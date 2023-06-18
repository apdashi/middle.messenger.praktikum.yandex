import Block from '../../utils/Block'
import compiledTemplate from './dialog.hbs'
import './dialog.scss'
import { Avatar } from '../avatar/avatar'
import { Input } from '../input/input'
import { Button } from '../button/button'
import { Message } from '../message/message'
import { Text } from '../text/text'
import MessagesController from '../../controllers/messages'
import ChatController from '../../controllers/chats'

interface DialogProps {
    input: any
    messages: any[]
    notText: any
    buttonSend: any
    buttonFile: any
    chat?: any
    name?: string
    selectedChat?: number
}

export class Dialog extends Block<DialogProps> {
    constructor (props: DialogProps) {
        super(props)
    }

    init (): void {
        this.children.avatar = new Avatar({ src: this.props.chat?.avatar })
        this.children.input = new Input(this.props.input)
        this.children.buttonSend = new Button({
            ...this.props.buttonSend,
            events: {
                click: () => {
                    MessagesController.sendMessage(this.props.selectedChat!, this.children.input.props.value)
                    this.children.input.setValue('')
                }
            }
        })
        this.children.buttonFile = new Button(this.props.buttonFile)
        this.children.notText = new Text(this.props.notText)
        this.children.text = new Text({ title: this.props.chat?.title })
        this.children.messages = this.createFields(this.props)
        this.children.deleteChat = new Button({
            title: 'Удалить чат',
            events: {
                click: () => {
                    void ChatController.delete(this.props.selectedChat!)
                }
            }
        })
        this.children.addUserChat = new Button({
            title: 'Добавить пользователя',
            events: {
                click: () => {
                    void ChatController.addUserToChat(this.props.selectedChat!, '1062800')
                }
            }
        })
        this.children.deleteUserChat = new Button({
            title: 'Удалить пользователя',
            events: {
                click: () => {
                    ChatController.deleteUserToChat(this.props.selectedChat, '1062800')
                }
            }
        })
    }

    private createFields (props: DialogProps): Message[] {
        return (props.messages ?? []).map(field => {
            return new Message({ ...field, is_you: field.user_id === props.user.id })
        })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, {
            ...this.props
        })
    }
}
