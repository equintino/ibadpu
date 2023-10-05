import Menu from "./menu.js"

export default class Controller {
    #view
    #service

    constructor({ view, service }) {
        this.#view = view
        this.#service = service
    }

    static initializer = async(deps) => {
        const controller = new Controller(deps)
        const menu = new Menu()
        menu.initializer()
    }
}