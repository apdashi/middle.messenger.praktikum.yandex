import Block from '../../utils/Block'
import compiledTemplate from './add-user-chat.hbs'
import { Button } from '../button/button'
import UserController from '../../controllers/user'
import { Input } from '../input/input'

interface AddUserChatProps {
    selectedChat: number
    close: () => void
}
export class AddUserChat extends Block {
    constructor (props: AddUserChatProps) {
        super(props)
    }

    init (): void {
        this.children.buttonAdd = new Button({
            modifier: 'button--clear h-mb--20',
            title: 'Добавить',
            events: {
                click: () => {
                    UserController.userSearch({
                        login: this.children.input.props.value
                    }, this.props.selectedChat).finally(() => {
                        this.props.close()
                    })
                }
            }
        })
        this.children.buttonCancel = new Button({
            modifier: 'button--clear h-mb--20',
            title: 'Закрыть',
            events: {
                click: () => {
                    this.props.close()
                }
            }
        })
        this.children.input = new Input({
            label: 'Пользователь',
            name: 'user'
        })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, { ...this.props })
    }
}
