import Block from '../../utils/Block'
import compiledTemplate from './profile-form.hbs'
import './profile-form.scss'
import { Text } from '../text/text'
import { Button } from '../button/button'
import { Input } from '../input/input'
import { Avatar } from '../avatar/avatar'
import { validateField } from '../../utils/validate'
import UserController from '../../controllers/user'
import AuthController from '../../controllers/auth'
import { ChangePassword } from '../change-password/change-password'
import { type User } from '../../api/auth'
import { type UserInfo } from '../../api/user'

interface ProfileFormProps {
    header: any
    footer: any[]
    footerEdit: any[]
    fields: Array<Record<string, string>>
    modifier?: string
    isEdit: boolean
    user: User
}

export class ProfileForm extends Block<ProfileFormProps> {
    constructor (props: ProfileFormProps) {
        super(props)
    }

    init (): void {
        this.children.header = new Text({ title: this.props.user.display_name })
        this.children.avatar = new Avatar({
            src: this.props.user.avatar,
            alt: this.props.user.display_name
        })
        this.children.fieldsData = this.createFields(this.props)
        this.children.footerEdit = new Button({
            title: 'Сохранить',
            events: {
                click: () => {
                    const data: UserInfo = {}
                    const isValidForm = (this.children.fieldsData as Block[]).every(field => {
                        const isValid = validateField(field.props.value, field.props.name)
                        // @ts-ignore
                        data[field.props.name] = field.props.value
                        field.setProps({
                            hasError: !isValid
                        })
                        return isValid
                    })
                    if (isValidForm) {
                        UserController.changeProfile(data).finally(() => { this.setProps({ isEdit: false }) })
                    }
                }
            }
        })
        this.children.footer = this.createButtons()
        this.children.changeAvatar = new Input({
            name: 'avatar',
            type: 'file',
            label: 'Изменить аватар',
            events: {
                // @ts-ignore
                click: () => { this.setProps({ isAvatar: true }) },
                change: (e) => {
                    const d = new FormData()
                    // @ts-ignore
                    d.append('avatar', e.currentTarget.files[0])
                    // @ts-ignore
                    UserController.changeProfileAvatar(d).finally(() => { this.setProps({ isAvatar: false }) })
                }
            }
        })
        this.children.changePassword = new ChangePassword({
            // @ts-ignore
            close: () => { this.setProps({ isPassword: false }) }
        })
    }

    private createFields (props: ProfileFormProps): Input[] {
        return props.fields.map(field => {
            // @ts-ignore
            return new Input({ name: field.name, ...field, value: props.user[field.name] })
        })
    }

    private createButtons (): Button[] {
        const buttons = [{
            title: 'Изменить данные',
            modifier: 'button--clear',
            events: {
                click: () => { this.setProps({ isEdit: true }) }
            }
        }, {
            title: 'Изменить пароль',
            modifier: 'button--clear',
            events: {
                click: () => {
                    // @ts-ignore
                    this.setProps({ isPassword: true })
                }
            }
        }, {
            title: 'Выйти',
            modifier: 'button--clear',
            events: {
                click: async () => { await AuthController.logout() }
            }
        }]
        return buttons.map(field => {
            return new Button(field)
        })
    }

    protected componentDidUpdate (_oldProps: ProfileFormProps, newProps: ProfileFormProps): boolean {
        this.children.avatar = new Avatar({
            src: newProps.user.avatar,
            alt: newProps.user.display_name
        })
        return true
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, {
            ...this.props,
            // @ts-ignore
            userValue: this.props.fields.map(f => ({ value: this.props.user[f.name] }))
        })
    }
}
