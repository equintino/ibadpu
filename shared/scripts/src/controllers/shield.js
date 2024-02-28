import AbstractController from './abstractController.js'
import View from './../views/shield.js'
import Service from './../services/shield.js'

export default class Shield extends AbstractController {
    #view
    #service

    initializer () {
        this.#view = new View()
        this.#service = new Service()

        this.checkGroup()

        document.querySelectorAll("#shield .btnAction").forEach((e) => {
            let groupName
            e.onclick = (btn) => {
                groupName = btn.target.innerText
                const active = e.parentElement.querySelector('.active')
                document.querySelector("#shield .screen legend span").innerHTML = "Grupo: " + groupName

                if (active) {
                    e.parentElement.querySelector('.active')
                        .classList.remove('active')
                }

                btn.target.classList.add('active')
                this.insertCheck({
                    screens: this.getListScreen({ groupName }).access,
                    element: '#shield .screen span',
                    optionGreen: 'fa-check',
                    optionRed: 'fa-times'
                })
            }
        })

        document.querySelectorAll('#shield .screen span').forEach((check) => {
            if (check.querySelector('i')) {
                check.querySelector('i').onclick = (icon) => {
                    if (icon.target.classList.contains('fa-check')) {
                        icon.target.classList.remove('fa-check')
                        icon.target.classList.add('fa-times')
                        icon.target.style.color = 'red'
                    } else {
                        icon.target.classList.remove('fa-times')
                        icon.target.classList.add('fa-check')
                        icon.target.style.color = 'green'
                    }
                }
            }
        })

        document.querySelector('#shield .screen button.save').onclick = () => {
            const groupName = document.querySelector('#shield .group .active').innerText
            const screens = this.getScreenAccess()
            const formData = new FormData()
            formData.append('name', groupName)
            formData.append('access', screens)

            const response = this.#service.openFile({
                url: 'group/update',
                method: 'POST',
                formData
            })
            this.#view.message.text(response)
        }

        document.querySelector(`#shield [value=add]`).onclick = () => {
            this.#view.modal.show({
                title: 'CADASTRO DE GRUPO',
                content: this.#service.openFile({
                    url: 'group/register',
                    method: 'GET'
                }),
                buttons: '<button class="button save" value="save">Salvar</button>'
            })
            const form = this.#view.modal.content.querySelector('form')
            this.#view.modal.content.querySelector('[name=name]').focus()

            form.onsubmit = e => e.preventDefault()

            this.#view.modal.buttons.querySelector('button').onclick = (btn) => {
                const btnName = btn.target.value
                if (btnName === 'save') {
                    const formData = new FormData(form)
                    const response = this.#service.openFile({
                        url: 'group/save',
                        method: 'POST',
                        formData
                    })
                    if (response.indexOf('success') !== -1) {
                        document.querySelector('.content').innerHTML = this.#service.openFile({
                            url: 'shield',
                            method: 'GET'
                        })
                        this.initializer()
                        this.#view.modal.close()
                    }
                    this.#view.message.text(response)
                }
            }
        }

        document.querySelector('#shield [value=delete]').onclick = (btn) => {
            const btnName = btn.target.value
            const groupName = document.querySelector('#shield .group .active').innerText
            if (btnName === 'delete') {
                const conf = this.#view.modal.confirm({
                    title: 'ATENÇÃO!!!',
                    message: `Deseja realmente excluir o grupo <strong>${groupName}</strong>?`
                })
                this.#view.modal.mask.style.zIndex = '2'
                conf.onclick = (option) => {
                    if (option.target.value == 1) {
                        const response = this.#service.openFile({
                            url: `group/delete/${groupName}`,
                            method: 'POST'
                        })
                        if (response.indexOf('success') !== -1) {
                            document.querySelector('.content').innerHTML = this.#service.openFile({
                                url: 'shield',
                                method: 'GET'
                            })
                            this.initializer()
                        }
                        this.#view.message.text(response)
                    }
                }
            }
        }
    }

    getListScreen ({ groupName }) {
        return JSON.parse(
            this.#service.openFile({
                url: `group/load/${groupName}`,
                method: 'POST'
            })
        )
    }

    checkGroup () {
        let groupName = document.querySelector('#shield .group p.active').innerText
        let span = document.querySelector('#shield .screen legend span')

        this.insertCheck({
            screens: this.getListScreen({ groupName }).access,
            element: '#shield .screen span',
            optionGreen: 'fa-check',
            optionRed: 'fa-times'
        })

        span.innerHTML = `Grupo: ${groupName}`
        span.style.float = 'right'
    }

    insertCheck ({ screens, element, optionGreen, optionRed }) {
        document.querySelectorAll(element).forEach((check) => {
            let screen = check.innerText
            if (check.querySelector('i') !== null) {
                if (screens.indexOf('*') !== -1 || screens.indexOf(screen.trim()) !== -1) {
                    check.querySelector('i').classList.remove(optionRed)
                    check.querySelector('i').classList.add(optionGreen)
                    check.querySelector('i').style.color = "green"
                }
                else {
                    check.querySelector('i').classList.remove(optionGreen)
                    check.querySelector('i').classList.add(optionRed)
                    check.querySelector('i').style.color = "red"
                }
            }
        })
    }

    getScreenAccess () {
        let access = []
        document.querySelectorAll('#shield .screen span').forEach((check) => {
            if (check.querySelector('i')) {
                check.querySelector('i').classList.contains('fa-check')
            }
        })

        document.querySelectorAll('#shield .screen span .fa-check').forEach((check) => {
            access.push(check.parentElement.innerText)
        })
        return access
    }
}
