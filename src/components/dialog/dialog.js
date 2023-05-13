import Handlebars from "handlebars";
import compiledTemplate from "./dialog.hbs";
import "./dialog.scss";

Handlebars.registerPartial({ dialog: compiledTemplate });