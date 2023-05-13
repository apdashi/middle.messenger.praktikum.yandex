import compiledTemplate from "./404.hbs";
import '../../layout/base-center/base-center';
import '../../components/text/text';
import '../../components/wrapper/wrapper';
import "./404.scss";

const root = document.getElementById("root");
root.innerHTML = compiledTemplate({
    header: {
        modifier: 'text--title-h1 h-mb--20',
        title: 404,
    },
    body: {
        modifier: 'text--title-h2 h-mb--40',
        title: 'Не туда попали',
    },
    link: {
        title: 'Назад к чатам',
        href: '/chat.html'
    },
    modifier: 'h-text--center'
});
