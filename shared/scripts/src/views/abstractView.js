import Message from '../../lib/message.js'
import Modal from './../../lib/modal.js'

export default class AbstractView {
    modal
    message

    constructor() {
        this.modal = new Modal()
        this.message = new Message()
    }

    showPage({ page, params }) {
        document.querySelector('.content').innerHTML = page
    }
}