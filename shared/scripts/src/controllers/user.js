import AbstractController from './abstractController.js'
import View from './../views/user.js'
import Service from './../services/user.js'

export default class User extends AbstractController {
    #view
    #service

    initializer () {
        this.#view = new View()
        this.#service = new Service()

        document.querySelector('.content').innerHTML = this.getPage({
            url: 'user/list',
            method: 'GET'
        })
        this.#exhibition("#exhibition table#tabList tbody td")
        this.#disabledTableLine("#exhibition table tbody tr")

        document.querySelector(".header .buttons").onclick = (e) => {
            this.#view.loading.show()
            const btnAction = e.target.value

            if (btnAction === "add") {
                this.#view.modal.show({
                    title: 'CADASTRO DE NOVO USUÁRIO',
                    content: this.getPage({
                        url: 'user/register',
                        method: 'GET'
                    }),
                    buttons: '<button class="button cancel" value="reset" style="margin-right: 3px">Limpar</button><button class="button danger" value="save">Salvar</button>'
                })

                this.#view.modal.content.querySelector('[name=name]').focus()
                const form = this.#view.modal.content.querySelector('form')
                this.#view.modal.buttons.onclick = (btn) => {
                    const btnName = btn.target.value
                    if (btnName === 'reset') form.reset()
                    if (btnName === 'save') {
                        const formData = new FormData(form)
                        const response = this.getPage({
                            url: 'user/save',
                            method: 'POST',
                            formData
                        })
                        if (response.indexOf('success') !== -1) {
                            document.querySelector('.content').innerHTML = this.getPage({
                                url: 'user/list',
                                method: 'GET'
                            })
                            this.#exhibition("#exhibition table#tabList tbody td")
                            this.#disabledTableLine("#exhibition table tbody tr")
                            form.reset()
                        }
                        this.#view.message.text(response)
                    }
                }
            }
            this.#view.loading.hide()
        }
    }

    #exhibition (el) {
        document.querySelectorAll(el).forEach((cell) => {
            cell.onclick = (e) => {
                this.#view.loading.show()
                const action = e.target.tagName === "I" ? e.target.parentElement : e.target
                let id = action.attributes['data-id'].value
                let login = action.attributes['data'].value
                if (action.title === "Edita") {
                    this.#view.modal.show({
                        title: 'MODO DE EDIÇÃO',
                        content: this.getPage({
                            url: `user/${login}`,
                            method: 'GET'
                        }),
                        buttons: '<button class="button danger" value="save">Salvar Alteração</button>'
                    })

                    this.#view.modal.content.querySelector('[name=name]').focus()
                    const form = this.#view.modal.content.querySelector('form')
                    this.#view.modal.buttons.onclick = (btn) => {
                        const btnName = btn.target.value
                        if (btnName === 'save') {
                            const formData = new FormData(form)
                            const response = this.getPage({
                                url: 'user/update',
                                method: 'POST',
                                formData
                            })
                            if (response.indexOf('success') !== -1) {
                                document.querySelector('.content').innerHTML = this.getPage({
                                    url: 'user/list',
                                    method: 'GET'
                                })
                                this.#exhibition("#exhibition table#tabList tbody td")
                                this.#disabledTableLine("#exhibition table tbody tr")
                                this.#view.modal.close()
                            }
                            this.#view.message.text(response)
                        }
                    }
                } else if (action.title === "Exclui") {
                    if (logged.toLowerCase() === login.toLowerCase()) {
                        this.#view.message.text("<span class='warning'>User logged in, is not allowed to delete it</span>")
                        return this.#view.loading.hide()
                    }
                    this.#view.modal.confirm({
                        title: "Você deseja realmente excluir o usuário <span style='margin-left: 5px;font-size: 1.2em'><strong style='color:red; margin-right: 5px'>" + login + "</strong>?</span>",
                        message: " "
                    })
                    this.#view.modal.mask.style.zIndex = '2'
                    this.#view.modal.dialogue.querySelector('#buttons').onclick = (btn) => {
                        if (btn.target.value == 1) {
                            const response = this.getPage({
                                url: 'user/delete/' + id,
                                method: 'POST'
                            })
                            if (response.indexOf('success') !== -1) {
                                document.querySelector('.content').innerHTML = this.getPage({
                                    url: 'user/list',
                                    method: 'GET'
                                })
                                this.#exhibition("#exhibition table#tabList tbody td")
                                this.#disabledTableLine("#exhibition table tbody tr")
                            }
                            this.#view.message.text(response)
                        }
                        this.#view.modal.close()
                    }
                } else if (action.title === "Reseta") {
                    this.#view.modal.confirm({
                        title: "A senha será excluída",
                        message: "A nova senha será cadastrada no próximo login"
                    })
                    this.#view.modal.mask.style.zIndex = '2'
                    this.#view.modal.dialogue.querySelector('#buttons').onclick = (btn) => {
                        let btnName = btn.target.value

                        if (btnName == 1) {
                            const formData = new FormData()
                            formData.append('login', login)
                            const response = this.getPage({
                                url: 'user/password/reset',
                                method: 'POST',
                                formData
                            })
                            if (response.indexOf('success') !== -1) this.#view.modal.close()
                        }
                    }
                }
                this.#view.loading.hide()
            }
        })
    }

    #disabledTableLine (el) {
        /** highlighting disabled user */
        document.querySelectorAll(el).forEach((tr) => {
            if (tr.cells[4].innerText.toUpperCase() !== 'SIM') {
                for (let cell of tr.cells) {
                    let text = cell.innerText
                    if (text) cell.innerHTML = `<strike>${text}</strinke>`
                }
            }
        })
    }
}
