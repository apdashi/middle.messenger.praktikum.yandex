import Handlebars from "handlebars";
import compiledTemplate from "./wrapper.hbs";
import "./wrapper.scss";

Handlebars.registerPartial({ wrapper: compiledTemplate });