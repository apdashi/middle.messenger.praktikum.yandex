import Handlebars from "handlebars";
import compiledTemplate from "./chat-list.hbs";
import "./chat-list.scss";
import "../input/input"
import "../avatar/avatar"

Handlebars.registerPartial({ chatList: compiledTemplate });