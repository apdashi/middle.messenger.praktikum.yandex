import compiledTemplate from "./base-center.hbs";
import "./base-center.scss";
import Block from "../../utils/Block";


interface LayoutBaseCenterProps {
}

export class LayoutBaseCenter extends Block<LayoutBaseCenterProps> {
    constructor(props: LayoutBaseCenterProps) {
        super(props);
    }

    render() {
        return this.compile(compiledTemplate, { ...this.props });
    }
}