import Block from '../../utils/Block'
import compiledTemplate from './input.hbs'
import './input.scss'
import { nanoid } from 'nanoid'
import { validateField } from '../../utils/validate'

interface InputProps {
    globalModifier?: string
    modifier?: string
    name: string
    labelModifier?: string
    type?: string
    label?: string
    placeholder?: string
    value?: string
    id?: string
    events?: {
        click: (e: PointerEvent) => void
        change: (e: PointerEvent) => void
        blur: (e: PointerEvent) => void
        focus: (e: PointerEvent) => void
    }
    accept?: string
    hasError?: boolean
}

export class Input extends Block<InputProps> {
    constructor (props: InputProps) {
        super({
            type: 'text',
            id: nanoid(6),
            hasError: false,
            ...props,
            events: props.type !== 'file'
                ? {
                    ...(props.events ?? {}),
                    change: (e: PointerEvent) => {
                        this.setProps({ value: e.target?.value || '' })
                        props.events?.change?.(e)
                    },
                    blur: (e: PointerEvent) => {
                        this.setProps({ hasError: !validateField(this.props.value, this.props.name) })
                        props.events?.blur?.(e)
                    }
                }
                : props.events
        })
    }

    public setValue (value: string): void {
        this.setProps({ value })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, this.props)
    }
}
