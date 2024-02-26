import AbstractController from "./abstractController.js"
import View from "./../views/documentation.js"
import Service from "./../services/documentation.js"

export default class Documentation extends AbstractController {
    #view
    #service

    initializer() {
        this.#view = new View()
        this.#service = new Service()

        const local = this.#view.location()

        if (local === 'list') this.#listDocuments()
        if (local === 'add') this.#addDocument()
    }

    #listDocuments () {
        this.#view.openDoc({
            fn: ({ btnName, formData }) => {
                let response
                if (btnName === 'delete') {
                    response = this.#service.openFile({
                        url: 'documentation/delete/id/' + formData.get('id'),
                        method: 'POST'
                    })
                }
                if (btnName === 'edit') {
                    response = this.#service.openFile({
                        url: 'documentation/update',
                        method: 'POST',
                        formData
                    })
                }
                return response
            },
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            initializer: () => this.initializer()
        })
    }

    #addDocument () {
        this.#view.changeFile((filesAdd) => {
            for (let i of filesAdd) {
                if (i.files.length > 0) {
                    if (i.files[0].size > 2000000) {
                        i.value = ""
                        return "<span class='warning'>Document size above 2Mb</span>"
                    }
                    if (
                        i.files[0].type !== "image/jpeg" &&
                        i.files[0].type !== "image/png" &&
                        i.files[0].type !== "application/pdf"
                    ) {
                        i.value = ""
                        return "<span class='warning'>Not allowed document type</span>"
                    }
                }
            }
        })
        this.#view.btnAction((data) => {
            return this.#service.openFile(data)
        })
    }
}
