import compiledTemplate from "./profile.hbs";
import { data } from "./data"
import '../../layout/base-center/base-center';
import "./profile.scss";
import "../../components/profile-form/profile-form";
import "../../components/wrapper/wrapper"

const root = document.getElementById("root");
root.innerHTML = compiledTemplate(data);
