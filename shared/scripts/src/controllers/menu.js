import AbstractController from "./abstractController.js"
import Documentation from "./documentation.js"
import Membership from "./membership.js"
import Moviment from "./moviment.js"
import Occupation from "./occupation.js"
import Shield from "./shield.js"
import User from "./user.js"

export default class Menu extends AbstractController{
    initializer = () => {
        this.#showBirthmonth()

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
        return this.service.openFile({ method: 'GET', url: page })
    }

    #callScript = (page) => {
        switch(page) {
            case "user":
                const user = new User()
                user.initializer()
                break
            case "shield":
                // scriptSecurity()
                const shield = new Shield()
                shield.initializer()
                break
            case "config":
                scriptConfig()
                break
            case "moviment": case "moviment/new": case "proof/init":
                const moviment = new Moviment()
                moviment.initializer({ page })
                break
            case "membership/init":
                const membership = new Membership()
                membership.initializer()
                break
            case "membership/birthday":
                this.#showBirthmonth()
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

    #showBirthmonth() {
        this.view.showBirthmonth((url) => {
            let now = new Date
            const formData = new FormData()
            formData.append('month', now.getMonth() + 1)
            return this.service.openFile({ method: 'POST', url, formData })
        })
    }
}
