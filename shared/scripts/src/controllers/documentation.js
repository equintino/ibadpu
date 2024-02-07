// import Modal from "../../lib/modal.js"
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
        }

        this.#btnAction()
    }

    #btnAction() {
        const buildTable = (data) => {
            let tr = document.createElement('tr')
            data.forEach((el) => {
                let element = document.createElement(el.element)
                let td = document.createElement('td')
                for (let i in el.attributes) {
                    element.setAttribute(i, el.attributes[i])
                }
                td.appendChild(element)
                tr.appendChild(td)
            })
            return tr
        }

        const buttons = document.querySelectorAll('#documentation button')
        buttons.forEach((e) => {
            e.onclick = (e) => {
                const btnName = e.target.value
                if (btnName === "new") {
                    /** falta implementar */
                    document.querySelector('#documentation table tbody').append(
                        buildTable([
                            { element: 'input', attributes: {
                                type: 'text', name: 'names[]', required: 'required'
                            } },
                            { element: 'input', attributes: {
                                type: 'text', name: 'description[]', required: 'required'
                            }},
                            { element: 'input', attributes: {
                                type: 'file', name: 'files[]', riquired: 'required'
                            }}
                        ])
                    )
                } else if (btnName === "reset") {
                    document.querySelector('#documentation #form-documentation').reset()
                } else if (btnName === 'save') {
                    let fields = document.querySelectorAll("#form-documentation [required]")
                    for (let i of fields) {
                        i.style.background = "white"
                        if (i.value === "") {
                            i.focus()
                            i.style.background = "pink"
                            alertLatch("The field required", "var(--cor-warning)")
                            return false
                        }
                    }
                    this.#submit(() => {
                        (new Menu).showPage('documentation/add')
                    })
                }
            }
        })
    }

    #submit(fn) {
        const event = new Event('saveDoc')
        const form = document.querySelector('#documentation #form-documentation')
        form.addEventListener('saveDoc', (e) => {
            const url = e.target.attributes['action'].value
            const formData = new FormData(form)
            alertLatch(
                this.service.openFile({ method: 'POST', url, formData }),
                'var(--cor-success)'
            )
        })
        document.querySelector('#documentation #form-documentation').dispatchEvent(event)
        fn()
    }
}
