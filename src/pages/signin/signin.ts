import Block from '../../utils/Block';
import { EnterForm } from "../../components/enter-form/enter-form";
import template from "./signin.hbs";
import {data} from "./data"

export class PageSignin extends Block {
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
    const pageSignin = new PageSignin();
    const root = document.getElementById("root") as HTMLElement;
    root.append(pageSignin.getContent()!);
    pageSignin.dispatchComponentDidMount();
})
