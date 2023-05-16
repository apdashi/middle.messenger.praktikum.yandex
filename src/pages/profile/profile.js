import compiledTemplate from "./profile.hbs";
import {data} from "./data"
import '../../layout/base-center/base-center';
import "./profile.scss";
import "../../components/profile-form/profile-form";
import "../../components/wrapper/wrapper"


const root = document.getElementById("root");
const script = document.getElementById("script");
root.innerHTML = compiledTemplate({ ...data, isEdit: (script ? script.getAttribute("data-type") === 'edit' : false) });
