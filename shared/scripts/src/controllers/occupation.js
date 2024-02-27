import AbstractController from "./abstractController.js"
import View from './../views/occupation.js'
import Service from "./../services/occupation.js"

export default class Occuparion extends AbstractController {
    #view
    #service

    initializer() {
        this.#view = new View()
        this.#service = new Service()

        this.#view.setBtn({
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            fn: () => {
                this.#view.add({
                    openFile: (data) => {
                        return this.#service.openFile(data)
                    },
                    initializer: () => {
                        this.initializer()
                    }
                })
            }
        })
        this.#view.list({
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            initializer: () => {
                this.initializer()
            }
        })
    }
}
