import AbstractView from "./abstractView.js"

export default class Config extends AbstractView {
    add ({ openFile, required, submit, initializer }) {
        document.querySelector('#config button').onclick = () => {
            this.loading.show()
            this.modal.show({
                title: "Preencha os dados abaixo:",
                content: openFile({
                    url: 'config/register',
                    method: 'GET'
                }),
                buttons: "<button class='button save' value='save' >Salvar</button>"
            })
            this.modal.content.querySelector('[name=connectionName]').focus()
            this.modal.buttons.onclick = (btn) => {
                const btnName = btn.target.value
                if (btnName === 'save') {
                    const requireds = []
                    this.modal.content.querySelectorAll('[required]').forEach((required, i) => {
                        requireds.push(required)
                    })

                    if (!required({ requireds })) return
                    const form = this.modal.content.querySelector('form')
                    const formData = new FormData(form)

                    this.loading.show()
                    const response = submit({ formData })
                    if (response.indexOf('success') !== -1) {
                        document.querySelector('.content').innerHTML = openFile({
                            url: 'config',
                            method: 'GET'
                        })
                        initializer()
                        this.modal.close()
                    }
                    this.message.text(response)
                    this.loading.hide()
                }
            }
        }
    }

    edition ({ openFile, required, update, initializer }) {
        document.querySelectorAll('#config #tab-conf tbody .edition').forEach((icon) => {
            icon.onclick = (e) => {
                this.loading.show()
                const connectionName = e.target.parentElement.parentElement.cells[1].innerText
                if (connectionName.indexOf('*') !== -1) {
                    this.loading.hide()
                    return this.message.text("<span class='warning'>This connection is active</span>")
                }

                this.modal.show({
                    title: `MODO DE EDIÇÃO DE ${connectionName.toUpperCase()}`,
                    content: openFile({
                        url: `config/edit/${connectionName}`,
                        method: 'GET'
                    }),
                    buttons: "<button class='button save' value='save'>Save</button>"
                })
                this.modal.buttons.onclick = (btn) => {
                    const btnName = btn.target.value
                    if (btnName === 'save') {
                        const requireds = []
                        this.modal.content.querySelectorAll('[required]').forEach((required, i) => {
                            requireds.push(required)
                        })

                        if (!required({ requireds })) return
                        const form = this.modal.content.querySelector('form')
                        const formData = new FormData(form)

                        this.loading.show()
                        const response = update({ formData })

                        this.loading.show()
                        if (response.indexOf('success') !== -1) {
                            document.querySelector('.content').innerHTML = openFile({
                                url: 'config',
                                method: 'GET'
                            })
                            initializer()
                            this.modal.close()
                        }
                        this.message.text(response)
                        this.loading.hide()
                    }
                }
            }
        })
    }

    delete ({ openFile, del, initializer }) {
        document.querySelectorAll('#config #tab-conf tbody .delete').forEach((icon) => {
            icon.onclick = (e) => {
                this.loading.show()
                const connectionName = e.target.parentElement.parentElement.cells[1].innerText
                if (connectionName.indexOf('*') !== -1) {
                    this.loading.hide()
                    return this.message.text("<span class='warning'>This connection is active</span>")
                }
                const conf = this.modal.confirm({
                    title: 'MODO DE EXCLUSÃO',
                    message: `Deseja realmente excluir a conexão <strong>${connectionName}</strong>?`
                })
                this.modal.mask.style.zIndex = '2'
                conf.onclick = (btn) => {
                    if (btn.target.value == 1) {
                        this.loading.show()
                        const response = del({ connectionName })
                        if (response.indexOf('success') !== -1) {
                            document.querySelector('.content').innerHTML = openFile({
                                url: 'config',
                                method: 'GET'
                            })
                            initializer()
                            this.modal.close()
                        }
                        this.message.text(response)
                        this.loading.hide()
                    }
                }
            }
        })
    }
}
