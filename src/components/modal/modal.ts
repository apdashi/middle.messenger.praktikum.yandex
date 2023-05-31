import Handlebars from 'handlebars'
import compiledTemplate from './modal.hbs'
import './modal.scss'

Handlebars.registerPartial({ modal: compiledTemplate })
