import AbstractView from "./abstractView.js"

export default class Mmembership extends AbstractView {
    membersId

    setBtns(fn) {
        const [ photos, btnEdits ] = [
            document.querySelectorAll('#membership .photo'),
            document.querySelectorAll('#membership [data-action="edit"]')
        ]
        this.#openModal({ photos, btnEdits }, fn)
        this.#add(fn)
        this.#noMember(fn)
        this.#btnBadgeOff()
        this.#markBadge()
        this.#badge()
    }

    #openModal(elements, fn) {
        for (let i in elements) {
            elements[i].forEach( (e) => {
                e.onclick = () => {
                    let memberId = e.attributes['data-id'].value
                    let name = e.attributes['data-name'].value
                    this.modal.show({
                        title: name,
                        content: 'membership/register/' + memberId,
                        buttons: '<button class="button save" value="save">Salvar</button>'
                    })
                    .styles({
                        element: '#boxe_main #content',
                        css: {
                            height: '450px'
                        }
                    })
                    this.modal.buttons[0].children[0].onclick = () => {
                        const form  = this.modal.content[0].querySelector('form')
                        const files = form.querySelectorAll('[type=file]')
                        const required = form.querySelectorAll('[required]')
                        const formData = new FormData(form)

                        for (let i of files) {
                            formData.append(i.id, i.files[0])
                        }

                        /** Require compulsory fields */
                        for (let field of required) {
                            if (field.value == "") {
                                let fieldName = field.previousElementSibling.textContent.trim()
                                field.style.background = 'pink'
                                field.focus()

                                return this.message.text("O campo \"" + fieldName.substring(0, fieldName.length -1) + "\" requerido", "var(--cor-warning)")
                            }
                        }

                        fn(formData)
                    }
                }
            })
        }
    }

    #add(fn) {
        document.querySelector('.add').onclick = () => {
            this.modal.show({
                title: 'NOVO MEMBRO',
                content: 'membership/register/0',
                buttons: '<button class="button save" value="save">Salvar</button>'
            })
            .styles({
                element: '#boxe_main #content',
                css: {
                    height: '450px'
                }
            })
            this.modal.buttons[0].children[0].onclick = () => {
                const form  = this.modal.content[0].querySelector('form')
                const files = form.querySelectorAll('[type=file]')
                const required = form.querySelectorAll('[required]')
                const formData = new FormData(form)

                for (let i of files) {
                    formData.append(i.id, i.files[0])
                }

                /** Require compulsory fields */
                for (let field of required) {
                    if (field.value == "") {
                        let fieldName = field.previousElementSibling.textContent.trim()
                        field.style.background = 'pink'
                        field.focus()

                        return this.message.text("O campo \"" + fieldName.substring(0, fieldName.length -1) + "\" requerido", "var(--cor-warning)")
                    }
                }

                fn(formData)
            }
        }
    }

    #noMember(fn) {
        const noMembers = document.querySelector('#membership .no_members')
        noMembers.onclick = () => {
            this.modal.show({
                title: "EX-MEMBROS OU VISITANTES",
                content: "membership/no_member",
                callback: () => {
                    let btnEdit = modal.content[0].querySelectorAll('button')
                    this.#openModal({btnEdit}, (formData) => {
                        fn(formData)
                    })
                }
            })
            .styles({
                element: '#boxe_main #content',
                css: {
                    height: '450px'
                }
            })
        }
    }

    #btnBadgeOff() {
        document.querySelector('.badgesOff').onclick = () => {
            const badges = document.querySelectorAll('.badge img')
            badges.forEach((e) => {
                e.attributes['alt'].value = 'off'
                const arr = e.attributes['src'].value.split('/').splice(0, e.attributes['src'].value.split('/').length -1)
                e.attributes['src'].value = arr.join('/') + '/off.png'
            })
            document.querySelector('#selected').innerHTML = 0
        }
    }

    #markBadge() {
        this.membersIds = []
        const btnOnOff = document.querySelectorAll('#membership .badge')
        const selected = document.querySelector('#selected')
        for (let i of btnOnOff) {
            i.onclick = (e) => {
                this.loading.show()
                let src = i.querySelector('img').attributes['src'].value
                let id = i.parentElement.children[0].attributes['data-id'].value
                let onOffs = src.split('/')
                if (onOffs.indexOf('off.png') !== -1) {
                    if (selected.innerText >= 4) {
                        document.querySelector('.loading').style.display = 'none'
                        return console.log(
                            this.message.text('Mark fuor badge only!', 'var(--cor-warning)')
                        )
                    }
                    selected.innerHTML = parseInt(selected.innerText) + 1
                    this.membersIds.push(id)
                    i.querySelector('img').attributes['src'].value = onOffs.splice(0, 4).join('/') + '/on.png'
                    i.querySelector('img').attributes['alt'].value = 'on'
                } else {
                    this.membersIds.splice(membersIds.indexOf(id), 1)
                    i.querySelector('img').attributes['src'].value = onOffs.splice(0, 4).join('/') + '/off.png'
                    i.querySelector('img').attributes['alt'].value = 'off'
                    selected.innerHTML = parseInt(selected.innerText) - 1
                }
                this.loading.hide()
            }
        }
    }

    #badge() {
        document.querySelector('.cart').onclick = () => {
            this.loading.show()
            if (document.querySelector('#selected').innerText === '0') {
                this.loading.hide()
                return this.message.text('Select at least one cart', 'var(--cor-warning)')
            }
            this.modal.show({
                title: 'EMISSÃO DE CARTEIRINHA',
                content: 'wallet',
                params: {
                    members_ids: this.membersIds
                },
                buttons: "<button class='button btn-secondary' value='close'>Fechar</button><button class='button btn-danger' value='print'>Imprimir</button>",
                callback: () => {
                    this.modal.buttons[0].onclick = (e) => {
                        const btnName = e.target.value
                        if (btnName === 'close') {
                            this.modal.close()
                        } else {
                            window.print()
                        }
                    }
                }
            })
            .styles({
                element: '#boxe_main #content',
                css: {
                    height: '450px'
                }
            })
        }
    }

    response(response, fn) {
        let background
        if (response.indexOf("success") !== -1) {
            background = "var(--cor-success)"
            fn()
            this.modal.close()
        } else if(response.indexOf("danger") !== -1) {
            background = "var(--cor-danger)"
        } else {
            background = "var(--cor-warning"
        }
        this.message.text(response, background)
    }
}
