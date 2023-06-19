import Block from '../../utils/Block'
import compiledTemplate from './dialog.hbs'
import './dialog.scss'
import { Avatar } from '../avatar/avatar'
import { Input } from '../input/input'
import { Button } from '../button/button'
import { Message } from '../message/message'
import { Text } from '../text/text'
import MessagesController from '../../controllers/messages'
import { AddUserChat } from '../add-user-chat/add-user-chat'
import { DeleteUserChat } from '../delete-user-chat/delete-user-chat'
import { type ChatInfo } from '../../api/chats'
import { type User } from '../api/auth'

interface DialogProps {
    input: any
    messages?: Message[]
    notText: any
    buttonSend: any
    buttonFile: any
    chat?: ChatInfo
    name?: string
    selectedChat?: number
    usersChat?: User[]
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
        this.children.text = new Text({ title: `${this.props.chat?.title ?? ''} (${this.props.usersChat?.length ?? 0})` })
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
                    this.setProps({ isAdd: true })
                }
            }
        })
        this.children.modalAddUserChat = new AddUserChat({
            close: () => this.setProps({ isAdd: false }),
            selectedChat: this.props.selectedChat
        })
        this.children.deleteUserChat = new Button({
            title: 'Удалить пользователя',
            events: {
                click: () => {
                    this.setProps({ isRemove: true })
                }
            }
        })
        this.children.modalDeleteUserChat = new DeleteUserChat({
            close: () => this.setProps({ isRemove: false }),
            usersChat: this.props.usersChat,
            selectedChat: this.props.selectedChat
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
