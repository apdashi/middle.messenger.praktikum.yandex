import {data} from './data';
import compiledTemplate from "./login.hbs";
import '../../layout/base-center/base-center';
import "./login.scss";
import "../../components/enter-form/enter-form";
import "../../components/wrapper/wrapper"

const root = document.getElementById("root");
root.innerHTML = compiledTemplate(data);
