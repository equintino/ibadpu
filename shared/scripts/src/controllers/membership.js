import Service from "../services/membership.js"
import View from "../views/membership.js"
import AbstractController from "./abstractController.js"

export default class Membership extends AbstractController {
    #view
    #service

    initializer() {
        // const membership = new Membership()
        this.#view = new View()
        this.#service = new Service()
        this.#edition()
        this.#certificatePrint()
    }

    #edition() {
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
            getPage: (url, formData, method = 'GET') => {
                return this.#service.openFile({
                    method, url, formData
                })
            }
        })
    }

    #validate(formData) {
        let reload = false
        if (formData.get('imgInp') !== 'undefined' || formData.get('imgCert') !== 'undefined') reload = true
        formData.delete('imgCert')
        return { data: formData, reload }
    }

    #certificatePrint() {
        const getPage = (url, formData, method = 'POST') => {
            return this.#service.openFile({
                method, url, formData
            })
        }
        const fn = ({ url, formData }) => {
            return this.#service.openFile({ method: 'POST', url, formData })
        }
        this.#view.certificate({ fn, getPage })
    }
}
