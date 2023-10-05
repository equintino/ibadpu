import Controller from "../controllers/controller.js"
import Service from "../services/service.js"
import View from "../views/view.js"

const factory = {
    initializer: async() => {
        Controller.initializer({
            view: new View(),
            service: new Service()
        })
    }
}

export default factory