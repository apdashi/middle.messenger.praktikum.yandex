import Block from '../../utils/Block'
import compiledTemplate from './dialog.hbs'
import './dialog.scss'
import { Avatar } from '../avatar/avatar'
import { Input } from '../input/input'
import { Button } from '../button/button'
import { Message, type MessageProps } from '../message/message'
import { Text } from '../text/text'
import MessagesController from '../../controllers/messages'
import { AddUserChat } from '../add-user-chat/add-user-chat'
import { DeleteUserChat } from '../delete-user-chat/delete-user-chat'
import { type ChatInfo } from '../../api/chats'
import { type User } from '../../api/auth'

interface DialogProps {
    input: any
    messages?: MessageProps[]
    notText: any
    buttonSend: any
    buttonFile: any
    chat?: ChatInfo
    name?: string
    selectedChat?: number
    usersChat: User[]
    user?: User
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
                    // @ts-ignore
                    MessagesController.sendMessage(this.props.selectedChat!, this.children.input.props.value)
                    // @ts-ignore
                    this.children.input.setValue('')
                }
            }
        })
        this.children.buttonFile = new Button(this.props.buttonFile)
        this.children.notText = new Text(this.props.notText)
        this.children.text = new Text({ title: `${this.props.chat?.title ?? ''} (${this.props.usersChat?.length ?? 0})` })
        this.children.messages = this.createFields(this.props)
        this.children.addUserChat = new Button({
            title: 'Добавить пользователя',
            events: {
                click: () => {
                    // @ts-ignore
                    this.setProps({ isAdd: true })
                }
            }
        })
        this.children.modalAddUserChat = new AddUserChat({
            // @ts-ignore
            close: () => this.setProps({ isAdd: false }),
            selectedChat: this.props.selectedChat ?? 0
        })
        this.children.deleteUserChat = new Button({
            title: 'Удалить пользователя',
            events: {
                click: () => {
                    // @ts-ignore
                    this.setProps({ isRemove: true })
                }
            }
        })
        this.children.modalDeleteUserChat = new DeleteUserChat({
            // @ts-ignore
            close: () => this.setProps({ isRemove: false }),
            usersChat: this.props.usersChat,
            selectedChat: this.props.selectedChat ?? 0
        })
    }

    private createFields (props: DialogProps): Message[] {
        return (props.messages ?? []).map(field => {
            return new Message({ ...field, isYou: field.user_id === props?.user?.id })
        })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, {
            ...this.props
        })
    }
}
