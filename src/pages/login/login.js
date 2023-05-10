import { data } from './data';
import compiledTemplate from "./login.hbs";
import '../../layout/base-center/base-center';
import "./login.scss";
import "../../components/login-form/login-form";

const root = document.getElementById("root");
root.innerHTML = compiledTemplate(data);
