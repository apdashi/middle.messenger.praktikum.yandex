import Block from "../../utils/Block";
import compiledTemplate from "./message.hbs";
import "./message.scss";
import {Text} from "../text/text";

interface MessageProps {
    isYou: boolean,
    text?: string,
    isRead?: boolean,
    time?: string,
    img?: any,
}

export class Message extends Block<MessageProps> {
    constructor(props: MessageProps) {
        super(props);
    }

    init () {
        this.children.text = new Text({ title: this.props.text });
    }

    render() {
        return this.compile(compiledTemplate, { ...this.props });
    }
}