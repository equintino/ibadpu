import Modal from "../../lib/modal.js"

export default class AbstractController {
    modal

    constructor() {
        this.modal = new Modal()
    }
}
