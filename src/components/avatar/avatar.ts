import Block from "../../utils/Block";
import compiledTemplate from "./avatar.hbs";
import "./avatar.scss";

interface AvatarProps {
    src?: string;
    modifier?: string,
    alt?: string,
}

export class Avatar extends Block<AvatarProps> {
    constructor(props: AvatarProps) {
        super(props);
    }

    render() {
        return this.compile(compiledTemplate, { ...this.props });
    }
}