import AbstractController from "./abstractController.js"
import View from "./../views/documentation.js"
import Service from "./../services/documentation.js"
import Menu from "./menu.js"

export default class Documentation extends AbstractController {
    #view
    #service

    initializer() {
        const menu = new Menu()
        this.#view = new View()
        this.#service = new Service()

        this.#view.location()

        if (this.#view.legend.indexOf('CADASTRADOS') !== -1) {
            this.#view.openDoc({
                fn: ({ btnName, formData }) => {
                    let response
                    if (btnName === 'delete') {
                        response = this.getPage({
                            url: 'documentation/delete/id/' + formData.get('id'),
                            method: 'POST'
                        })
                        if (response.indexOf('success') !== -1) {
                            menu.showPage('documentation/init')
                        }
                    }
                    if (btnName === 'edit') {
                        response = this.getPage({
                            url: 'documentation/update',
                            method: 'POST',
                            formData
                        })
                        if (response.indexOf('success') !== -1) {
                            menu.showPage('documentation/init')
                        }
                    }
                    return response
                },
                getPage: (data) => {
                    return this.getPage(data)
                },
            })
        }

        if (this.#view.legend.indexOf('ADICIONAR') !== -1) {
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
            this.#view.btnAction(({ url, formData }) => {
                return this.#submit({ url, formData })
            })
        }
    }

    #submit({ url, formData }) {
        return this.#service.openFile({ url, method: 'POST', formData })
    }
}
