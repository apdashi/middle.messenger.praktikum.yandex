import Block from "../../utils/Block";
import compiledTemplate from "./input.hbs";
import styles from "./input.scss";
import { nanoid } from "nanoid";

interface InputProps {
    globalModifier?: string,
    modifier?: string,
    name?: string,
    labelModifier?: string,
    type?: string,
    label?: string,
    placeholder?: string,
    value?: string,
    hasError?: boolean,
    id?: string,
    events: {
        click: () => void;
        change: () => void;
        blur: () => void;
        focus: () => void;
    };
}

export class Input extends Block<InputProps> {
    constructor(props: InputProps) {
        super({ type: 'text', id: nanoid(6), ...props });
    }

    render() {
        return this.compile(compiledTemplate, { ...this.props, styles });
    }
}