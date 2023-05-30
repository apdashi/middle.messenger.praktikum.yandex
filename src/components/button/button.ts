import Block from "../../utils/Block";
import compiledTemplate from "./button.hbs";
import "./button.scss";

interface ButtonProps {
    type?: string;
    title: string;
    modifier?: string,
    iconModifier?: string,
    events: {
        click: () => void;
    };
}

export class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super({ type: 'button', ...props });
    }

    render() {
        return this.compile(compiledTemplate, {
            ...this.props,
        });
    }
}