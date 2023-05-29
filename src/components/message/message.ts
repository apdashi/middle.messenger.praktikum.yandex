import Block from "../../utils/Block";
import compiledTemplate from "./message.hbs";
import styles from "./message.scss";

interface MessageProps {
    isYou: boolean,
    text?: string,
    isRead?: boolean,
    time?: string,
    img?: any,
    modifierMessage?: string,
}

export class Message extends Block<MessageProps> {
    constructor(props: MessageProps) {
        super({ modifierMessage: props.isYou ? 'message--you' : '',  ...props });
    }

    render() {
        return this.compile(compiledTemplate, { ...this.props, styles });
    }
}