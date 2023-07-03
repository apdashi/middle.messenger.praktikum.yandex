import Block from '../../utils/Block'
import compiledTemplate from './change-password.hbs'
import { Button } from '../button/button'
import UserController from '../../controllers/user'
import { Input } from '../input/input'

interface InterChangePassword {
    close: () => void
}
export class ChangePassword extends Block<InterChangePassword> {
    constructor (props: InterChangePassword) {
        super(props)
    }

    init (): void {
        this.children.buttonChange = new Button({
            modifier: 'button--clear h-mb--20',
            title: 'Изменить',
            events: {
                click: () => {
                    UserController.changePassword({
                        // @ts-expect-error
                        oldPassword: this.children.oldPassword.props.value,
                        // @ts-expect-error
                        newPassword: this.children.newPassword.props.value
                    }).finally(() => this.props.close())
                }
            }
        })
        this.children.buttonCancel = new Button({
            modifier: 'button--clear h-mb--20',
            title: 'Отмена',
            events: {
                click: () => {
                    this.props.close()
                }
            }
        })
        this.children.oldPassword = new Input({
            label: 'Старый пароль',
            name: 'oldPassword'
        })
        this.children.newPassword = new Input({
            label: 'Новый пароль',
            name: 'newPassword'
        })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, this.props)
    }
}
