import Handlebars from "handlebars";
import compiledTemplate from "./dialog.hbs";
import "./dialog.scss";
import "../text/text"
import "../message/message"
import "../button/button"
import "../input/input"

Handlebars.registerPartial({dialog: compiledTemplate});