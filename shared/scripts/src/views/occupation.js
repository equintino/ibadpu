import AbstractView from "./abstractView.js"

export default class Occupation extends AbstractView {
    setBtn({ openFile, fn }) {
        document.querySelector('.buttons').onclick = () => {
            this.loading.show()
            this.modal.show({
                title: 'CADASTRO DE FUNÇÃO',
                content: openFile({
                    url: 'occupation/register',
                    method: 'GET'
                }),
                buttons: '<button class="button cancel" value="reset">Limpar</button><button class="button save" value="save" style="margin-left: 3px">Salvar</button>'
            })
            this.modal.content.querySelector('form [name=name]').focus()
            fn()
        }
    }

    add ({ openFile, initializer }) {
        const buttons = this.modal.buttons
        buttons.onclick = (btn) => {
            this.loading.show()
            const form = this.modal.content.querySelector('form')
            const formData = new FormData(form)
            const btnName = btn.target.value
            form.querySelector('[name=name]').focus()

            if (btnName === 'reset') {
                this.loading.hide()
                return form.reset()
            }
            if (btnName === 'save') {
                if (!this.#validate(form)) return
                const response = openFile({
                    url: 'occupation/save',
                    method: 'POST',
                    formData
                })
                if (response.indexOf('success') !== -1) {
                    form.reset()
                    form.querySelectorAll('[required]').forEach((required) => {
                        if (required.value === '') required.style.background = 'white'
                    })
                    document.querySelector('.content').innerHTML = openFile({
                        url: 'occupation/init',
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

    #validate (form) {
        form.querySelectorAll('[required]').forEach((required) => {
            if (required.value === '') {
                required.focus()
                required.style.background = 'pink'
                this.loading.hide()
                return false
            }
        })
        return true
    }

    list ({ openFile, initializer }) {
        const btnEdit = document.querySelectorAll('#registerOccupation #tablist #edit')
        const btnDelete = document.querySelectorAll('#registerOccupation #tablist #delete')

        btnEdit.forEach((e) => {
            e.onclick = () => {
                this.loading.show()
                let id = e.attributes['data-id'].value
                let formData = new FormData()
                formData.append('id', id)
                this.modal.show({
                    title: 'MODO DE EDIÇÃO',
                    content: openFile({
                        url: 'occupation/edit',
                        method: 'POST',
                        formData
                    }),
                    buttons: '<button class="button save" value="save">Salvar Alteração</button>'
                })
                let form = this.modal.content.querySelector('form')
                this.modal.buttons.onclick = (btn) => {
                    const btnName = btn.target.value
                    if (btnName === 'save') {
                        const formData = new FormData(form)
                        const response = openFile({
                            url: 'occupation/save',
                            method: 'POST',
                            formData
                        })
                        this.message.text(response)
                        if (response.indexOf('success') !== -1) {
                            this.modal.close()
                            document.querySelector('.content').innerHTML = openFile({
                                url: 'occupation/init',
                                method: 'GET'
                            })
                            initializer()
                        }
                    }
                }
            }
        })

        btnDelete.forEach((e) => {
            e.onclick = () => {
                this.loading.show()
                let id = e.attributes['data-id'].value
                let name = e.parentElement.cells[0].innerText
                const conf = this.modal.confirm({
                    title: "Exclusão de Função",
                    message: "Deseja realmente excluir a função <strong>" + name + "</strong>?"
                })
                this.modal.mask.style.zIndex = '2'
                conf.onclick = (e) => {
                    if (e.target.value != 1) return
                    const response = openFile({
                        url: 'occupation/delete/id/' + id,
                        method: 'POST'
                    })
                    if (response.indexOf('success') !== -1) {
                        this.modal.close()
                        document.querySelector('.content').innerHTML = openFile({
                            url: 'occupation/init',
                            method: 'GET'
                        })
                        initializer()
                    }
                    this.message.text(response)
                }
            }
        })
    }
}
