import Block from '../../utils/Block';
import { ProfileForm } from "../../components/profile-form/profile-form";
import template from "./profile.hbs";
import {data} from "./data"
import "./profile.scss"

interface PageProfileProps {
    isEdit: boolean,
}

export class PageProfile extends Block<PageProfileProps> {
    constructor(props: PageProfileProps) {
        super(props);
    }

    init() {
        this.children.form = new ProfileForm({...data, isEdit: this.props.isEdit});
    }

    render() {
        return this.compile(template, { modifier: data.modifier, ...this.props });
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const script = document.getElementById("script");
    const isEdit = script ? script.getAttribute("data-type") === 'edit' : false;
    const pageProfile = new PageProfile({ isEdit });
    const root = document.getElementById("root") as HTMLElement;
    root.append(pageProfile.getContent()!);
    pageProfile.dispatchComponentDidMount();
})

