import Loading from '../../lib/loading.js'
import Mask from '../../lib/mask.js'
import Message from '../../lib/message.js'
import ThumbImage from '../../lib/thumbImage.js'
import Modal from './../../lib/modal.js'

export default class AbstractView {
    modal
    message
    loading
    mask
    thumbImage

    constructor() {
        this.modal = new Modal()
        this.message = new Message()
        this.loading = Loading
        this.mask = Mask
        this.thumbImage = ThumbImage
    }

    showPage({ page, params, fn }) {
        document.querySelector('.content').innerHTML = page
        if (typeof(fn) === 'function') fn()
    }
}