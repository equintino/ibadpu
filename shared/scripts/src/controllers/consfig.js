import AbstractController from "./abstractController.js"
import View from './../views/config.js'
import Service from './../services/config.js'

export default class Config extends AbstractController {
    #view
    #service

    initializer () {
        this.#view = new View()
        this.#service = new Service()

        this.#add()
        this.#edition()
        this.#delete()
    }

    #add () {
        this.#view.add({
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            required: ({ requireds }) => {
                return this.#validate({
                    requireds
                })
            },
            submit: (data) => {
                return this.#submit(data)
            },
            initializer: () => {
                return this.initializer()
            }
        })
    }

    #edition () {
        this.#view.edition({
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            required: ({ requireds }) => {
                return this.#validate({
                    requireds
                })
            },
            update: (data) => {
                return this.#update(data)
            },
            initializer: () => {
                return this.initializer()
            }
        })
    }

    #delete () {
        this.#view.delete({
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            del: ({ connectionName }) => {
                return this.#service.openFile({
                    url: `config/delete/${connectionName}`,
                    method: 'POST'
                })
            },
            initializer: () => {
                return this.initializer()
            }
        })
    }

    #validate ({ requireds }) {
        for (let i of requireds) {
            if (!i.value) {
                i.style.background = 'pink'
                i.focus()
                return this.#view.message.text('<span class="warning">The highlighted field is required</span>')
            }
        }
        return true
    }

    #submit ({ formData }) {
        return this.#service.openFile({
            url: 'config/save',
            method: 'POST',
            formData
        })
    }

    #update ({ formData }) {
        return this.#service.openFile({
            url: 'config/update',
            method: 'POST',
            formData
        })
    }
}
