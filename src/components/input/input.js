import Handlebars from "handlebars";
import compiledTemplate from "./input.hbs";
import "./input.scss";

Handlebars.registerPartial({ input: compiledTemplate });