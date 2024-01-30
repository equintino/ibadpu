import Loading from '../../lib/loading.js'
import Message from '../../lib/message.js'
import Modal from './../../lib/modal.js'

export default class AbstractView {
    modal
    message
    loading

    constructor() {
        this.modal = new Modal()
        this.message = new Message()
        this.loading = Loading
    }

    showPage({ page, params }) {
        document.querySelector('.content').innerHTML = page
    }
}