import Block from '../../utils/Block';
import { Link } from "../../components/link/link";
import { Text } from "../../components/text/text";
import template from "./404.hbs";

export class Page404 extends Block {
    constructor() {
        super({});
    }

    init() {
        this.children.header = new Text({
            title: '404',
            modifier: 'text--title-h1 h-mb--20',
        });

        this.children.body = new Text({
            title: 'Не туда попали',
            modifier: 'text--title-h2 h-mb--40',
        });

        this.children.link = new Link({
            title: 'Назад к чатам',
            to: '/chat.html'
        });
    }

    render() {
        return this.compile(template, { modifier: 'h-text--center', ...this.props });
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const page404 = new Page404();
    const root = document.getElementById("root") as HTMLElement;
    root.append(page404.getContent()!);
    page404.dispatchComponentDidMount();
})
