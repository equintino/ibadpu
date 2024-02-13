import AbstractController from "./abstractController.js"
import View from "./../views/moviment.js"
import Service from "./../services/meviment.js"

export default class Moviment extends AbstractController {
    #view
    #service
    listMembers
    list

    initializer({ page }) {
        this.#view = new View()
        this.#service = new Service()

        this.list = this.#getListMembers()
        this.#location({ page })
        this.#btnForm()
    }

    #location({ page }) {
        if (page.indexOf('new') !== -1) {
            this.#mask()
            this.#selectInOut()
            this.#preview()
            this.#closingReport()
            return
        }
        if (page.indexOf('proof') !== -1) {
            return alert('proof')
        }
        return alert('relatório')
    }

    #mask() {
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

    #selectInOut() {
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
                    if (checked == 'ofe') {
                        document.querySelector('#description').innerText = 'OFERTA'
                    } else if (checked == 'diz') {
                        document.querySelector("#description").innerHTML = this.list
                    }
                }
            } else if (value == 'output') {
                type.display = 'none'
                proof.display = 'block'
                document.querySelector('#description').innerText = ''
                document.querySelector('#description').innerHTML = '<input required type="text"name="description" />'
                this.#validate()
            }
        }
    }

    #validate() {
        document.querySelector('#moviment [type=file]').onchange = (e) => {
            let ext = e.target.files[0].type.split('/').pop()
            let extValid = [ 'pdf', 'jpeg', 'png', 'jpg' ]
            if (extValid.indexOf(ext) === -1) {
                this.#view.message.text('<span class="warning">This file is not allowed</span>')
                e.target.value = null
            }
        }
    }

    #btnForm() {
        const form = document.querySelector('#moviment form')
        form.onsubmit = (e) => {
            e.preventDefault()
            this.#submit(form)
        }
        document.querySelectorAll('#moviment .buttons button').forEach((btn) => {
            btn.onclick = (e) => {
                const btnName = e.target.value
                if (btnName === 'clear') {
                    form.querySelector('[name=day]').focus()
                    return form.reset()
                }
                this.#submit(form)
            }
        })
        form.onkeyup = (e) => {
            if (e.which === 13) {
                this.#submit(form)
            }
        }
    }

    #submit(form) {
        const formData = new FormData(form)
        const required = form.querySelectorAll('[required]')
        for (let i of required) {
            if (!i.value) {
                i.style.background = 'pink'
                this.#view.message.text("<span class='warning'>The field or fields are requireds</span>")
                return i.focus()
            }
        }
        const response = this.getPage({
            url: 'moviment/add',
            method: 'POST',
            formData
        })
        if (response.indexOf('success') !== -1) {
            form.reset()
            form.querySelector('[name=day]').focus()
            form.querySelectorAll('[required]').forEach((e) => {
                e.style.background = 'white'
            })
            this.#view.message.text("Data saved successfuly")
        }
    }

    #preview() {
        let moviment = this
        document.querySelector("#moviment [value=preview]").onclick = (e) => {
            const month = document.querySelector('form [name=month]').value
            const year = document.querySelector('form [name=year]').value
            const url = "moviment/" + year + "/" + month
            let response = this.getPage({
                url,
                method: 'POST'
            })

            response = JSON.parse(response)
            let changes = []
            if (response !== null) {
                let table = moviment.mountingTableBalance(response, true)
                this.#view.modal.show({
                    title: "MOVIMENTAÇÃO FINANCEIRA DE " + month.toUpperCase() + " DE " + year,
                    message: table,
                    buttons: "<button class='button btn-info' value='summary'>Resumo</button><button class='button btn-danger' value='save'>Salvar Alterações</button>"
                })
                .styles({
                    elements: "input, select",
                    css: {
                        background: "#e9e98c none repeat scroll 0% 0%",
                        "font-size": "1em"
                    }
                })
                this.#view.modal.message.onchange = (e) => {
                    changes.push({
                        id: e.target.parentElement.parentElement.attributes['data-id'].value,
                        name: e.target.name,
                        value: e.target.value
                    })
                }
                this.#view.modal.buttons.onclick = (e) => {
                    const btnName = e.target.value
                    if (btnName === 'save') {
                        if (changes.length === 0) return this.#view.message.text("<span class='warning'>There were no changes</span>")
                        const formData = new FormData()
                        formData.append('changes', JSON.stringify(changes))
                        const response = this.getPage({
                            url: 'moviment/update',
                            method: 'POST',
                            formData
                        })
                        this.#view.message.text(response)
                        if (response.indexOf('success') !== -1) this.#view.modal.hideContent()
                    } else if(btnName === "summary") {
                        const form = this.#view.modal.message.querySelector('form')
                        const formData = new FormData(form)
                        formData.append('year', year)
                        formData.append('month', month)
                        this.#view.modal.modal({
                            html: this.getPage({
                                url: 'moviment/summarie',
                                method: 'POST',
                                formData
                            })
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

                        const conf = this.#view.modal.confirm({
                            message: 'Deseja realmente excluir a linha selecionada?'
                        })
                        conf.onclick = btn => {
                            if (btn.target.value == 1) {
                                const response = this.getPage({
                                    url: 'moviment/delete/' + id,
                                    method: 'POST'
                                })
                                if (response.indexOf('success') !== -1) {
                                    document.querySelector('#moviment [value=preview]').dispatchEvent(event)
                                }
                                this.#view.message.text(response)
                            }
                            tr.style.background = 'white'
                        }
                        document.onkeydown = (e) => {
                            if (e.code === 'Escape') tr.style.background = 'white'
                        }
                        this.#view.modal.mask.onclick = () => {
                            this.#view.modal.hideContent()
                            tr.style.background = 'white'
                        }
                    }
                })

                /** Change tithe_offer */
                let listDiz
                this.#view.modal.message.querySelectorAll('form table select').forEach((select) => {
                    if (select.name.indexOf('tithe_offer') !== -1 && select.value === 'diz') {
                        if (typeof(listDiz) === 'undefined') {
                            listDiz = select.parentElement.previousSibling.innerHTML
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

    #getListMembers(selected, memberList, i) {
        let list = "<select class='select' name='description-" + i + "' >";
        memberList = (
            typeof memberList === "undefined" ?
                loadData("membership/list")
                : memberList
        )
        if (memberList !== null) {
            for (let member of memberList) {
                list += "<option value='" + member + "' " + (member === selected ? 'selected' : '') + " >" + member + "</option>";
            }
            list += "</select>";
        }
        this.listMembers = memberList;
        return list
    }

    mountingTableBalance (data, edit=false) {
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
                let description = (edit ? this.#getListMembers(data[i].description, this.listMembers, i) : data[i].description)
                let diz = ""
                let ofe = ""
                if (data[i].tithe_offer === "diz") {
                    diz = "selected"
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

    #pagination() {
        $("#moviment button").on("click", function() {
            let btnName = $(this).attr("data-name");
            let prevNext = (btnName === "next" ? 1 : -1);
            let currentPage = parseInt($("#current-page").text()) + prevNext;
            let maxPage = $("#current-page").attr("data-limit");
            if(typeof(btnName) !== "undefined") {
                if(maxPage && btnName === "next" || btnName === "preview" && currentPage === 0) {
                    $(this).attr("disabled",true);
                    return null;
                }
                $(".loading, #mask_main").show();
                currentPage = (currentPage !== 0 ? currentPage : 1);
                $("#current-page").text(currentPage);
                $(".content").load("moviment/pagination/" + currentPage, function() {
                    scriptMoviment();
                    $(".loading, #mask_main").hide();
                });
            }
        })
    }

    #openReport() {
        $("#moviment a").on("click", function(e) {
            e.preventDefault();
            let year = $(this).attr("data-year");
            let month = $(this).attr("data-month");
            let data = loadData("moviment/" + year + "/" + month);
            if(data !== null) {
                let date = data[1].date;
                let monthNumber = data[1].month;
                let table = mountingTableBalance(data);
                modal.show({
                    title: "MOVIMENTAÇÃO FINANCEIRA DE " + getYearMonthDay(date, 1, monthNumber).toUpperCase() + " DE " + getYearMonthDay(date, 0),
                    message: table
                }).
                complete({
                    buttons: "<button class='button btn-danger'>Resumo</button>",
                    callback: function() {
                        /** Open proof */
                        $("#boxe_main a").on("click", function(evt) {
                            evt.preventDefault();
                            let id = $(this).attr("href");
                            window.open("proof/show/id/" + id);
                        });
                        $(buttons).on("click", function() {
                            let btnName = $(this).text();
                            if(btnName === "Resumo") {
                                let html = loadData("moviment/summarie", { data }, "html");
                                if(html !== null) {
                                    modal.modal({
                                        html: html,
                                        buttons: "<button class='button btn-default mr-1'>Fechar</button><button class='button btn-danger'>Visualizar Impressão</button>",
                                        callback: function() {
                                            $("#div_dialogue button").on("click", function() {
                                                if($(this).text() === "Fechar") {
                                                    $("#div_dialogue #content").html("");
                                                    $("#div_dialogue").hide();
                                                    $("#mask_main").css("z-index","2");
                                                } else {
                                                    /** Open impression preview */
                                                    let dataPost = {
                                                        "year": getYearMonthDay(date, 0),
                                                        "month": getYearMonthDay(date, 1)
                                                    };
                                                    modal.new({
                                                        url: "impression",
                                                        post: dataPost,
                                                        box: "box_print",
                                                        buttons: "<button class='button btn-default mr-1'>Fechar</button><button class='button btn-danger'>Imprimir</button>",
                                                        callback: function() {
                                                            $("#mask_main").css("z-index", "5");
                                                            $("#box_print button").on("click", function() {
                                                                if($(this).text() === "Imprimir") {
                                                                    window.print();
                                                                }
                                                                $("#box_print").remove();
                                                                $("#mask_main").css("z-index", "4");
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                        });
                    }
                }).styles();
            }
        });
    }

    #closingReport() {
        document.querySelector("#moviment [value=conclude]").onclick = () => {
            const formData = new FormData()
            let data = {
                month: document.querySelector("#moviment form [name=month]").value,
                year: document.querySelector("#moviment form [name=year]").value
            }
            formData.append('data', JSON.stringify(data))
            const conf  = this.#view.modal.confirm({
                title: "Fechamento do relatório",
                message: "Deseja realmente fechar o relatório?"
            })
            this.#view.modal.mask.style.zIndex = '2'
            conf.onclick = (btn) => {
                if (btn.target.value == 1) {
                    const response = this.getPage({
                        url: 'moviment/save',
                        method: 'POST',
                        formData
                    })
                    if (response.indexOf('success') !== -1) {
                        this.#view.showPage({
                            page: this.getPage({ url: 'moviment' }),
                            fn: () => this.#location({ page: 'moviment' })
                        })
                    }
                }
            }
        }
    }

    #proof() {
        $("#proof select[name=year]").on("change", function() {
            $("#proof table tr").remove();
            let year = $(this).val();
            let url = "proof/year/" + year;
            let data = loadData(url);
            if(data !== null) {
                let option = "<option value=''></option>";
                for(let i in data) {
                    option += "<option value='" + data[i] + "'>" + data[i] + "</option>";
                }
                $("#proof select[name='month']").html(option);
            }
        });
        $("#proof select[name=month]").on("change", function() {
            let year = $("#proof select[name=year]").val();
            let month = $(this).val();
            let params = { year, month };
            let data = loadData("proof/proof", params);
            if(data !== null) {
                let table = "<tr><th>Descrição</th><th>Comprovante</th></tr>";
                for(let i in data) {
                    table += "<tr data-id='" + data[i].id + "'><td>" + data[i].description + "</td><td><input accept='image/*' type='file' name='proofs[]' /></td></tr>";
                }
                $("#proof table").html(table);
            }
        });

        /** Enable rescue button */
        $("#proof table").on("change", function() {
            $("#proof button").attr("disabled", false);
        });

        $("#proof #form-proof").on("reset", function(e) {
            e.preventDefault();
            $("#proof #form-proof [type=file]").val("");
        });
        $("#proof #form-proof").on("submit", function(e) {
            e.preventDefault();
            let formData = new FormData($("#proof #form-proof")[0]);
            /** pick up attached files */
            let ids = [];
            $("#proof #form-proof [type=file]").each(function() {
                let file = $(this)[0].files[0];
                let id = $(this).closest("tr").attr("data-id");
                if(typeof file !== "undefined") {
                    ids.push(id);
                    formData.append("ids[]", id);
                    formData.append("names[]", file.name);
                }
            });
            if(ids.length < 1) {
                return alertLatch("No voucher was added", "var(--cor-warning");
            }
            if(saveData("proof/save", formData)) {
                for(let i in ids) {
                    $(this).find("table tr[data-id=" + ids[i] + "]").remove();
                }
            }
        });
    }

    #old() {
        // const scriptMoviment = () => {
            /** Functions */
            // let memberList;
            // const listMembers = (selected) => {
            //     let list = "<select class='select' name='description' >";
            //     memberList = (typeof memberList === "undefined" ? loadData("membership/list") : memberList);
            //     if(memberList !== null) {
            //         for(let member of memberList) {
            //             list += "<option value='" + member + "' " + (member === selected ? 'selected' : '') + " >" + member + "</option>";
            //         }
            //         list += "</select>";
            //     }
            //     return list;
            // }
            // const mountingTableBalance = (data, edit=false) => {
            //     let table = "<table class='my-table'><thead align='center'><th>DIA</th><th style='text-align:left'>DESCRIÇÃO</th><th>DÍZIMO/OFERTA</th><th>ENTRADA</th><th>SAÍDA</th><th>SALDO</th></thead><tbody>";
            //     let subtotal = 0;
            //     for(let i in data) {
            //         if(i == 0) {
            //             subtotal += parseFloat(data[i].previousMonthBalance);
            //             table += "<tr><td align='center'>01</td><td>SALDO DO MÊS ANTERIOR</td><td></td><td></td><td></td><td align='right'>" + moeda(subtotal) + "</td></tr>";
            //         } else {
            //             subtotal += valReal(data[i].deposit) - valReal(data[i].output);
            //             /** Editable values */
            //             let day = (edit ? "<input class='input' type='text' size='1' value=" + getYearMonthDay(data[i].date, 2) + " name='day' style='text-align: center' />" : getYearMonthDay(data[i].date, 2));
            //             let description = (edit ? listMembers(data[i].description) : data[i].description);
            //             let diz = "";
            //             let ofe = "";
            //             if(data[i].tithe_offer === "diz") {
            //                 diz = "selected";
            //             } else if(data[i].tithe_offer === "ofe") {
            //                 ofe = "selected";
            //                 description = "OFERTA";
            //             } else {
            //                 description = (edit ? "<input class='input' type='text' value='" + data[i].description + "' name='description' />" : data[i].description);
            //             }
            //             let tithe_offer = (edit ? "<select class='select' name='tithe_offer'><option value=''></option><option value='diz' " + diz + ">diz</option><option value='ofe' " + ofe + " >ofe</option></select>" : data[i].tithe_offer);
            //             let deposit = (edit && data[i].deposit != '0,00' ? "<input class='input' type='text' name='deposit' value='" + data[i].deposit + "'/>" : data[i].deposit);
            //             let output = "";
            //             if(edit && data[i].output != "0,00") {
            //                 output = "<input class='input' type='text' name='output' value='" + data[i].output + "'/>";
            //             } else if(data[i].proof_id != null) {
            //                 output = "<a href='" + data[i].proof_id + "' >" + data[i].output + "</a>";
            //             } else if(data[i].output != "0,00") {
            //                 output = data[i].output;
            //             }

            //             table += "<tr data-id='" + data[i].id + "'><td align='center'>" + day + "</td>";
            //             table += "<td>" + (description ?? '') + "</td>";
            //             table += "<td align='center'>" + (data[i].tithe_offer ? tithe_offer : "") + "</td>";
            //             table += "<td align='right'>" + (valReal(deposit) != 0 ? deposit : "") + "</td>";
            //             table += "<td align='right'>" + (valReal(output) != 0 ? output : "") + "</td>";
            //             table += "<td align='right'>" + moeda(subtotal) + "</td>";
            //             table += (edit ? "<td class='delete' style='color: red'><i class='fa fa-times' title='Excluir esta linha' ></i></td></tr>" : "</tr>");
            //         }
            //     }
            //     table += "</tbody></table>";
            //     return table;
            // }

            /** Pagination */
            // $("#moviment button").on("click", function() {
            //     let btnName = $(this).attr("data-name");
            //     let prevNext = (btnName === "next" ? 1 : -1);
            //     let currentPage = parseInt($("#current-page").text()) + prevNext;
            //     let maxPage = $("#current-page").attr("data-limit");
            //     if(typeof(btnName) !== "undefined") {
            //         if(maxPage && btnName === "next" || btnName === "preview" && currentPage === 0) {
            //             $(this).attr("disabled",true);
            //             return null;
            //         }
            //         $(".loading, #mask_main").show();
            //         currentPage = (currentPage !== 0 ? currentPage : 1);
            //         $("#current-page").text(currentPage);
            //         $(".content").load("moviment/pagination/" + currentPage, function() {
            //             scriptMoviment();
            //             $(".loading, #mask_main").hide();
            //         });
            //     }
            // })

            /** Open report */
            // $("#moviment a").on("click", function(e) {
            //     e.preventDefault();
            //     let year = $(this).attr("data-year");
            //     let month = $(this).attr("data-month");
            //     let data = loadData("moviment/" + year + "/" + month);
            //     if(data !== null) {
            //         let date = data[1].date;
            //         let monthNumber = data[1].month;
            //         let table = mountingTableBalance(data);
            //         modal.show({
            //             title: "MOVIMENTAÇÃO FINANCEIRA DE " + getYearMonthDay(date, 1, monthNumber).toUpperCase() + " DE " + getYearMonthDay(date, 0),
            //             message: table
            //         }).
            //         complete({
            //             buttons: "<button class='button btn-danger'>Resumo</button>",
            //             callback: function() {
            //                 /** Open proof */
            //                 $("#boxe_main a").on("click", function(evt) {
            //                     evt.preventDefault();
            //                     let id = $(this).attr("href");
            //                     window.open("proof/show/id/" + id);
            //                 });
            //                 $(buttons).on("click", function() {
            //                     let btnName = $(this).text();
            //                     if(btnName === "Resumo") {
            //                         let html = loadData("moviment/summarie", { data }, "html");
            //                         if(html !== null) {
            //                             modal.modal({
            //                                 html: html,
            //                                 buttons: "<button class='button btn-default mr-1'>Fechar</button><button class='button btn-danger'>Visualizar Impressão</button>",
            //                                 callback: function() {
            //                                     $("#div_dialogue button").on("click", function() {
            //                                         if($(this).text() === "Fechar") {
            //                                             $("#div_dialogue #content").html("");
            //                                             $("#div_dialogue").hide();
            //                                             $("#mask_main").css("z-index","2");
            //                                         } else {
            //                                             /** Open impression preview */
            //                                             let dataPost = {
            //                                                 "year": getYearMonthDay(date, 0),
            //                                                 "month": getYearMonthDay(date, 1)
            //                                             };
            //                                             modal.new({
            //                                                 url: "impression",
            //                                                 post: dataPost,
            //                                                 box: "box_print",
            //                                                 buttons: "<button class='button btn-default mr-1'>Fechar</button><button class='button btn-danger'>Imprimir</button>",
            //                                                 callback: function() {
            //                                                     $("#mask_main").css("z-index", "5");
            //                                                     $("#box_print button").on("click", function() {
            //                                                         if($(this).text() === "Imprimir") {
            //                                                             window.print();
            //                                                         }
            //                                                         $("#box_print").remove();
            //                                                         $("#mask_main").css("z-index", "4");
            //                                                     });
            //                                                 }
            //                                             });
            //                                         }
            //                                     });
            //                                 }
            //                             });
            //                         }
            //                     }
            //                 });
            //             }
            //         }).styles();
            //     }
            // });

            /** Page new_moviment */
            /** Mask */
            // $("#moviment form [name=day]").mask("#0").focus()
            // $("#moviment form [name=value]").mask("#.##0,00", { reverse: true })

            // $('#moviment #type').hide()
            // $('#moviment #proof').hide()
            // $('#moviment select[name=in_out]').on("change", function(){
            //     if($(this).val() == 'deposit'){
            //         $('#type').show()
            //         $('#proof').hide()
            //     }else if($(this).val() == 'output'){
            //         $('#type').hide()
            //         $('#proof').show()
            //         $('#description :input').remove()
            //         $('#description').text('')
            //         $('#description').append('<input required type="text" name="description" />')
            //     }
            // })
            // $('#moviment #type').on("click", function(){
            //     var checked = $("input:checked").val();
            //     if(checked == 'ofe'){
            //         $('#description').text('OFERTA').val('offer');
            //     }else if(checked == 'diz'){
            //         let list = listMembers();
            //         $("#description").html(list);
            //     }
            // });
            // $('#moviment :file').on("change", function(){
            //     var ext = $(this).val().split('.');
            //     if(ext[1] != 'jpg' && ext[1] != 'jpeg' && ext[1] != 'png' && ext[1] != 'pdf'){
            //         alertLatch('This file is not allowed',"var(--cor-warning)");
            //         $(this).val(null);
            //     }
            // });
            // if(typeof(moviment) !== "undefined" && moviment.querySelector(".new") !== null) {
            //     let form = moviment.querySelector("#cadastro")
            //     form.onkeyup = (e) => {
            //         if(e.keyCode === 13) {
            //             moviment.querySelector(".buttons [type=submit]").click()
            //         }
            //     }
            //     moviment.querySelector(".buttons").onclick = (e) => {
            //         let btnName = e.target.value
            //         let form = $("#moviment form")
            //         if(btnName === "clear") {
            //             form.trigger("reset")
            //             form.find("[required]").css("background", "white")
            //         } else {
            //             form.trigger("submit")
            //         }
            //     }
            // }
            // /** submiting */
            // $("#moviment form").on("submit", function(e) {
            //     let abort = 0
            //     let save = () => {
            //         if(saveData("moviment/add", formData)) {
            //             $(moviment).find("button[type=reset]").trigger("click");
            //         }
            //         $(this).find("[name=day]").trigger("focus");
            //     }
            //     e.preventDefault();
            //     let formData = new FormData($(this)[0]);
            //     $("#moviment form").find("[required]").css("background", "white")

            //     /** required fields */
            //     $("#moviment form [required]").each(function(i,elem) {
            //         if($(elem).attr("required") !== null && $(elem).val() === "") {
            //             $(elem).on("focus").css("background", "pink")
            //             abort = 1;
            //         }
            //     })
            //     if(abort === 0) {
            //         save()
            //     } else {
            //         alertLatch("The field or fields are requireds", "var(--cor-warning")
            //     }
            // });

            /** Preview */
            // $("#moviment [value=preview").on("click", function(e) {
            //     e.preventDefault();
            //     let data = $("#moviment form").serialize();
            //     let yearMonth = unserializedData(data);
            //     let url = "moviment/" + yearMonth.year + "/" + yearMonth.month;
            //     let response = loadData(url);
            //     if(response !== null) {
            //         let table = mountingTableBalance(response, true);
            //         modal.show({
            //             title: "MOVIMENTAÇÃO FINANCEIRA DE " + yearMonth.month.toUpperCase() + " DE " + yearMonth.year,
            //             message: table
            //         })
            //         .styles({
            //             element: ".input, .select",
            //             css: {
            //                 background: "#e9e98c none repeat scroll 0% 0%",
            //                 "font-size": "1em"
            //             }
            //         })
            //         .complete({
            //             buttons: "<button class='button btn-info' value=0>Resumo</button><button class='button btn-danger' value='1'>Salvar Alterações</button>",
            //             callback: function() {
            //                 var changes = [];
            //                 /** Mask */
            //                 $("#boxe_main table tbody td [name=day]").mask("#0");
            //                 $("#boxe_main table tbody td [name=deposit]").mask("#.##0,00", { reverse: true });
            //                 $("#boxe_main table tbody td [name=output]").mask("#.##0,00", { reverse: true });

            //                 $("#boxe_main table tbody .delete").on("click", function() {
            //                     let id = $(this).closest("tr").attr("data-id");
            //                     if(saveData("moviment/delete/" + id)) {
            //                         $("#moviment [value=preview").trigger("click");
            //                     }
            //                 });
            //                 $("#boxe_main input, #boxe_main select").on("change", function() {
            //                     changes.push({
            //                         id: $(this).closest("tr").attr("data-id"),
            //                         name: $(this).attr("name"),
            //                         value: $(this).val()
            //                     });
            //                 });
            //                 $("#boxe_main select[name=tithe_offer]").on("change", function() {
            //                     let description = $(this).closest("tr").find("td:eq(1)").html();
            //                     let member;
            //                     if(description !== "OFERTA") {
            //                         member = $(this).closest("tr").find("td:eq(1) select").val();
            //                     }
            //                     if($(this).val() === "diz") {
            //                         $(this).closest("tr").find("td:eq(1)").html(listMembers(member));
            //                         $("#boxe_main input, #boxe_main select").on("change", function() {
            //                             changes.push({
            //                                 id: $(this).closest("tr").attr("data-id"),
            //                                 name: $(this).attr("name"),
            //                                 value: $(this).val()
            //                             });
            //                         });
            //                     } else {
            //                         $(this).closest("tr").find("td:eq(1)").html("OFERTA");
            //                     }
            //                 });
            //                 $("#boxe_main [name=deposit], #boxe_main [name=output]").on("change", function() {
            //                     $("#boxe_main table tbody tr").each(function() {
            //                         let deposit = valReal($(this).find("td:eq(3) input").val());
            //                         let output = valReal($(this).find("td:eq(4) input").val());
            //                         if(deposit === 0 && output === 0) {
            //                             balance = valReal($(this).find("td:eq(5)").text());
            //                         }
            //                         balance += (deposit - output);
            //                         $(this).find("td:eq(5)").text(moeda(balance));
            //                     });
            //                 });
            //                 $(buttons).find("button").on("click", function() {
            //                     let btnName = $(this).text()
            //                     let moviment = loadData("moviment/" + yearMonth.year + "/" + yearMonth.month);
            //                     if($(this).val() == 1) {
            //                         if(changes.length < 1) {
            //                             return alertLatch("There were no changes", "var(--cor-warning)");
            //                         }
            //                         if(saveAjax("moviment/update", { changes })) {
            //                             modal.hideContent();
            //                         }
            //                     } else if(btnName === "Resumo") {
            //                         let html = loadData("moviment/summarie", { data: moviment }, "html");
            //                         if(html !== null) {
            //                             modal.modal({
            //                                 html: html,
            //                                 buttons: "<button class='button btn-default mr-1'>Fechar</button><button class='button btn-danger'>Visualizar Impressão</button>",
            //                                 callback: function() {
            //                                     $("#div_dialogue button").on("click", function() {
            //                                         if($(this).text() === "Fechar") {
            //                                             $("#div_dialogue #content").html("");
            //                                             $("#div_dialogue").hide();
            //                                             $("#mask_main").css("z-index","2");
            //                                         } else {
            //                                             /** Open impression preview */
            //                                             let dataPost = {
            //                                                 "year": getYearMonthDay(date, 0),
            //                                                 "month": getYearMonthDay(date, 1)
            //                                             };
            //                                             modal.new({
            //                                                 url: "impression",
            //                                                 post: dataPost,
            //                                                 box: "box_print",
            //                                                 buttons: "<button class='button btn-default mr-1'>Fechar</button><button class='button btn-danger'>Imprimir</button>",
            //                                                 callback: function() {
            //                                                     $("#mask_main").css("z-index", "5");
            //                                                     $("#box_print button").on("click", function() {
            //                                                         if($(this).text() === "Imprimir") {
            //                                                             window.print();
            //                                                         }
            //                                                         $("#box_print").remove();
            //                                                         $("#mask_main").css("z-index", "4");
            //                                                     });
            //                                                 }
            //                                             });
            //                                         }
            //                                     });
            //                                 }
            //                             });
            //                         }
            //                     }
            //                 });
            //             }
            //         })
            //     }
            // });

            /** Close report */
            // $("#moviment [value=conclude]").on("click", function(){
            //     let data = {
            //         month: $("#moviment form [name=month]").val(),
            //         year: $("#moviment form [name=year]").val()
            //     };
            //     modal.confirm({
            //         title: "Fechamento do relatório",
            //         message: "Deseja realmente fechar o relatório?"
            //     })
            //     .on("click", function() {
            //         if($(this).val() == 1) {
            //             saveAjax("moviment/save", data);
            //         }
            //     });
            // });

            /** Proof script */
            // $("#proof select[name=year]").on("change", function() {
            //     $("#proof table tr").remove();
            //     let year = $(this).val();
            //     let url = "proof/year/" + year;
            //     let data = loadData(url);
            //     if(data !== null) {
            //         let option = "<option value=''></option>";
            //         for(let i in data) {
            //             option += "<option value='" + data[i] + "'>" + data[i] + "</option>";
            //         }
            //         $("#proof select[name='month']").html(option);
            //     }
            // });
            // $("#proof select[name=month]").on("change", function() {
            //     let year = $("#proof select[name=year]").val();
            //     let month = $(this).val();
            //     let params = { year, month };
            //     let data = loadData("proof/proof", params);
            //     if(data !== null) {
            //         let table = "<tr><th>Descrição</th><th>Comprovante</th></tr>";
            //         for(let i in data) {
            //             table += "<tr data-id='" + data[i].id + "'><td>" + data[i].description + "</td><td><input accept='image/*' type='file' name='proofs[]' /></td></tr>";
            //         }
            //         $("#proof table").html(table);
            //     }
            // });

            // /** Enable rescue button */
            // $("#proof table").on("change", function() {
            //     $("#proof button").attr("disabled", false);
            // });

            // $("#proof #form-proof").on("reset", function(e) {
            //     e.preventDefault();
            //     $("#proof #form-proof [type=file]").val("");
            // });
            // $("#proof #form-proof").on("submit", function(e) {
            //     e.preventDefault();
            //     let formData = new FormData($("#proof #form-proof")[0]);
            //     /** pick up attached files */
            //     let ids = [];
            //     $("#proof #form-proof [type=file]").each(function() {
            //         let file = $(this)[0].files[0];
            //         let id = $(this).closest("tr").attr("data-id");
            //         if(typeof file !== "undefined") {
            //             ids.push(id);
            //             formData.append("ids[]", id);
            //             formData.append("names[]", file.name);
            //         }
            //     });
            //     if(ids.length < 1) {
            //         return alertLatch("No voucher was added", "var(--cor-warning");
            //     }
            //     if(saveData("proof/save", formData)) {
            //         for(let i in ids) {
            //             $(this).find("table tr[data-id=" + ids[i] + "]").remove();
            //         }
            //     }
            // });
        // }

    }
}