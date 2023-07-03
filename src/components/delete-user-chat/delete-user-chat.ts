import Block from '../../utils/Block'
import compiledTemplate from './delete-user-chat.hbs'
import { Button } from '../button/button'
import ChatController from '../../controllers/chats'
import { type User } from '../../api/auth'

interface DeleteUserChatProps {
    usersChat: User[]
    selectedChat: number
    close: () => void
}
export class DeleteUserChat extends Block<DeleteUserChatProps> {
    constructor (props: DeleteUserChatProps) {
        super(props)
    }

    // @ts-ignore
    // @ts-ignore
    init (): void {
        this.children.buttonCancel = new Button({
            modifier: 'button--clear h-mb--20',
            title: 'Закрыть',
            events: {
                click: () => {
                    this.props.close()
                }
            }
        })
        // @ts-ignore
        this.children.usersChat = this.props.usersChat.map(user => new Button({
            title: user.display_name ?? `${user.id}`,
            events: {
                click: () => {
                    ChatController.deleteUserToChat(this.props.selectedChat, user.id).finally(() => this.props.close())
                }
            }
        }))
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, { ...this.props })
    }
}
