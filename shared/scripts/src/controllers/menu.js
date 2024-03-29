import Service from "../services/menu.js"
import View from "../views/menu.js"
import AbstractController from "./abstractController.js"
import Config from "./consfig.js"
import Documentation from "./documentation.js"
import Membership from "./membership.js"
import Moviment from "./moviment.js"
import Occupation from "./occupation.js"
import Shield from "./shield.js"
import User from "./user.js"

export default class Menu extends AbstractController{
    #view
    #service

    async initializer () {
        this.#view = new View()
        this.#service = new Service()
        const membership = new Membership()
        this.#view.initializer({
            fn: ({ pageName, element }) => {
                this.#view.active(element)
                this.#view.showPage({
                    page: this.#service.openFile({
                        url: pageName,
                        method: 'GET'
                    }),
                    callScript: () => this.#callScript(pageName)
                })
            }

        })

        this.#view.showPage({
            page: this.#service.openFile({
                url: 'home',
                method: 'GET'
            }),
            callScript: () => {
                this.#callScript('home')
            }
        })
        this.#view.identif('home', logged)
        membership.showBirthmonth()
    }

    #callScript = async (page) => {
        switch(page) {
            case "user":
                const user = new User()
                user.initializer()
                break
            case "shield":
                const shield = new Shield()
                shield.initializer()
                break
            case "config":
                const config = new Config()
                config.initializer()
                break
            case "moviment": case "moviment/new": case "proof/init":
                const moviment = new Moviment()
                moviment.initializer({ page })
                break
            case "membership/init": case "membership/birthday":
                const membership = new Membership()
                if (page === 'membership/init') membership.initializer()
                membership.showBirthmonth()
                break
            case "occupation/init":
                const occupation = new Occupation()
                occupation.initializer()
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
