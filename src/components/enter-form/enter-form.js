import Handlebars from "handlebars";
import compiledTemplate from "./enter-form.hbs";
import "./enter-form.scss";
import "../input/input"
import "../text/text"
import "../button/button"

Handlebars.registerPartial({enterForm: compiledTemplate});