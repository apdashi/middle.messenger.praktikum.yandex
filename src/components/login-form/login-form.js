import Handlebars from "handlebars";
import compiledTemplate from "./login-form.hbs";
import "./login-form.scss";

Handlebars.registerPartial({ loginForm: compiledTemplate });