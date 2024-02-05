import Modal from "../../lib/modal.js"
import AbstractController from "./abstractController.js"
import Menu from "./menu.js"

export default class Documentation extends AbstractController {
    initializer() {
        const modal = new Modal
        this.#openDoc(modal)
        this.#changeFile()
        this.#btnAction()
    }

    #openDoc(modal) {
        const row = document.querySelectorAll('#documentation table.show tbody tr')
        row.forEach((e) => {
            e.onclick = (i) => {
                let id = e.attributes['id'].value
                if (typeof(i.target.parentElement.attributes["data-action"]) !== "undefined") {
                    let action = i.target.parentElement.attributes["data-action"].value
                    let description = i.target.parentElement.parentElement.children[1].textContent
                    if (action === "delete") {
                        modal.confirm({
                            title: "Deseja realmente excluir este documento?",
                            message: description,
                            buttons: "<button class='button cancel' value='close'>NÃO</button><button class='button save' value='delete'>SIM</button>"
                        })
                        .on("click", function(e) {
                            if (e.target.value === "delete") {
                                if (saveData("documentation/delete/id/" + id, id)) {
                                    (new Menu()).showPage('documentation/init')
                                }
                            }
                        })
                    } else {
                        modal.show({
                            title: "Modo de Edição",
                            content: "documentation/edit/" + id,
                            buttons: "<button class='button save' value='save'>Alterar</button>"
                        })
                        .callback(function() {
                            buttons.querySelector('button').onclick = (btn) => {
                                let btnName = btn.target.value
                                if (btnName === "save") {
                                    let formData = new FormData(
                                        modal.content.find("#form-documentation")[0]
                                    )
                                    if (saveData("documentation/update", formData)) {
                                        (new Menu).showPage('documentation/init')
                                        modal.close()
                                    }
                                }
                            }
                        })
                    }
                } else {
                    window.open("documentation/show/id/" + id)
                }
            }
        })
    }

    #changeFile() {
        let validateFile = () => {
            let filesAdd = documentation.querySelectorAll("[type=file]")
            for (let i of filesAdd) {
                if (i.files.length > 0) {
                    if (i.files[0].size > 2000000) {
                        alertLatch("Document size above 2Mb", "var(--cor-warning)")
                        i.value = ""
                        return false
                    }
                    if (
                        i.files[0].type !== "image/jpeg" &&
                        i.files[0].type !== "image/png" &&
                        i.files[0].type !== "application/pdf"
                    ) {
                        alertLatch("Not allowed document type", "var(--cor-warning)")
                        i.value = ""
                        return false
                    }
                }
            }
        }
        if (document.querySelector('#documentation #form-documentation [type=file]')) {
            document.querySelector('#documentation #form-documentation [type=file]').onchange = () => {
                validateFile()
                document.querySelector('#documentation [disabled]').disabled = false
            }
        }
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