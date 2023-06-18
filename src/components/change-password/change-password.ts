import Block from '../../utils/Block'
import compiledTemplate from './change-password.hbs'
import { Button } from '../button/button'
import UserController from '../../controllers/user'
import { Input } from '../input/input'

export class ChangePassword extends Block {
    constructor (props: ProfileFormProps) {
        super(props)
    }

    init (): void {
        this.children.buttonChange = new Button({
            modifier: 'button--clear h-mb--20',
            title: 'Изменить',
            events: {
                click: () => {
                    UserController.changePassword({
                        oldPassword: this.children.oldPassword.props.value,
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
        return this.compile(compiledTemplate, { ...this.props })
    }
}
