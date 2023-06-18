import Block from '../../utils/Block'
import { EnterForm } from '../../components/enter-form/enter-form'
import template from './login.hbs'
import { data } from './data'

export class PageLogin extends Block {
    constructor () {
        super({})
    }

    init (): void {
        this.children.form = new EnterForm(data.form)
    }

    render (): DocumentFragment {
        return this.compile(template, { modifier: data.modifier, ...this.props })
    }
}
