import MountingMovimentTable from "../../lib/mountMovimentTable.js"
import ThumbImage from "../../lib/thumbImage.js"
import AbstractView from "./abstractView.js"

export default class Moviment extends AbstractView {
    memberList

    listMembers (selected, getList, i) {
        let list = "<select class='select' name='description-" + i + "' >"
        let _memberList = (
            typeof(this.memberList) === "undefined" ?
                getList() : this.memberList
        )
        list += "<option value=0></option>"
        if (_memberList !== null) {
            for (let member of _memberList) {
                list += "<option value='" + member + "' " + (member === selected ? 'selected' : '') + " >" + member + "</option>";
            }
            list += "</select>"
        }
        this.memberList = _memberList
        return list
    }

    setMask () {
        this.mask.createMask([ 'day', 'money' ])
        document.querySelector("#moviment form [name=day]").focus()
    }

    selectInOut({ getList, validate }) {
        const type = document.querySelector('#type').style
        const proof = document.querySelector('#proof').style
        type.display = 'none'
        proof.display = 'none'

        document.querySelector('#moviment select[name=in_out]').onchange = (e) => {
            const value = e.target.value

            if (value == 'deposit') {
                type.display = 'block'
                proof.display = 'none'

                document.querySelector('#moviment #type').onclick = (e) => {
                    const checked = e.target.value
                    const description = document.querySelector('#description')
                    if (checked == 'ofe') {
                        description.innerText = 'OFERTA'
                    } else if (checked == 'diz') {
                        description.innerHTML = this.listMembers(0, getList, 0)
                        description.querySelector('select').focus()
                    }
                }
            } else if (value == 'output') {
                type.display = 'none'
                proof.display = 'block'
                document.querySelector('#description').innerText = ''
                document.querySelector('#description').innerHTML = '<input required type="text"name="description" />'
                const file = document.querySelector('[type=file]')
                file.onchange = (e) => {
                    if (!validate({ files: e.target.files })) file.value = null
                }
            }
        }
    }

    btnForm({ submit }) {
        const form = document.querySelector('#moviment form')
        form.onsubmit = (e) => {
            e.preventDefault()
            this.#submit({ form, submit })
        }
        document.querySelectorAll('#moviment .buttons button').forEach((btn) => {
            btn.onclick = (e) => {
                this.loading.show()
                const btnName = e.target.value
                if (btnName === 'clear') {
                    form.querySelector('[name=day]').focus()
                    this.loading.hide()
                    return form.reset()
                }
                this.#submit({ form, submit })
            }
        })
        form.onkeyup = (e) => {
            if (e.which === 13) {
                this.#submit({ form, submit })
            }
        }
        form.querySelector('[type=file]').oninput = () => this.loading.hide()
    }

