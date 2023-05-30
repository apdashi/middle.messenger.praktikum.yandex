import Block from "../../utils/Block";
import compiledTemplate from "./text.hbs";
import "./text.scss";

interface TextProps {
    title?: string;
    modifier?: string,
}

export class Text extends Block<TextProps> {
    constructor(props: TextProps) {
        super(props);
    }

    render() {
        return this.compile(compiledTemplate, {
            ...this.props,
        });
    }
}