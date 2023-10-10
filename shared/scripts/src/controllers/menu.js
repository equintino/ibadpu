import AbstractController from "./abstractController.js"
import View from "../views/menu.js"
import Service from "../services/menu.js"

export default class Menu extends AbstractController{
    #view
    #service

    initializer = () => {
        this.#view = new View()
        this.#service = new Service()
        this.#view.showBirthday()

        this.#view.initializer(({ pageName: page, element }) => {
            this.#view.active(element)
            this.#view.showPage(this.#getPage(page), () => {
                this.#callScript(page)
            })
        })
        this.#view.showPage(this.#getPage('home'), () => {
            this.#callScript(page)
        })
        this.#view.identif('home', logged)
    }

    #getPage = (page) => {
        return this.#service.openFile({ method: 'GET', url: page})
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
                scriptMembership()
                break
            case "occupation/init":
                scriptOccupation()
                break
            case "documentation/add": case "documentation/init":
                scriptDocumentation()
                break
        }
    }
}