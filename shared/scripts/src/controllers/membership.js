import Service from "../services/membership.js"
import View from "../views/membership.js"
import AbstractController from "./abstractController.js"

export default class Membership extends AbstractController {
    #view
    #service

    constructor () {
        super()
        this.#view = new View()
        this.#service = new Service()
    }

    initializer () {
        this.#add()
        this.#edition()
        this.#certificatePrint()
    }

    #add () {
        this.#view.add({
            submit: ({ formData }) => {
                const response = this.#service.openFile({
                    url: 'membership/save',
                    method: 'POST',
                    formData
                })
                return response
            },
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            initializer: () => this.initializer()
        })
    }

    #edition () {
        this.#view.setBtns({
            fn: ({ formData }) => {
                const validate = this.#validate(formData)
                const response = this.#service.save(validate.data)
                this.#view.response(
                    response,
                    () => {
                        this.#view.showPage({
                            page: this.#service.openFile({
                                method: 'GET',
                                url: 'membership/init'
                            })
                        })
                        this.#edition()
                    }
                )
                if (response.indexOf('success') !== -1 && validate.reload) window.location.reload()
            },
            openFile: (data) => {
                return this.#service.openFile(data)
            }
        })
    }

    #validate (formData) {
        let reload = false
        if (formData.get('imgInp') !== 'undefined' || formData.get('imgCert') !== 'undefined') reload = true
        formData.delete('imgCert')
        return { data: formData, reload }
    }

    #certificatePrint () {
        const fn = ({ url, formData }) => {
            return this.#service.openFile({ method: 'POST', url, formData })
        }
        this.#view.certificate({
            fn,
            openFile: (data) => {
                return this.#service.openFile(data)
            }
        })
    }

    showBirthmonth() {
        this.#view.showBirthmonth((url) => {
            let now = new Date
            const formData = new FormData()
            formData.append('month', now.getMonth() + 1)
            return this.#service.openFile({ method: 'POST', url, formData })
        })
    }
}
