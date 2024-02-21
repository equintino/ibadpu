import AbstractController from "./abstractController.js"
import View from "./../views/moviment.js"
import Service from "./../services/meviment.js"
// import CreateElement from "../../lib/createElement.js"

export default class Moviment extends AbstractController {
    #view
    #service
    #listMembers

    initializer ({ page }) {
        this.#view = new View()
        this.#service = new Service()

        this.#location({ page })
    }

    #location ({ page }) {
        if (page.indexOf('new') !== -1) {
            this.#view.mask()
            this.#view.selectInOut({
                validate: (data) => {
                    return this.#validate(data)
                },
                getList: () => {
                    return this.#getListMembers()
                }
            })
            this.#view.preview({
                getPage: (data) => {
                    return this.getPage(data)
                },
                getList: () => {
                    return this.#getListMembers()
                },
                evt: ({ btnName, formData }) => {
                    if (btnName === 'save') {
                        return this.getPage({
                            url: 'moviment/update',
                            method: 'POST',
                            formData
                        })
                    }
                    if (btnName === 'summary') {
                        return this.getPage({
                            url: 'moviment/summarie',
                            method: 'POST',
                            formData
                        })
                    }
                    if (btnName === 'delete') {
                        return this.getPage({
                            url: 'moviment/delete/' + formData.get('id'),
                            method: 'POST'
                        })
                    }
                }
            })
            this.#view.btnForm({
                submit: (formData) => {
                    return this.#submit(formData)
                }
            })
            return this.#closingReport()
        }

        /** adding proof */
        if (page.indexOf('proof') !== -1) return this.#proof()

        this.#view.pagination({
            getPage: (data) => {
                return this.getPage(data)
            },
            callScript: () => {
                this.#location({ page: 'moviment' })
            }
        })
        this.#view.openReport({
            getPage: (data) => {
                return this.getPage(data)
            },
            getList: () => {
                return this.#getListMembers()
            }
        })
    }

    #getListMembers () {
        return JSON.parse(
                this.getPage({
                url: 'membership/list',
                method: 'POST'
            })
        )
    }

    #validate (data) {
        let ext = data.files[0].type.split('/').pop()
        let extValid = [ 'pdf', 'jpeg', 'png', 'jpg' ]
        if (extValid.indexOf(ext) === -1) {
            this.#view.message.text('<span class="warning">This file is not allowed</span>')
            return false
        }
        return true
    }

    #submit (formData) {
        return this.getPage({
            url: 'moviment/add',
            method: 'POST',
            formData
        })
    }

    #closingReport () {
        this.#view.closingReport({
            fn: ({ formData, getPage }) => {
                return this.getPage({
                    url: 'moviment/save',
                    method: 'POST',
                    formData
                })
            },
            getPage: (data) => {
                return this.getPage(data)
            },
            callScript: () => {
                this.#location({ page: 'moviment' })
            }
        })
    }

    #proof() {
        document.querySelector('#proof select[name=year]').onchange = (e) => {
            const year = e.target.value
            const data = JSON.parse(
                this.getPage({
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
        }

        document.querySelector('#proof select[name=month]').onchange = (e) => {
            const year = document.querySelector('#proof select[name=year]').value
            const month = e.target.value
            const formData = new FormData()
            formData.append('year', year)
            formData.append('month', month)
            const data = JSON.parse(
                this.getPage({
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
                this.#view.message.text('<span class="warning">No data in this periode</span>')
                if (document.querySelector('#proof table tbody') !== null) {
                    document.querySelector('#proof table tbody').remove()
                }
            }
        }

        /** Enable rescue button */
        document.querySelector("#proof table").onchange = () => {
            document.querySelector("#proof button[type=submit]").disabled = false
        }

        document.querySelector("#proof #form-proof").onreset = (e) => {
            e.preventDefault()
            document.querySelectorAll("#proof #form-proof [type=file]").forEach((e) => {
                e.value = ''
            })
            document.querySelector("#proof button[type=submit]").disabled = true
        }

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
                return this.#view.message.text("<span class='warning'>No voucher was added</span>")
            }

            const response = JSON.parse(
                this.getPage({
                    url: 'proof/save',
                    method: 'POST',
                    formData
                })
            )

            if (response.indexOf('success') !== -1) {
                document.querySelector('.content').innerHTML = this.getPage({
                    url: 'proof/init',
                    method: 'GET'
                })
                this.initializer({ page: 'proof' })
            }

            this.#view.message.text(response)
        }
    }
}
