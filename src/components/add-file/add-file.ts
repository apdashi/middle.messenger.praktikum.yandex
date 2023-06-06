import Block from '../../utils/Block'
import compiledTemplate from './add-file.hbs'
import './add-file.scss'
import '../modal/modal'
import { Button } from '../button/button'
import { Text } from '../text/text'

export class AddFile extends Block {
    init (): void {
        this.children.header = new Text({ title: 'Загрузите файл', modifier: 'h-mb--20' })
        this.children.buttonChoose = new Button({
            modifier: 'button--clear h-mb--20',
            title: 'Выбрать файл на компьютере'
        })
        this.children.buttonChange = new Button({ modifier: 'h-mb--40', title: 'Поменять' })
        this.children.footer = new Text({ title: 'Нужно выбрать файл' })
    }

    render (): DocumentFragment {
        return this.compile(compiledTemplate, { ...this.props })
    }
}
