import Handlebars from "handlebars";
import compiledTemplate from "./chat-list.hbs";
import "./chat-list.scss";
import "../input/input"

Handlebars.registerPartial({ chatList: compiledTemplate });