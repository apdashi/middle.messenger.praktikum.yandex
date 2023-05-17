import Handlebars from "handlebars";
import compiledTemplate from "./profile-form.hbs";
import "./profile-form.scss";
import "../input/input"
import "../text/text"
import "../button/button"
import "../avatar/avatar"

Handlebars.registerPartial({profileForm: compiledTemplate});