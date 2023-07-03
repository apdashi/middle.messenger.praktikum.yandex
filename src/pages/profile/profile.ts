import Block from '../../utils/Block'
import { ProfileForm } from '../../components/profile-form/profile-form'
import template from './profile.hbs'
import { data } from './data'
import './profile.scss'
import { withStore } from '../../utils/Store'
import { Link } from '../../components/link/link'
import { type User } from '../../api/auth'
interface PageProfileProps {
    user: User
}

export class PageProfileBase extends Block<PageProfileProps> {
    constructor (props: PageProfileProps) {
        super(props)
    }

    init (): void {
        this.children.link = new Link({
            to: '/messenger',
            modifier: 'profile--return'
        })
        this.children.form = new ProfileForm({
            footer: [],
            footerEdit: [],
            header: undefined,
            isEdit: false,
            ...data,
            user: this.props.user
        })
    }

    protected componentDidUpdate (_oldProps: PageProfileProps, newProps: PageProfileProps): boolean {
        this.children.form = new ProfileForm({
            footer: [],
            footerEdit: [],
            header: undefined,
            isEdit: false,
            ...data,
            user: newProps.user
        })
        return true
    }

    render (): DocumentFragment {
        return this.compile(template, { modifier: 'h-text--center', ...this.props })
    }
}

const withUser = withStore((state) => ({ user: state.user }))

// @ts-ignore
export const PageProfile = withUser(PageProfileBase)
