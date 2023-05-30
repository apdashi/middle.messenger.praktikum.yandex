import Block from "../../utils/Block";
import compiledTemplate from "./profile-form.hbs";
import "./profile-form.scss";
import {Text} from "../text/text";
import {Button} from "../button/button";
import {Input} from "../input/input";
import {Avatar} from "../avatar/avatar";

interface ProfileFormProps {
    header: any,
    footer: any[],
    footerEdit: any[],
    fields: any[],
    modifier?: string,
    isEdit: boolean,
}

export class ProfileForm extends Block<ProfileFormProps> {
    constructor(props: ProfileFormProps) {
        super(props);
    }

    init() {
        this.children.header = new Text(this.props.header.title);
        this.children.avatar = new Avatar({ src: this.props.header.avatar, alt: this.props.header.title });
        this.children.fieldsData = this.createFields(this.props)
        this.children.footerEdit = this.createButtons(this.props, 'footerEdit')
        this.children.footer = this.createButtons(this.props, 'footer')

    }

    private createFields(props: ProfileFormProps) {
        return props.fields.map(field => {
            return new Input(field);
        })
    }

    private createButtons(props: ProfileFormProps, key: 'footerEdit' | 'footer') {
        return props[key].map(field => {
            return new Button(field);
        })
    }

    render() {
        return this.compile(compiledTemplate, {
            ...this.props,
        });
    }
}