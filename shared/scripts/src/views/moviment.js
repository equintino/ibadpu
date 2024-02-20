import Loading from "../../lib/loading.js"
import MountingMovimentTable from "../../lib/mountMovimentTable.js"
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

    mask() {
        /* Máscaras ER */
        // function mascara( str,fn ){
        //     let v_obj = str
        //     let v_fun = fn
        //     setTimeout(execmascara(v_obj, v_fun), 1)
        // }

        // function execmascara(v_obj, v_fun){
        //     return v_fun(v_obj)
        // }

        // function mtel(v){
        //     v = v.replace(/D/g,""); //Remove tudo o que não é dígito
        //     console.log(
        //         v
        //     )
        //     return
        //     v = v.replace(/^(d{2})(d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        //     v = v.replace(/(d)(d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
        //     return v;
        // }

        // // function id( el ){
        // //     return document.getElementById( el );
        // // }
        // // window.onload = function(){
        // //     id('telefone').onkeypress = function(){
        // //         mascara( this, mtel );
        // //     }
        // // }


        // let day = document.querySelector('form [name=day]')
        // let money = document.querySelector('form [name=value]')
        // day.focus()

        // money.onkeyup = (e) => {
        //     let value = e.target.value
        //     console.log(
        //         value.replace(/\d{2}/, '$1'),
        //         // value.replace(/\D/g, '')
        //     )
        // }

        // const cpf = '12345679810'

        // const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")

        $("#moviment form [name=day]").mask("#0").focus()
        $("#moviment form [name=value]").mask("#.##0,00", { reverse: true })
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
                const btnName = e.target.value
                if (btnName === 'clear') {
                    form.querySelector('[name=day]').focus()
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
    }

    #submit ({ form, submit }) {
        const formData = new FormData(form)
        const required = form.querySelectorAll('[required]')
        for (let i of required) {
            if (!i.value) {
                i.style.background = 'pink'
                this.message.text("<span class='warning'>The field or fields are requireds</span>")
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
    }

    preview ({ getPage, getList, evt }) {
        document.querySelector("#moviment [value=preview]").onclick = (e) => {
            const month = document.querySelector('form [name=month]').value
            const year = document.querySelector('form [name=year]').value
            const url = "moviment/" + year + "/" + month
            this.memberList = getList()
            let response = getPage({
                url, method: 'POST'
            })

            let changes = []
            const formData = new FormData()
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
                        return this.modal.buttons.querySelector('[value=save]').disabled = true
                    }
                    this.modal.buttons.querySelector('[value=save]').disabled = false
                }
                this.modal.buttons.onclick = (e) => {
                    const btnName = e.target.value
                    if (btnName === 'save') {
                        formData.append('changes', JSON.stringify(changes))
                        const response = evt({ btnName, formData })
                        this.message.text(response)
                        if (response.indexOf('success') !== -1) this.modal.hideContent()
                    } else if (btnName === "summary") {
                        const form = this.modal.message.querySelector('form')
                        const formData = new FormData(form)
                        formData.append('year', year)
                        formData.append('month', month)
                        this.modal.modal({
                            html: evt({ btnName, formData })
                        })
                    }
                }

                /** Mask */
                document.querySelectorAll('#boxe_main table tbody input').forEach((e) => {
                    if (e.name.indexOf('day') !== -1) {
                        $(e).mask('#0')
                    }
                    if (e.name.indexOf('deposit') !== -1 || e.name.indexOf('output') !== -1) {
                        $(e).mask('#0.##0,#0', { reverse: true })
                    }
                })

                const event = new Event('click')
                document.querySelectorAll("#boxe_main table tbody .delete").forEach((del) => {
                    del.onclick = (e) => {
                        let tr = e.target.parentElement.parentElement
                        let id = tr.attributes['data-id'].value
                        tr.style.background = 'pink'

                        const conf = this.modal.confirm({
                            message: 'Deseja realmente excluir a linha selecionada?'
                        })
                        conf.onclick = btn => {
                            if (btn.target.value == 1) {
                                formData.append('id', id)
                                const response = evt({ btnName: 'delete', formData })
                                if (response.indexOf('success') !== -1) {
                                    document.querySelector('#moviment [value=preview]').dispatchEvent(event)
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

                /** Change tithe_offer */
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
        }
    }

    closingReport ({ fn, getPage, callScript }) {
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
                    const response = fn({ formData })
                    if (response.indexOf('success') !== -1) {
                        this.showPage({
                            page: getPage({ url: 'moviment' }),
                            fn: () => callScript()
                        })
                    }
                }
            }
        }
    }

    pagination ({ getPage, callScript }) {
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
                    document.querySelector('.content').innerHTML = getPage({
                        url: 'moviment/pagination/' + currentPage,
                        method: 'GET'
                    })
                    callScript()
                }
            }
        })
    }

    openReport({ getPage, getList }) {
        document.querySelectorAll('#moviment a').forEach((a) => {
            a.onclick = (e) => {
                const year = a.attributes['data-year'].value
                const month = a.attributes['data-month'].value
                let response = getPage({
                    url: 'moviment/' + year + '/' + month,
                    method: 'POST'
                })
                if (response !== null) {
                    const mountingMovimentTable = new MountingMovimentTable({ data: response, edition: false })
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
                        this.#summarie({ getPage, formData })
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

    #summarie ({ getPage, formData }) {
        this.modal.modal({
            html: getPage({
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
                            this.#printPreview({ getPage, formData })
                        }
                    }
                })
            }
        })
    }

    #printPreview ({ formData, getPage }) {
        this.modal.new({
            content: getPage({
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
                        Loading.hide()
                    }
                }
            }
        })
    }
}
