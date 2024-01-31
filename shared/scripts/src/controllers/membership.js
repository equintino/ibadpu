import CertificatePrinting from "../../lib/certificateprintiing.js"
import Service from "../services/membership.js"
import View from "../views/membership.js"
import AbstractController from "./abstractController.js"

export default class Membership extends AbstractController {
    #view
    #service

    static initializer() {
        const membership = new Membership()
        membership.#view = new View()
        membership.#service = new Service()
        membership.#edition()
        membership.#view.certificate(({ ids }) => {
            CertificatePrinting.print(ids)
        })
    }

    #edition() {
        this.#view.setBtns((formData) => {
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
        })
    }

    #validate(formData) {
        let reload = false
        if (formData.get('imgInp') !== 'undefined' || formData.get('imgCert') !== 'undefined') reload = true
        formData.delete('imgCert')
        return { data: formData, reload }
    }
}
