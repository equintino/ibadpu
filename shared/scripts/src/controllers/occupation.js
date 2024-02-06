import AbstractController from "./abstractController.js"
import View from './../views/occupation.js'

export default class Occuparion extends AbstractController {
    #view

    initializer() {
        this.#view = new View()

        this.#view.setBtn({
            getPage: (data) => {
                return this.getPage(data)
            }
        })
    }
}
