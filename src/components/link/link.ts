import Block from '../../utils/Block'
import compiledTemplate from './link.hbs'
import './link.scss'
import { type PropsWithRouter, withRouter } from '../../hocs/withRouter'

interface LinkProps extends PropsWithRouter {
    title?: string
    modifier?: string
    to?: string
    events?: {
        click: (e: Event) => void
    }
}

export class LinkComponent extends Block<LinkProps> {
    constructor (props: LinkProps) {
        super({
            ...props,
            events: {
                click: (e) => { this.navigate(e) }
            }
        })
    }

    navigate (e: Event): void {
        e.stopPropagation()
        e.preventDefault()
        this.props.router.go(this.props.to ?? '/')
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, { ...this.props })
    }
}

export const Link = withRouter(LinkComponent)
