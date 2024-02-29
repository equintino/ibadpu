import AbstractController from "./abstractController.js"
import View from './../views/config.js'
import Service from './../services/config.js'

export default class Config extends AbstractController {
    #view
    #service

    initializer () {
        this.#view = new View()
        this.#service = new Service()

        document.querySelector('#config button').onclick = () => {
            this.#view.loading.show()
            this.#view.modal.show({
                title: "Preencha os dados abaixo:",
                content: this.#service.openFile({
                    url: 'config/register',
                    method: 'GET'
                }),
                buttons: "<button class='button save' value='save' >Salvar</button>"
            })
            this.#view.modal.content.querySelector('[name=connectionName]').focus()
            this.#view.modal.buttons.onclick = (btn) => {
                const btnName = btn.target.value
                if (btnName === 'save') {
                    if (!this.validate()) return
                    this.#view.loading.show()
                    const form = this.#view.modal.content.querySelector('form')
                    const formData = new FormData(form)
                    const response = this.#service.openFile({
                        url: 'config/save',
                        method: 'POST',
                        formData
                    })
                    if (response.indexOf('success') !== -1) {
                        document.querySelector('.content').innerHTML = this.#service.openFile({
                            url: 'config',
                            method: 'GET'
                        })
                        this.initializer()
                        this.#view.modal.close()
                    }
                    this.#view.message.text(response)
                    this.#view.loading.hide()
                }
            }
        }

        document.querySelectorAll('#config #tab-conf tbody .edition').forEach((icon) => {
            icon.onclick = (e) => {
                this.#view.loading.show()
                const connectionName = e.target.parentElement.parentElement.cells[1].innerText
                if (connectionName.indexOf('*') !== -1) {
                    this.#view.loading.hide()
                    return this.#view.message.text("<span class='warning'>This connection is active</span>")
                }

                this.#view.modal.show({
                    title: `MODO DE EDIÇÃO DE ${connectionName.toUpperCase()}`,
                    content: this.#service.openFile({
                        url: `config/edit/${connectionName}`,
                        method: 'GET'
                    }),
                    buttons: "<button class='button save' value='save'>Save</button>"
                })
                this.#view.modal.buttons.onclick = (btn) => {
                    const btnName = btn.target.value
                    const form = this.#view.modal.content.querySelector('form')
                    const formData = new FormData(form)
                    if (btnName === 'save') {
                        if (!this.validate()) return
                        this.#view.loading.show()
                        const response = this.#service.openFile({
                            url: 'config/update',
                            method: 'POST',
                            formData
                        })
                        if (response.indexOf('success') !== -1) {
                            document.querySelector('.content').innerHTML = this.#service.openFile({
                                url: 'config',
                                method: 'GET'
                            })
                            this.initializer()
                            this.#view.modal.close()
                        }
                        this.#view.message.text(response)
                        this.#view.loading.hide()
                    }
                }
            }
        })

        document.querySelectorAll('#config #tab-conf tbody .delete').forEach((icon) => {
            icon.onclick = (e) => {
                this.#view.loading.show()
                const connectionName = e.target.parentElement.parentElement.cells[1].innerText
                if (connectionName.indexOf('*') !== -1) {
                    this.#view.loading.hide()
                    return this.#view.message.text("<span class='warning'>This connection is active</span>")
                }

                const conf = this.#view.modal.confirm({
                    title: 'MODO DE EXCLUSÃO',
                    message: `Deseja realmente excluir a conexão <strong>${connectionName}</strong>?`
                })
                this.#view.modal.mask.style.zIndex = '2'
                conf.onclick = (btn) => {
                    if (btn.target.value == 1) {
                        this.#view.loading.show()
                        const response = this.#service.openFile({
                            url: `config/delete/${connectionName}`,
                            method: 'POST'
                        })
                        if (response.indexOf('success') !== -1) {
                            document.querySelector('.content').innerHTML = this.#service.openFile({
                                url: 'config',
                                method: 'GET'
                            })
                            this.initializer()
                            this.#view.modal.close()
                        }
                        this.#view.message.text(response)
                        this.#view.loading.hide()
                    }
                }
            }
        })
    }

    validate () {
        const requireds = []
        this.#view.modal.content.querySelectorAll('[required]').forEach((required, i) => {
            requireds.push(required)
        })

        for (let i of requireds) {
            if (!i.value) {
                i.style.background = 'pink'
                i.focus()
                return this.#view.message.text('<span class="warning">The highlighted field is required</span>')
            }
        }
        return true
    }
}
