import ScrollUp from "../../lib/scrollup.js"
import AbstractView from "./abstractView.js"

export default class Membership extends AbstractView {
    membersId

    setBtns ({ fn, openFile }) {
        const [ photos, btnEdits ] = [
            document.querySelectorAll('#membership .photo'),
            document.querySelectorAll('#membership [data-action="edit"]')
        ]
        this.#openModal({ photos, btnEdits }, fn, openFile)
        this.#noMember(fn, openFile)
        this.#btnBadgeOff()
        this.#markBadge()
        this.#badge(openFile)
        this.#scrollUp()
        this.#searchMember()
    }

    #openModal (elements, fn, openFile) {
        for (let i in elements) {
            elements[i].forEach( (e) => {
                e.onclick = () => {
                    let memberId = e.attributes['data-id'].value
                    let name = e.attributes['data-name'].value
                    this.modal.show({
                        title: name,
                        content: openFile({
                            url: 'membership/register/' + memberId,
                            method: 'GET'
                        }),
                        buttons: '<button class="button save" value="save">Salvar</button>'
                    })
                    .styles({
                        element: '#boxe_main',
                        css: {
                            height: '450px',
                            display: 'flex'
                        }
                    })

                    this.#setThumb()

                    this.modal.buttons.onclick = () => {
                        const form  = this.modal.content.querySelector('form')
                        const files = form.querySelectorAll('[type=file]')
                        const required = form.querySelectorAll('[required]')
                        const formData = new FormData(form)

                        for (let i of files) {
                            formData.append(i.id, i.files[0])
                        }

                        if (this.#validate(required) !== true) return
                        fn({ formData })
                    }
                }
            })
        }
    }

