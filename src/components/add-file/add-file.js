import Handlebars from "handlebars";
import compiledTemplate from "./add-file.hbs";
import "./add-file.scss";
import "../modal/modal"

Handlebars.registerPartial({ addFile: compiledTemplate });