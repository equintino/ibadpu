import AbstractView from "./abstractView.js"

export default class extends AbstractView {
    init ({ openFile, fn }) {
        document.querySelector('.content').innerHTML = openFile({
            url: 'user/list',
            method: 'GET'
        })
        this.#exhibition({
            el: "#exhibition table#tabList tbody td", fn
        })
        this.#disabledTableLine("#exhibition table tbody tr")

        document.querySelector(".header .buttons").onclick = (e) => {
            this.loading.show()
            const btnAction = e.target.value

            if (btnAction === "add") fn({ action: e.target })
            this.loading.hide()
        }
    }

    #exhibition ({ el, fn }) {
        document.querySelectorAll(el).forEach((cell) => {
            cell.onclick = (e) => {
                this.loading.show()
                const action = e.target.tagName === "I" ? e.target.parentElement : e.target

                fn({ action })
                this.loading.hide()
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

    add ({ openFile, save, fn }) {
        this.modal.show({
            title: 'CADASTRO DE NOVO USUÁRIO',
            content: openFile({
                url: 'user/register',
                method: 'GET'
            }),
            buttons: '<button class="button cancel" value="reset" style="margin-right: 3px">Limpar</button><button class="button save" value="save">Salvar</button>'
        })

        this.modal.content.querySelector('[name=name]').focus()
        const form = this.modal.content.querySelector('form')
        this.modal.buttons.onclick = (btn) => {
            const btnName = btn.target.value
            if (btnName === 'reset') form.reset()
            if (btnName === 'save') {
                const formData = new FormData(form)
                const response = save({ formData })

                this.modal.content.querySelectorAll('[required]').forEach((required) => {
                    required.style.background = 'white'
                    if (response.indexOf(required.name) !== -1) {
                        required.style.background = 'pink'
                        required.focus()
                    }
                })

                if (response.indexOf('success') !== -1) {
                    this.init({ openFile, fn })
                    form.reset()
                }
                this.message.text(response)
            }
        }
    }

    edition ({ login, save, fn, openFile }) {
        this.modal.show({
            title: 'MODO DE EDIÇÃO',
            content: openFile({
                url: `user/${login}`,
                method: 'GET'
            }),
            buttons: '<button class="button save" value="save">Salvar Alteração</button>'
        })
        this.modal.content.querySelector('[name=name]').focus()
        const form = this.modal.content.querySelector('form')

        this.modal.buttons.onclick = (btn) => {
            const btnName = btn.target.value
            const formData = new FormData(form)
            const response = save({ btnName, formData })

            if (response.indexOf('success') !== -1) {
                this.init({ openFile, fn })
                this.modal.close()
            }
            this.message.text(response)
        }
    }

    delete ({ openFile, login, fn, del }) {
        this.modal.confirm({
            title: "Você deseja realmente excluir o usuário <span style='margin-left: 5px;font-size: 1.2em'><strong style='color:red; margin-right: 5px'>" + login + "</strong>?</span>",
            message: " "
        })
        this.modal.mask.style.zIndex = '2'
        this.modal.dialogue.querySelector('#buttons').onclick = (btn) => {
            if (btn.target.value == 1) {
                const response = del()
                if (response.indexOf('success') !== -1) {
                    this.init({ openFile, fn })
                }
                this.message.text(response)
                this.modal.close()
            }
        }
    }

    resetPassword ({ fn }) {
        this.modal.confirm({
            title: "A senha será excluída",
            message: "A nova senha será cadastrada no próximo login"
        })
        this.modal.mask.style.zIndex = '2'
        this.modal.dialogue.querySelector('#buttons').onclick = (btn) => {
            let btnName = btn.target.value
            const formData = new FormData()
            if (btnName == 1) {
                const response = fn({ formData })
                if (response.indexOf('success') !== -1) this.modal.close()
            }
        }
    }
}
