import AbstractController from "./abstractController.js"
import View from "./../views/moviment.js"
import Service from "./../services/meviment.js"

export default class Moviment extends AbstractController {
    #view
    #service

    initializer ({ page }) {
        this.#view = new View()
        this.#service = new Service()

        this.#location({ page })
    }

    #location ({ page }) {
        if (page.indexOf('new') !== -1) {
            this.#view.setMask()
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
        this.#view.proof({
            getPage: (data) => {
                return this.getPage(data)
            },
            validate: file => this.#validate(file),
            initializer: data => this.initializer(data)
        })
    }
}
