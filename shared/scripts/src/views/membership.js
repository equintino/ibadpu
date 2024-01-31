import ScrollUp from "../../lib/scrollup.js"
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
        this.#scrollUp()
        this.#searchMember()
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

    certificate(fn) {
        let ids = []
        document.querySelectorAll('.certificate').forEach((btn) => {
            btn.onclick = (e) => {
                let id = (e.target.parentElement.attributes['data-id'].value ?? null)
                if (ids.length === 0) {
                    modal.confirm({
                        title: "Você pode selecionar até dois certificados",
                        message: "Deseja selecionar mais um certificado?",
                        buttons: "<button class='button cancel' value='0'>NÃO</button><button class='button error' value='1' style='margin-left: 3px'>SIM</button>"
                    })
                    .on("click", function(e) {
                        let btnValue = e.target.value
                        if (btnValue == 0) {
                            ids.push(id)
                            fn({ ids })
                            ids = []
                        }
                        if (btnValue == 1) {
                            ids.push(id)
                        }
                    })
                } else {
                    ids.push(id)
                    fn({ ids })
                    ids = []
                }
            }
        })
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

    #scrollUp() {
        ScrollUp.init('#tab-membership')
    }

    #searchMember() {
        const search = document.querySelector('#membership [name=search]')
        search.onkeyup = str => {
            this.#runSearch(search.value)
        }

        // $("#membership").on("keyup", function() {
        //     $(this).find("i").removeClass("fa-search").addClass("fa-times");
        //     searchMember();
        // });
        // $("#membership button#search").on("click", function() {
        //     $(this).parent("section").find("input").val("").focus();
        //     $(this).find("i").removeClass("fa-times").addClass("fa-search");
        //     searchMember();
        // });
    }

    #runSearch(str) {
        str = str.toUpperCase()
        document.querySelectorAll('#tab-membership table').forEach((e) => {
            let member = e.id
            e.style.display = (typeof(member) !== 'undefined' && member.indexOf(str) === -1) ?
                'none' : 'block'
        })
    }
}
