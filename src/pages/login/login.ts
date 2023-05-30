import Block from '../../utils/Block';
import { EnterForm } from "../../components/enter-form/enter-form";
import template from "./login.hbs";
import {data} from "./data"

export class PageLogin extends Block {
    constructor() {
        super({});
    }

    init() {
        this.children.form = new EnterForm(data.form);

    }

    render() {
        return this.compile(template, { modifier: data.modifier, ...this.props });
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const pageLogin = new PageLogin();
    const root = document.getElementById("root") as HTMLElement;
    root.append(pageLogin.getContent()!);
    pageLogin.dispatchComponentDidMount();
})
