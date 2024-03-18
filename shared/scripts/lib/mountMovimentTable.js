export default class MountingMovimentTable {
    #data
    edition

    /**
     *
     * @param {data} JSON: table
     * @param {edition} bool
     */
    constructor ({ data, edition }) {
        this.#data = JSON.parse(data)
        this.edition = edition
    }

    mountingMovimentTable ({ getList }) {
        let edit = this.edition
        let table = "<form id='tabMoviment' method='POST' action='#'><table class='my-table'>" + this.#getHead() + "<tbody>"

        table += this.#mountingRows({ edit, getList })
        table += "</tbody></table></form>"
        return table
    }

    #getHead () {
        return "<thead align='center'><th>DIA</th><th style='text-align:left'>DESCRIÇÃO</th><th>DÍZIMO/OFERTA</th><th>ENTRADA</th><th>SAÍDA</th><th>SALDO</th><th>" + (this.edition ? "<i class='fa fa-trash mr-2'></i>" : "") + "</th></thead>"
    }

    /**
     * @var row row_table: array description, tithe_offer
     */
    #titheOffer ({ row, edit, i, getList }) {
        let description = ''
        let diz = ''
        let ofe = ''
        let type = (edit ? 'text' : 'hidden')
        if (row.tithe_offer === "diz") {
            diz = "selected"
            if (edit) {
                description = this.#listMembers(row.description, getList, i)
            } else {
                description = "<input name='description-" + i + "' type='" + type + "' value='" + row.description + "'/>"
            }
        } else if (row.tithe_offer === "ofe") {
            ofe = "selected"
            description = "OFERTA"
        } else {
            description = "<input class='input' type='" + type + "' value='" + row.description + "' name='description-" + i + "' />"
        }
        let tithe_offer
        if (edit) {
            tithe_offer = "<select class='select' name='tithe_offer-" + i + "' style='text-align: center'><option value=''></option><option value='diz' " + diz + ">diz</option><option value='ofe' " + ofe + " >ofe</option></select>"
        } else {
            tithe_offer = "<input name='tithe_offer-" + i + "' type='" + type + "' value='" + row.tithe_offer + "'/>" + row.tithe_offer
        }
        return { description, tithe_offer }
    }

    /**
     *
     * @param {row table} row
     * @param {index row} i
     * @param {modo edition}
     * @returns output
     */
    #outputTable (row, i, edit) {
        let output = ""
        if (edit && row.output != "0,00") {
            output = "<input class='input money' type='text' name='output-" + i + "' value='" + row.output + "' style='text-align: right'/>"
            let link = '#'
            let color = 'gray'
            if (row.proof_id) {
                link = `proof/show/id/${row.proof_id}`
                color = 'blue'
            }
            output += `<a target="_blank" href="${link}" moviment-id="${row.id}" proof-id="${row.proof_id}"><i class="fa fa-paperclip" style="color: ${color}"></i></a>`
        } else if (row.proof_id != null) {
            output = "<input type='hidden' name='output-" + i + "' value='" + row.output + "'/>"
            output += "<a href='" + row.proof_id + "' >" + row.output + "</a>"
        } else if (row.output != "0,00") {
            output = "<input type='hidden' name='output-" + i + "' value='" + row.output + "'/>" + row.output
        }
        return { output }
    }

    /**
     *
     * @param {*} selected
     * @param {*} getList
     * @param {*} i
     * @returns selectList
     */
    #listMembers (selected, getList, i) {
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

    /**
     *
     * @param {*} param0
     * @returns
     */
    #mountingRows ({ edit, getList }) {
        const data = this.#data
        let subtotal = 0
        let _table = ''
        for (let i in data) {
            if (i == 0) {
                subtotal += parseFloat(data[i].previousMonthBalance)
                _table += "<tr><td align='center'>01</td><td>SALDO DO MÊS ANTERIOR</td><td></td><td></td><td></td><td align='right'>" + this.#moeda(subtotal) + "</td></tr>"
                _table += "<input type='hidden' name='previousMonthBalance' value=" + subtotal + "' />"
            } else {
                subtotal += this.#valReal(data[i].deposit) - this.#valReal(data[i].output)
                /** Editable values */
                let type = edit ? 'text' : 'hidden'
                let day = "<input class='input day' type='" + type + "' size='1' value='" + this.#getYearMonthDay(data[i].date, 2) + "' name='day-" + i + "' style='text-align: center' />"

                const { description, tithe_offer } = this.#titheOffer({
                    row: data[i], edit, i, getList
                })

                let deposit = (data[i].deposit != '0,00' ? "<input class='input money' type='" + type + "' name='deposit-" + i + "' value='" + data[i].deposit + "'style='text-align: right'/>" : '')

                const { output } = this.#outputTable (data[i], i, edit)

                _table += "<tr data-id='" + data[i].id + "'><td align='center'>" + day + (!edit ? this.#getYearMonthDay(data[i].date, 2) : '') + "</td>"
                _table += "<td>" + description + (!edit && description !== 'OFERTA' ? data[i].description : '') + "</td>"
                _table += "<td align='center'>" + (data[i].tithe_offer ? tithe_offer : "") + "</td>"
                _table += "<td align='right'>" + deposit + (!edit && this.#valReal(data[i].deposit) != 0 ? data[i].deposit : '') + "</td>"
                _table += "<td align='right'>" + (this.#valReal(output) != 0 ? output : "") + "</td>"
                _table += "<td align='right' style='text-align: right'>" + this.#moeda(subtotal) + "</td>"
                _table += (edit ? "<td class='delete' style='color: red'><i class='fa fa-times' title='Excluir esta linha' ></i></td></tr>" : "</tr>")
            }
        }
        return _table
    }

    #valReal (val) {
        let _val = (
            val != null ? val : "0,00"
        )
        return parseFloat(_val.replace(".","").replace(",","."))
    }

    #moeda (val) {
        return parseFloat(val).toLocaleString('pt-br', {
            minimumFractionDigits: 2, maximumFractionDigits: 2
        })
    }

    #getYearMonthDay (date, index, name=null) {
        date = date.split("-")
        if(!name || index !== 1) {
            return date[index]
        }
        let conversion = [
            "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho",
            "agosto", "setembro", "outubro", "novembro", "dezembro"
        ]
        return conversion[name-1]
    }
}
