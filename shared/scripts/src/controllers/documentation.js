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
        this.#view.setIconDoc({
            fn: ({ action, nameDoc, id }) => {
                if (action === 'delete') this.#delete({ id, nameDoc })
                if (action === 'edit') this.#edition({ id })
            }
        })
    }

    #delete ({ id, nameDoc }) {
        this.#view.del({
            nameDoc,
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            initializer: () => {
                this.initializer()
            },
            fn: () => {
                return this.#service.openFile({
                    url: 'documentation/delete/id/' + id,
                    method: 'POST'
                })
            }
        })
    }

    #edition ({ id }) {
        this.#view.edition({
            id,
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            fn: ({ formData }) => {
                return this.#service.openFile({
                    url: 'documentation/update',
                    method: 'POST',
                    formData
                })
            },
            initializer: () => {
                this.initializer()
            }
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
