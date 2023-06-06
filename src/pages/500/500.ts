import Block from '../../utils/Block'
import { Link } from '../../components/link/link'
import { Text } from '../../components/text/text'
import template from './500.hbs'

export class Page500 extends Block {
    constructor () {
        super({})
    }

    init (): void {
        this.children.header = new Text({
            title: '500',
            modifier: 'text--title-h1 h-mb--20'
        })

        this.children.body = new Text({
            title: 'Мы уже фиксим',
            modifier: 'text--title-h2 h-mb--40'
        })

        this.children.link = new Link({
            title: 'Назад к чатам',
            to: '/chat.html'
        })
    }

    render (): DocumentFragment {
        return this.compile(template, { modifier: 'h-text--center', ...this.props })
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const page500 = new Page500()
    const root = document.getElementById('root')
    root.append(page500.getContent()!)
    page500.dispatchComponentDidMount()
})
