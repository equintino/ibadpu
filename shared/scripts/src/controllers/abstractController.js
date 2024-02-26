import View from "../views/menu.js"
import Service from "../services/menu.js"
import Modal from "../../lib/modal.js"

export default class AbstractController {
    view
    service
    modal

    constructor() {
        this.view = new View()
        this.service = new Service()
        this.modal = new Modal()
    }

    // getPage({ url, formData, method = 'GET'}) {
    //     return this.service.openFile({
    //         method, url, formData
    //     })
    // }
}