    #validate (required) {
        /** Require compulsory fields */
        for (let field of required) {
            if (field.value == "") {
                let fieldName = field.previousElementSibling.textContent.trim()
                field.style.background = 'pink'
                field.focus()

                return this.message.text("O campo \"" + fieldName.substring(0, fieldName.length -1) + "\" requerido", "var(--cor-warning)")
            }
        }
        return true
    }

    add ({ submit, openFile, initializer }) {
        document.querySelector('.add').onclick = () => {
            this.modal.show({
                title: 'NOVO MEMBRO',
                content: openFile({
                    url: 'membership/register/0',
                    method: 'GET'
                }),
                buttons: '<button class="button save" value="save">Salvar</button>'
            })
            .styles({
                element: '#boxe_main',
                css: {
                    height: '450px',
                    display: 'flex'
                }
            })

            this.#setThumb()

            this.modal.buttons.onclick = () => {
                const form  = this.modal.content.querySelector('form')
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
                const response = submit({ formData })
                if (response.indexOf('success') !== -1) {
                    this.modal.close()
                    document.querySelector('.content').innerHTML = openFile({
                        url: 'membership/init',
                        method: 'GET'
                    })
                    initializer()
                }
                this.message.text(response)
            }
        }
    }

    #setThumb () {
        this.thumbImage.run({
            thumbs: [
                {
                    origin: '#imgInp',
                    destination: '#thumb_image'
                },
                {
                    origin: '#imgCert',
                    destination: '#thumb_cert'
                }
            ]
        })
    }

    #noMember (fn, openFile) {
        const noMembers = document.querySelector('#membership .no_members')
        noMembers.onclick = () => {
            this.modal.show({
                title: "EX-MEMBROS OU VISITANTES",
                content: openFile({
                    url: "membership/no_member",
                    method: 'GET'
                }),
                callback: () => {
                    let btnEdit = this.modal.content.querySelectorAll('button')
                    this.#openModal({ btnEdit }, fn, openFile)
                }
            })
            .styles({
                element: '#boxe_main',
                css: {
                    height: '450px',
                    display: 'flex'
                }
            })
        }
    }

    #btnBadgeOff () {
        document.querySelector('.badgesOff').onclick = () => {
            const badges = document.querySelectorAll('.badge img')
            badges.forEach((e) => {
                e.attributes['alt'].value = 'off'
                const arr = e.attributes['src'].value.split('/').splice(0, e.attributes['src'].value.split('/').length -1)
                e.attributes['src'].value = arr.join('/') + '/off.png'
            })
            document.querySelector('#selected').innerHTML = 0
            this.membersIds = []
        }
    }

    #markBadge () {
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
                    this.membersIds.splice(this.membersIds.indexOf(id), 1)
                    i.querySelector('img').attributes['src'].value = onOffs.splice(0, 4).join('/') + '/off.png'
                    i.querySelector('img').attributes['alt'].value = 'off'
                    selected.innerHTML = parseInt(selected.innerText) - 1
                }
                this.loading.hide()
            }
        }
    }

    #badge (openFile) {
        const formData = new FormData()
        document.querySelector('.cart').onclick = () => {
            if (document.querySelector('#selected').innerText === '0') {
                return this.message.text('Select at least one cart', 'var(--cor-warning)')
            }
            formData.append('members_ids', this.membersIds)
            this.modal.show({
                title: 'EMISSÃO DE CARTEIRINHA',
                content: openFile({ url: 'wallet', formData, method: 'POST' }),
                buttons: "<button class='button btn-secondary' value='close'>Fechar</button><button class='button btn-danger' value='print'>Imprimir</button>",
                callback: () => {
                    this.modal.buttons.onclick = (e) => {
                        const btnName = e.target.value
                        if (btnName === 'close') return this.modal.close()
                        window.print()
                    }
                }
            })
            .styles({
                element: '#boxe_main',
                css: {
                    height: '450px',
                    display: 'flex'
                }
            })
        }
    }

    certificate ({ fn, openFile, side = true }) {
        let ids = []
        const print = (ids) => {
            const formData = new FormData()
            formData.append('ids', ids)
            formData.append('side', side)
            this.modal.show({
                title: 'CERTIFICADO DE BATISMO',
                content: openFile({ url: 'certificate', formData, method: 'POST' }),
                buttons: "<button class='button btn-secondary' value='close'>Fechar</button><button class='button btn-danger' value='print'>Imprimir</button>",
                callback: () => {
                    /** Shifting aside */
                    const content = this.modal.content.querySelector('#certificate')
                    content.onclick = () => {
                        side = !side
                        formData.delete('side')
                        formData.append('side', side)
                        content.querySelectorAll('[data-id]').forEach((e) => {
                            ids.push(e.attributes['data-id'].value)
                        })
                        content.innerHTML = fn({ url: 'certificate', formData })
                    }

                    this.modal.buttons.onclick = btn => {
                        const btnName = btn.target.value
                        if (btnName === 'print') return window.print()

                        document.querySelector('#boxe_main').style.display = 'none'
                        document.querySelector('#mask_main').style.display = 'none'
                    }
                }
            })
            .styles({
                element: '#boxe_main',
                css: {
                    height: '450px',
                    display: 'flex'
                }
            })
        }
        document.querySelectorAll('.certificate').forEach((btn) => {
            btn.onclick = (e) => {
                let id = (e.target.parentElement.attributes['data-id'].value ?? null)
                if (ids.length === 0) {
                    const conf = this.modal.confirm({
                        title: "Você pode selecionar até dois certificados",
                        message: "Deseja selecionar mais um certificado?",
                        buttons: "<button class='button cancel' value='0'>NÃO</button><button class='button error' value='1' style='margin-left: 3px'>SIM</button>"
                    })
                    this.modal.mask.style.zIndex = '2'
                    conf.onclick = btn => {
                        ids.push(id)
                        if (btn.target.value == 0) {
                            print(ids)
                            return ids = []
                        }
                    }
                } else {
                    ids.push(id)
                    print(ids)
                    ids = []
                }
            }
        })
    }

    response (response, fn) {
        let background
        if (response.indexOf("success") !== -1) {
            background = "var(--cor-success)"
            fn()
            this.modal.close()
        } else if (response.indexOf("danger") !== -1) {
            background = "var(--cor-danger)"
        } else {
            background = "var(--cor-warning"
        }
        this.message.text(response, background)
    }

    #scrollUp () {
        ScrollUp.init('#tab-membership')
    }

    #searchMember () {
        const search = document.querySelector('#membership [name=search]')
        search.focus()
        search.onkeyup = str => this.#runSearch(search.value)

        document.querySelector('#membership i').onclick = icon => {
            search.value = ''
            this.#runSearch(search.value)
            search.focus()
        }
    }

    #runSearch (str) {
        str = str.toUpperCase()
        const icon = document.querySelector('#membership i').classList
        str.length === 0 ?
            icon.replace('fa-times', 'fa-search')
            : icon.replace('fa-search', 'fa-times')

        document.querySelectorAll('#tab-membership table').forEach((e) => {
            let member = e.id
            e.style.display = (typeof(member) !== 'undefined' && member.indexOf(str) === -1) ?
                'none' : 'block'
        })
    }

    showBirthmonth (fn) {
        const response = fn('membership/birthmonth')
        if (response !== '') {
            this.modal.show({
                title: 'Aniversariantes do Mês',
                content: response
            })
            .styles({
                element: '#boxe_main',
                css: {
                    height: 'auto',
                    display: 'flex'
                }
            })
        }
    }
}
