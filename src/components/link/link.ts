import Block from "../../utils/Block";
import compiledTemplate from "./link.hbs";
import styles from "./link.scss";

interface LinkProps {
    title?: string;
    modifier?: string,
    to?: string,
}

export class Link extends Block<LinkProps> {
    constructor(props: LinkProps) {
        super(props);
    }

    render() {
        return this.compile(compiledTemplate, { ...this.props, styles });
    }
}