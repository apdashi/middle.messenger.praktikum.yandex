import Handlebars from "handlebars";
import compiledTemplate from "./avatar.hbs";
import "./avatar.scss";

Handlebars.registerPartial({ avatar: compiledTemplate });