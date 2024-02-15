import AbstractView from "./abstractView.js"

export default class Moviment extends AbstractView {
    memberList

    listMembers (selected, getList, i) {
        let list = "<select class='select' name='description-" + i + "' >"
        let _memberList = (
            typeof(this.memberList) === "undefined" ?
                getList()
                : this.memberList
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

    mountingTableBalance (data, getList, edit=false) {
        let table = "<form><table class='my-table'><thead align='center'><th>DIA</th><th style='text-align:left'>DESCRIÇÃO</th><th>DÍZIMO/OFERTA</th><th>ENTRADA</th><th>SAÍDA</th><th>SALDO</th><th><i class='fa fa-trash mr-2'></i></th></thead><tbody>"
        let subtotal = 0
        for (let i in data) {
            if (i == 0) {
                subtotal += parseFloat(data[i].previousMonthBalance)
                table += "<tr><td align='center'>01</td><td>SALDO DO MÊS ANTERIOR</td><td></td><td></td><td></td><td align='right'>" + moeda(subtotal) + "</td></tr>"
                table += "<input type='hidden' name='previousMonthBalance' value=" + subtotal + "' />"
            } else {
                subtotal += valReal(data[i].deposit) - valReal(data[i].output)
                /** Editable values */
                let day = (edit ? "<input class='input' type='text' size='1' value='" + getYearMonthDay(data[i].date, 2) + "' name='day-" + i + "' style='text-align: center' />" : getYearMonthDay(data[i].date, 2))
                let description
                let diz = ""
                let ofe = ""
                if (data[i].tithe_offer === "diz") {
                    diz = "selected"
                    description = (edit ? this.listMembers(data[i].description, getList, i) : data[i].description)
                } else if (data[i].tithe_offer === "ofe") {
                    ofe = "selected"
                    description = "OFERTA"
                } else {
                    description = (edit ? "<input class='input' type='text' value='" + data[i].description + "' name='description-" + i + "' />" : data[i].description)
                }
                let tithe_offer = (edit ? "<select class='select' name='tithe_offer-" + i + "' style='text-align: center'><option value=''></option><option value='diz' " + diz + ">diz</option><option value='ofe' " + ofe + " >ofe</option></select>" : data[i].tithe_offer)
                let deposit = (edit && data[i].deposit != '0,00' ? "<input class='input' type='text' name='deposit-" + i + "' value='" + data[i].deposit + "'style='text-align: right'/>" : data[i].deposit)
                let output = ""
                if (edit && data[i].output != "0,00") {
                    output = "<input class='input' type='text' name='output-" + i + "' value='" + data[i].output + "' style='text-align: right'/>"
                } else if (data[i].proof_id != null) {
                    output = "<a href='" + data[i].proof_id + "' >" + data[i].output + "</a>"
                } else if (data[i].output != "0,00") {
                    output = data[i].output
                }

                table += "<tr data-id='" + data[i].id + "'><td align='center'>" + day + "</td>"
                table += "<td>" + (description ?? '') + "</td>"
                table += "<td align='center'>" + (data[i].tithe_offer ? tithe_offer : "") + "</td>"
                table += "<td align='right'>" + (valReal(deposit) != 0 ? deposit : "") + "</td>"
                table += "<td align='right'>" + (valReal(output) != 0 ? output : "") + "</td>"
                table += "<td align='right' style='text-align: right'>" + moeda(subtotal) + "</td>"
                table += (edit ? "<td class='delete' style='color: red'><i class='fa fa-times' title='Excluir esta linha' ></i></td></tr>" : "</tr>")
            }
        }
        table += "</tbody></table></form>"
        return table
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
                url,
                method: 'POST'
            })

            response = JSON.parse(response)
            let changes = []
            const formData = new FormData()
            if (response !== null) {
                let table = this.mountingTableBalance(response, getList, true)
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
                    } else if(btnName === "summary") {
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
                        $(e).mask('#.##0,#0', { reverse: true })
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
                    // const response = this.getPage({
                    //     url: 'moviment/save',
                    //     method: 'POST',
                    //     formData
                    // })
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
}
