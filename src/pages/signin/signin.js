import { data } from './data';
import compiledTemplate from "./signin.hbs";
import '../../layout/base-center/base-center';
import "./signin.scss";
import "../../components/enter-form/enter-form";
import "../../components/wrapper/wrapper"

const root = document.getElementById("root");
root.innerHTML = compiledTemplate(data);
