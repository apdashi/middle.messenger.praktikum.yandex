import Handlebars from "handlebars";
import compiledTemplate from "./message.hbs";
import "./message.scss";

Handlebars.registerPartial({message: compiledTemplate});
Handlebars.registerHelper('modifierMessage', function () {
    return this.isYou ? 'message--you' : ''
})