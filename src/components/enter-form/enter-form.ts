import Block from '../../utils/Block'
import compiledTemplate from './enter-form.hbs'
import './enter-form.scss'
import { Text } from '../text/text'
import { Button } from '../button/button'
import { Input } from '../input/input'
import { Link } from '../link/link'
import { validateField } from '../../utils/validate'
import { type SignupData } from '../../api/auth'
import AuthController from '../../controllers/auth'

interface EnterFormProps {
    button: any
    header: any
    fields: any[]
    link: any
    modifier?: string
    action: string
}

export class EnterForm extends Block<EnterFormProps> {
    constructor (props: EnterFormProps) {
        super(props)
    }

    init (): void {
        this.children.header = new Text(this.props.header)
        this.children.fields = this.createFields(this.props)
        this.children.button = new Button({
            ...this.props.button,
            events: {
                click: () => {
                    const data: SignupData = {}
                    const isValidForm = (this.children.fields as Block[]).every((field) => {
                        const isValid = validateField(field.props.value, field.props.name)
                        // @ts-expect-error
                        data[field.props.name] = field.props.value
                        field.setProps({
                            hasError: !isValid
                        })
                        return isValid
                    })
                    if (isValidForm) {
                        if (this.props.action === 'signin') {
                            void AuthController.signin(data)
                        } else {
                            void AuthController.signup(data)
                        }
                    }
                }
            }
        })
        this.children.link = new Link(this.props.link)
    }

    private createFields (props: EnterFormProps): Input[] {
        return props.fields.map(field => {
            return new Input(field)
        })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, {
            ...this.props
        })
    }
}
