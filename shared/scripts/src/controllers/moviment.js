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
                openFile: (data) => {
                    return this.#service.openFile(data)
                },
                getList: () => {
                    return this.#getListMembers()
                },
                delMoviment: ({ id }) => {
                    const response = JSON.parse(
                        this.#service.openFile({
                            url: `moviment/load/${id}`,
                            method: 'POST'
                        })
                    )
                    if (response.proof_id !== null) {
                        this.#service.openFile({
                            url: `proof/delete/${response.proof_id}`,
                            method: 'POST'
                        })
                    }
                    return this.#service.openFile({
                        url: 'moviment/delete/' + id,
                        method: 'POST'
                    })
                },
                validate: (data) => this.#validate(data)
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
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            callScript: () => {
                this.#location({ page: 'moviment' })
            }
        })
        this.#view.openReport({
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            getList: () => {
                return this.#getListMembers()
            }
        })
    }

    #getListMembers () {
        return JSON.parse(
                this.#service.openFile({
                url: 'membership/list',
                method: 'POST'
            })
        )
    }

    /** validate type file and its size */
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
        return this.#service.openFile({
            url: 'moviment/add',
            method: 'POST',
            formData
        })
    }

    #closingReport () {
        this.#view.closingReport({
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            callScript: () => {
                this.#location({ page: 'moviment' })
            }
        })
    }

    #proof() {
        this.#view.proof({
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            validate: file => this.#validate(file),
            initializer: data => this.initializer(data)
        })
    }
}
