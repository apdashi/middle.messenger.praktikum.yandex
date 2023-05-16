import Handlebars from "handlebars";
import compiledTemplate from "./text.hbs";
import "./text.scss";

Handlebars.registerPartial({text: compiledTemplate});