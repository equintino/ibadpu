import AbstractController from "./abstractController.js"
import Documentation from "./ddocumentation.js"
import Membership from "./membership.js"

export default class Menu extends AbstractController{
    initializer = () => {
        this.view.showBirthday()

        this.view.initializer(({ pageName: page, element }) => {
            this.view.active(element)
            this.showPage(page)
        })
        this.showPage('home')
        this.view.identif('home', logged)
    }

    showPage(page) {
        this.view.showPage(this.#getPage(page), () => {
            this.#callScript(page)
        })
    }

    #getPage = (page) => {
        return this.service.openFile({ method: 'GET', url: page})
    }

    #callScript = (page) => {
        switch(page) {
            case "user":
                scriptUser()
                break
            case "shield":
                scriptSecurity()
                break
            case "config":
                scriptConfig()
                break
            case "moviment": case "moviment/new": case "proof/init":
                scriptMoviment()
                break
            case "membership/init":
                Membership.initializer()
                break
            case "occupation/init":
                scriptOccupation()
                break
            case "documentation/add": case "documentation/init":
                const documentation = new Documentation()
                documentation.initializer()
                break
            case "exit":
                window.location.reload()
        }
    }
}