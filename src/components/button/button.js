import Handlebars from "handlebars";
import compiledTemplate from "./button.hbs";
import "./button.scss";

Handlebars.registerPartial({button: compiledTemplate});