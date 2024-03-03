import AbstractView from "./abstractView.js"

export default class Documentation extends AbstractView {
    #row = document.querySelectorAll('#documentation table.show tbody tr')

    location() {
        return document.querySelector('#documentation section').attributes['id'].value
    }

    setIconDoc({ fn }) {
        this.#row.forEach((e) => {
            const formData = new FormData()
            e.onclick = (i) => {
                let id = e.attributes['id'].value
                formData.append('id', id)
                if (typeof(i.target.parentElement.attributes["data-action"]) !== "undefined") {
                    let action = i.target.parentElement.attributes["data-action"].value
                    let nameDoc = i.target.parentElement.parentElement.children[1].textContent
                    fn({ action, nameDoc, id })
                } else {
                    window.open("documentation/show/id/" + id)
                }
            }
        })
    }

    edition ({ id, openFile, fn, initializer }) {
        this.modal.show({
            title: "Modo de Edição",
            content: openFile({
                url: "documentation/edit/" + id,
                method: 'GET'
            }),
            buttons: "<button class='button save' value='edit'>Alterar</button>"
        })
        this.modal.buttons.onclick = (e) => {
            const btnName = e.target.value
            const form = this.modal.content.querySelector('form')
            const formData = new FormData(form)
            const response = fn({ btnName, formData })
            if (response.indexOf('success') !== -1) {
                document.querySelector('.content').innerHTML = openFile({
                    url: 'documentation/init',
                    method: 'GET'
                })
                initializer()
                this.modal.close()
            }
            this.message.text(response)
        }
    }

    del ({ nameDoc, openFile, initializer, fn }) {
        const conf = this.modal.confirm({
            title: "Deseja realmente excluir este documento?",
            message: nameDoc,
            buttons: "<button class='button cancel' value='close'>NÃO</button><button class='button save' value='delete'>SIM</button>"
        })
        this.modal.mask.style.zIndex = '2'
        conf.onclick = (e) => {
            let btnName = e.target.value
            if (btnName === 'close') return
            const response = fn()
            document.querySelector('.content').innerHTML = openFile({
                url: 'documentation/init',
                method: 'GET'
            })
            initializer()
            this.message.text(response)
        }
    }

    changeFile(fn) {
        const file = document.querySelector('#documentation #form-documentation [type=file]')
        const filesAdd = documentation.querySelectorAll("[type=file]")

        this.thumbImage.run({
            thumbs: [
                {
                    origin: `#doc`,
                    destination: '#preview'
                }
            ]
        })

        file.onclick = () => this.loading.show()

        let btnSave = document.querySelector('#documentation [disabled]')

        file.onchange = (e) => {
            const response = fn(filesAdd)
            if (response) this.message.text(response)
            if (btnSave.disabled && !response) btnSave.disabled = false
            this.loading.hide()
        }
    }

    btnAction(submit) {
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
        const form = document.querySelector('#documentation #form-documentation')

        buttons.forEach((btn) => {
            const btnName = (e) => {
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
                    document.querySelector('#documentation #preview').attributes['src'].value = '#'
                    document.querySelector('#documentation #form-documentation').reset()
                } else if (btnName === 'save') {
                    const formData = new FormData(form)
                    const url = form.attributes['action'].value
                    let fields = document.querySelectorAll("#form-documentation [required]")
                    for (let i of fields) {
                        i.style.background = "white"
                        if (i.value === "") {
                            i.focus()
                            i.style.background = "pink"
                            this.loading.hide()
                            return this.message.text("<span class='warning'>The field required</span>")
                        }
                    }
                    const response = submit({ url, formData, method: 'POST' })
                    if (response.indexOf('success') !== -1) {
                        document.querySelector('#documentation #preview').attributes['src'].value = '#'
                        this.message.text(response)
                        form.reset()
                    }
                }
                this.loading.hide()
            }
            btn.onclick = (e) => {
                this.loading.show()
                btnName(e)
            }
        })
    }
}