    #submit ({ form, submit }) {
        const formData = new FormData(form)
        const required = form.querySelectorAll('[required]')
        for (let i of required) {
            if (!i.value) {
                i.style.background = 'pink'
                this.message.text("<span class='warning'>The field or fields are requireds</span>")
                this.loading.hide()
                return i.focus()
            }
        }
        const response = submit(formData)
        if (response.indexOf('success') !== -1) {
            form.reset()
            form.querySelector('[name=day]').focus()
            form.querySelectorAll('[required]').forEach((e) => {
                e.style.background = 'white'
            })
        }
        this.message.text(response)
        this.loading.hide()
    }

    preview ({ openFile, getList, delMoviment, validate }) {
        document.querySelector("#moviment [value=preview]").onclick = (e) => {
            const month = document.querySelector('form [name=month]').value
            const year = document.querySelector('form [name=year]').value
            const url = "moviment/" + year + "/" + month
            this.memberList = getList()
            let response = openFile({
                url, method: 'POST'
            })

            if (response !== null) {
                const mountingMovimentTable = new MountingMovimentTable({ data: response, edition: true })
                const table = mountingMovimentTable.mountingMovimentTable({ getList })
                this.modal.show({
                    title: "MOVIMENTAÇÃO FINANCEIRA DE " + month.toUpperCase() + " DE " + year,
                    message: table,
                    buttons: "<button class='button btn-info' value='summary'>Resumo</button><button class='button btn-danger' value='save' disabled>Salvar Alterações</button>"
                })
                .styles({
                    elements: "input, select",
                    css: {
                        background: "#e9e98c none repeat scroll 0% 0%",
                        "font-size": "1em"
                    }
                })
                let changes = this.#changePreview()
                if (!changes) return
                this.#btnModalClick({ changes, openFile, year, month })

                /** Mask z-index*/
                this.setMask()

                this.#delPreview({ delMoviment })

                /** Change tithe_offer */
                this.#changeTitheOffer({ getList })
                this.#clickLinkProof({ openFile, validate })
            }
        }
    }

    #changePreview () {
        let changes = []
        this.modal.message.onchange = (e) => {
            changes.push({
                id: e.target.parentElement.parentElement.attributes['data-id'].value,
                name: e.target.name,
                value: e.target.value
            })
            if (e.target.value === 'diz') {
                const select = e.target.parentElement.previousSibling
                select.innerHTML = this.listMembers(0, getList, 0)
                select.querySelector('select').style.background = 'pink'
                this.message.text('<span class="warning">Select the name of the tithe payer</span>')
                this.modal.buttons.querySelector('[value=save]').disabled = true
                return null
            }
            this.modal.buttons.querySelector('[value=save]').disabled = false
        }
        return changes
    }

    #btnModalClick ({ changes, openFile, year, month }) {
        const formData = new FormData()
        this.modal.buttons.onclick = (e) => {
            const btnName = e.target.value
            if (btnName === 'save') {
                formData.append('changes', JSON.stringify(changes))
                const response = openFile({
                    url: 'moviment/update',
                    method: 'POST',
                    formData
                })
                this.message.text(response)
                if (response.indexOf('success') !== -1) this.modal.hideContent()
            } else if (btnName === "summary") {
                const form = this.modal.message.querySelector('form')
                const formData = new FormData(form)
                formData.append('year', year)
                formData.append('month', month)
                this.modal.modal({
                    html: openFile({
                        url: 'moviment/summarie',
                        method: 'POST',
                        formData
                    })
                })
            }
        }
    }

    #delPreview ({ delMoviment }) {
        document.querySelectorAll("#boxe_main table tbody .delete").forEach((del) => {
            del.onclick = (e) => {
                let tr = (
                    e.target.tagName === 'I' ?
                        e.target.parentElement.parentElement
                        : e.target.parentElement
                )
                let id = tr.attributes['data-id'].value
                tr.style.background = 'pink'

                const conf = this.modal.confirm({
                    message: 'Deseja realmente excluir a linha selecionada?'
                })
                conf.onclick = btn => {
                    if (btn.target.value == 1) {
                        const response = delMoviment({ id })
                        if (response.indexOf('success') !== -1) {
                            document.querySelector('#moviment [value=preview]').dispatchEvent(new Event('click'))
                        }
                        this.message.text(response)
                    }
                    tr.style.background = 'white'
                }
                document.onkeydown = (e) => {
                    if (e.code === 'Escape') tr.style.background = 'white'
                }
                this.modal.mask.onclick = () => {
                    this.modal.hideContent()
                    tr.style.background = 'white'
                }
            }
        })
    }

    #changeTitheOffer ({ getList }) {
        let listDiz
        this.modal.message.querySelectorAll('form table select').forEach((select) => {
            if (select.name.indexOf('tithe_offer') !== -1 && select.value === 'diz') {
                if (typeof(listDiz) === 'undefined') {
                    listDiz = this.listMembers(0, getList, 0)
                }
            }
            select.onchange = (e) => {
                if (e.target.name.indexOf('tithe_offer') !== -1) {
                    let type = e.target.value
                    if (type === 'diz') {
                        e.target.parentElement.previousSibling.innerHTML = listDiz
                    } else {
                        e.target.parentElement.previousSibling.innerHTML = 'OFERTA'
                    }
                }
            }
        })
    }

    #clickLinkProof ({ openFile, validate }) {
        this.modal.message.querySelectorAll('a').forEach((link) => {
            link.onclick = (e) => {
                this.loading.show()
                e.preventDefault()
                let formData = new FormData()
                const proofId = e.target.parentElement.attributes['proof-id'].value
                const movimentId = e.target.parentElement.attributes['moviment-id'].value
                formData.append('id', movimentId)
                formData.append('proof_id', proofId)
                const previewProof = this.modal.modal({
                    title: 'MODO DE EDIÇÃO',
                    content: openFile({
                        url: `proof/edit`,
                        method: 'POST',
                        formData
                    }),
                    buttons: '<button class="button save" value="save" disabled>Salvar</button>'
                })
                ThumbImage.run({
                    thumbs: [{
                        origin: '#proofFile',
                        destination: '#preview'
                    }]
                })

                const file = previewProof.dialogue.querySelector('[type=file]')
                file.onchange = () => {
                    if (!validate({ files: file.files })) {
                        file.value = ''
                        return this.loading.hide()
                    }
                    previewProof.dialogue.querySelector('button').disabled = false
                    this.loading.hide()
                }

                const img = previewProof.dialogue.querySelector('img')
                img.title = 'Clique para ampliar imagem'
                img.onmouseover = () => img.style.cursor = 'pointer'
                img.onclick = (e) => window.open(e.target.src, '_blank')

                /** save preview */
                previewProof.dialogue.querySelector('button').onclick = () => {
                    this.loading.show()
                    const form = previewProof.dialogue.querySelector('form')
                    formData = new FormData(form)
                    const data = {
                        id: movimentId,
                        proof_id: proofId
                    }
                    formData.append('data', JSON.stringify(data))
                    const response = openFile({
                        url: 'proof/edit/save',
                        method: 'POST',
                        formData
                    })
                    if (response.indexOf('success') !== -1) {
                        previewProof.hideContent()
                    }
                    this.loading.hide()
                }
            }
        })
    }

    closingReport ({ openFile, callScript }) {
        document.querySelector("#moviment [value=conclude]").onclick = () => {
            const formData = new FormData()
            let data = {
                month: document.querySelector("#moviment form [name=month]").value,
                year: document.querySelector("#moviment form [name=year]").value
            }
            formData.append('data', JSON.stringify(data))
            const conf  = this.modal.confirm({
                title: "Fechamento do relatório",
                message: "Deseja realmente fechar o relatório?"
            })
            this.modal.mask.style.zIndex = '2'
            conf.onclick = (btn) => {
                if (btn.target.value == 1) {
                    const response = openFile({
                        url: 'moviment/save',
                        method: 'POST',
                        formData
                    })
                    this.modal.hideContent()
                    if (response.indexOf('success') !== -1) {
                        this.showPage({
                            page: openFile({
                                url: 'moviment',
                                method: 'GET'
                            }),
                            fn: () => callScript()
                        })
                    }
                }
            }
        }
    }

    pagination ({ openFile, callScript }) {
        document.querySelectorAll("#moviment button").forEach((arrow) => {
            arrow.onclick = (e) => {
                const tagName = e.target.tagName
                const btnName = tagName === 'BUTTON' ?
                    e.target.attributes['data-name'].value :
                    e.target.parentElement.attributes['data-name'].value

                const maxPage = document.querySelector('#current-page').attributes['data-limit'].value
                let prevNext = (btnName === "next" ? 1 : -1)
                let currentPage = parseInt(document.querySelector('#current-page').innerText) + prevNext

                if (typeof(btnName) !== "undefined") {
                    if (maxPage < currentPage && btnName === "next" || btnName === "preview" && currentPage === 0) {
                        e.target.parentElement.disabled = true
                        return
                    }
                    currentPage = (currentPage !== 0 ? currentPage : 1)
                    document.querySelector("#current-page").innerText = currentPage
                    document.querySelector('.content').innerHTML = openFile({
                        url: 'moviment/pagination/' + currentPage,
                        method: 'GET'
                    })
                    callScript()
                }
            }
        })
    }

    openReport({ openFile, getList }) {
        document.querySelectorAll('#moviment a').forEach((a) => {
            a.onclick = (e) => {
                const year = a.attributes['data-year'].value
                const month = a.attributes['data-month'].value
                let response = openFile({
                    url: 'moviment/' + year + '/' + month,
                    method: 'POST'
                })
                if (response !== null) {
                    const mountingMovimentTable = new MountingMovimentTable({
                        data: response,
                        edition: false
                    })
                    const table = mountingMovimentTable.mountingMovimentTable({ getList })

                    this.modal.show({
                        title: 'MOVIMENTAÇÃO FINANCEIRA DE ' + month.toUpperCase() + ' DE ' + year,
                        message: table,
                        buttons: "<button class='button btn-danger'>Resumo</button>"
                    })

                    /** Open proof */
                    this.#openProof()

                    this.modal.buttons.onclick = () => {
                        const form = this.modal.message.querySelector('form')
                        const formData = new FormData(form)
                        formData.append('year', year)
                        formData.append('month', month.toUpperCase())
                        this.#summarie({ openFile, formData })
                    }
                }
            }
        })
    }

    #openProof () {
        document.querySelectorAll("#boxe_main a").forEach((e) => {
            e.onclick = (evt) => {
                evt.preventDefault()
                let id = e.attributes['href'].value
                window.open("proof/show/id/" + id)
            }
        })
    }

    #summarie ({ openFile, formData }) {
        this.modal.modal({
            html: openFile({
                url: 'moviment/summarie',
                method: 'POST',
                formData
            }),
            buttons: "<button class='button btn-default mr-1' value='close'>Fechar</button><button class='button btn-danger' value='print'>Visualizar Impressão</button>",
            callback: () => {
                this.modal.dialogue.querySelectorAll('button').forEach((btn) => {
                    btn.onclick = (e) => {
                        const btnName = e.target.value
                        if(btnName === "close") {
                            document.querySelector("#div_dialogue #content").innerHTML = ""
                            document.querySelector("#div_dialogue").style.display = 'none'
                            document.querySelector("#mask_main").style.zIndex = 2
                        } else {
                            this.#printPreview({ openFile, formData })
                        }
                    }
                })
            }
        })
    }

    #printPreview ({ formData, openFile }) {
        this.modal.new({
            content: openFile({
                url: "impression",
                method: 'POST',
                formData
            }),
            box: "box_print",
            buttons: "<button class='button btn-default mr-1' value='close'>Fechar</button><button class='button btn-danger' value='print'>Imprimir</button>",
            callback: () => {
                this.modal.mask.style.zIndex = "5"
                this.modal.mask.onclick = evt => evt.preventDefault()

                document.querySelector('#box_print #buttons').onclick = (btn) => {
                    const btnName = btn.target.value
                    if (btnName === 'print') return window.print()
                    if (btnName === 'close') {
                        this.modal.mask.style.zIndex = '4'
                        document.querySelector('#box_print').remove()
                        this.modal.clickMaskEnable()
                        this.loading.hide()
                    }
                }
            }
        })
    }

    proof ({ openFile, validate, initializer }) {
        document.querySelector('#proof select[name=year]').onchange = (e) => {
            this.loading.show()
            const year = e.target.value
            const data = JSON.parse(
                openFile({
                    url: 'proof/year/' + year,
                    method: 'POST'
                })
            )
            if (data !== null) {
                let option = '<option value=""></option>'
                for (let i of data) {
                    option += `<option value='${i}'>${i}</option>`
                }
                document.querySelector('#proof select[name=month]').innerHTML = option
            }
            this.loading.hide()
        }

        document.querySelector('#proof select[name=month]').onchange = (e) => {
            this.loading.show()
            const year = document.querySelector('#proof select[name=year]').value
            const month = e.target.value
            const formData = new FormData()
            formData.append('year', year)
            formData.append('month', month)
            const data = JSON.parse(
                openFile({
                    url: 'proof/proof',
                    method: 'POST',
                    formData
                })
            )
            if (data !== null) {
                let table = "<thead><tr><th>Descrição</th><th>Comprovante</th></tr></thead><tbody>"
                for(let i of data) {
                    table += "<tr data-id='" + i.id + "'><td>" + i.description + "</td><td><input accept='image/*' type='file' name='proofs[]' /></td></tr>";
                }
                table += '</tbody>'
                document.querySelector("#proof table").innerHTML = table
            } else {
                this.message.text('<span class="warning">No data in this periode</span>')
                if (document.querySelector('#proof table tbody') !== null) {
                    document.querySelector('#proof table tbody').remove()
                }
            }
            this.loading.hide()
        }

        /** Enable rescue button */
        document.querySelector("#proof table").onchange = (file) => {
            if (!validate(file.target)) {
                file.target.value = ''
                return false
            }
            document.querySelector("#proof button[type=submit]").disabled = false
        }

        document.querySelector("#proof #form-proof").onreset = (e) => {
            e.preventDefault()
            document.querySelectorAll("#proof #form-proof [type=file]").forEach((e) => {
                e.value = ''
            })
            document.querySelector("#proof button[type=submit]").disabled = true
        }

        document.querySelector('#proof #form-proof [type=submit]').onclick = () => this.loading.show()
        document.querySelector("#proof #form-proof").onsubmit = (e) => {
            e.preventDefault()
            const form = document.querySelector('#proof #form-proof')
            const formData = new FormData(form)

            /** pick up attached files */
            let data = []
            document.querySelectorAll("#proof #form-proof [type=file]").forEach((e) => {
                if (e.value) {
                    let file = e.files[0]
                    let id = e.parentElement.parentElement.attributes['data-id'].value
                    data.push({ id, name: file.name })
                }
            })

            formData.append('data', JSON.stringify(data))
            if (data.length < 1) {
                return this.message.text("<span class='warning'>No voucher was added</span>")
            }

            const response = JSON.parse(
                openFile({
                    url: 'proof/save',
                    method: 'POST',
                    formData
                })
            )

            if (response.indexOf('success') !== -1) {
                document.querySelector('.content').innerHTML = openFile({
                    url: 'proof/init',
                    method: 'GET'
                })
                initializer({ page: 'proof' })
            }
            this.message.text(response)
            this.loading.hide()
        }
    }
}
