import Block from '../../utils/Block'
import { ProfileForm } from '../../components/profile-form/profile-form'
import template from './profile.hbs'
import { data } from './data'
import './profile.scss'
import { withStore } from '../../utils/Store'
import { Link } from '../../components/link/link'
import { type User } from '../../api/auth'
interface PageProfileProps extends User {}

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

    protected componentDidUpdate (oldProps: PageProfileProps, newProps: PageProfileProps): boolean {
        this.children.form = new ProfileForm({ ...data, user: newProps.user })
        return true
    }

    render (): DocumentFragment {
        return this.compile(template, { modifier: 'h-text--center', ...this.props })
    }
}

const withUser = withStore((state) => ({ user: state.user }))

export const PageProfile = withUser(PageProfileBase)
