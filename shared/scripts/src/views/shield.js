import AbstractView from "./abstractView.js"

export default class Shield extends AbstractView {
    btnAction (fn) {
        document.querySelectorAll('#shield button').forEach((buttons) => {
            buttons.onclick = (btn) => {
                const btnName = btn.target.value
                fn({ btnName })
            }
        })
    }

    addGroup ({ openFile, fn }) {
        this.modal.show({
            title: 'CADASTRO DE GRUPO',
            content: openFile({
                url: 'group/register',
                method: 'GET'
            }),
            buttons: '<button class="button save" value="save">Salvar</button>'
        })
        const form = this.modal.content.querySelector('form')
        this.modal.content.querySelector('[name=name]').focus()

        form.onsubmit = e => e.preventDefault()
        this.modal.buttons.querySelector('button').onclick = (btn) => {
            const btnName = btn.target.value
            if (btnName === 'save') {
                const formData = new FormData(form)
                fn({ formData })
            }
        }
    }

    submit ({ response, initializer, openFile }) {
        if (response.indexOf('success') !== -1) {
            document.querySelector('.content').innerHTML = openFile({
                url: 'shield',
                method: 'GET'
            })
            initializer()
            this.modal.close()
        }
        this.message.text(response)
    }

    delGroup ({ openFile, fn, initializer }) {
        const groupName = document.querySelector('#shield .group .active').innerText
        const conf = this.modal.confirm({
            title: 'ATENÇÃO!!!',
            message: `Deseja realmente excluir o grupo <strong>${groupName}</strong>?`
        })
        this.modal.mask.style.zIndex = '2'
        conf.onclick = (option) => {
            if (option.target.value == 1) {
                const response = fn({ groupName })
                if (response.indexOf('success') !== -1) {
                    document.querySelector('.content').innerHTML = openFile({
                        url: 'shield',
                        method: 'GET'
                    })
                    initializer()
                }
                this.message.text(response)
            }
        }
    }

    updateGroup ({ update }) {
        const groupName = document.querySelector('#shield .group .active').innerText
        const screens = this.#getScreenAccess()
        const formData = new FormData()
        formData.append('name', groupName)
        formData.append('access', screens)

        const response = update({ formData })
        this.message.text(response)
    }

    #getScreenAccess () {
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

    checkGroup ({ getListScreen }) {
        let groupName = document.querySelector('#shield .group p.active').innerText
        let span = document.querySelector('#shield .screen legend span')

        this.#insertCheck({
            screens: getListScreen({ groupName }).access,
            element: '#shield .screen span',
            optionGreen: 'fa-check',
            optionRed: 'fa-times'
        })

        span.innerHTML = `Grupo: ${groupName}`
        span.style.float = 'right'
    }

    #insertCheck ({ screens, element, optionGreen, optionRed }) {
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

    btnGroups ({ getListScreen }) {
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
                this.#insertCheck({
                    screens: getListScreen({ groupName }).access,
                    element: '#shield .screen span',
                    optionGreen: 'fa-check',
                    optionRed: 'fa-times'
                })
            }
        })
    }

    changeScreen () {
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
    }
}
