import Block from '../../utils/Block'
import compiledTemplate from './enter-form.hbs'
import './enter-form.scss'
import { Text } from '../text/text'
import { Button } from '../button/button'
import { Input } from '../input/input'
import { Link } from '../link/link'
import { validateField } from '../../utils/validate'

interface EnterFormProps {
    button: any
    header: any
    fields: any[]
    link: any
    modifier?: string
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
                    (this.children.fields as Block[]).map(field => {
                        field.setProps({
                            hasError: !validateField(field.props.value, field.props.name)
                        })
                    })
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
