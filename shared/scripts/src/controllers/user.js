import AbstractController from './abstractController.js'
import View from './../views/user.js'
import Service from './../services/user.js'

export default class User extends AbstractController {
    #view
    #service

    initializer () {
        this.#view = new View()
        this.#service = new Service()

        this.#view.init({
            openFile: data => this.#service.openFile(data),
            fn: ({ action }) => {
                this.#btnAction({ action })
            }
        })
    }

    #btnAction ({ action }) {
        let login = (action.attributes['data'].value ?? null)
        if (action.title === 'Adiciona') {
            this.#view.add({
                openFile: (data) => {
                    return this.#service.openFile(data)
                },
                save: ({ formData }) => {
                    return this.#service.openFile({
                        url: 'user/save',
                        method: 'POST',
                        formData
                    })
                },
                fn: ({ action }) => {
                    this.#btnAction({ action })
                }

            })
        } else if (action.title === "Edita") {
            this.#view.edition({
                login,
                save: ({ btnName, formData }) => {
                    if (btnName === 'save') {
                        const response = this.#service.openFile({
                            url: 'user/update',
                            method: 'POST',
                            formData
                        })
                        return response
                    }
                },
                openFile: (data) => {
                    return this.#service.openFile(data)
                },
                fn: ({ action }) => {
                    this.#btnAction({ action })
                }
            })
        } else if (action.title === "Exclui") {
            const id = action.attributes['data-id'].value
            if (logged.toLowerCase() === login.toLowerCase()) {
                this.#view.message.text("<span class='warning'>User logged in, is not allowed to delete it</span>")
                return false
            }
            this.#view.delete({
                login,
                del: () => {
                    return this.#service.openFile({
                        url: 'user/delete/' + id,
                        method: 'POST'
                    })
                },
                fn: ({ action }) => {
                    this.#btnAction({ action })
                },
                openFile: (data) => {
                    return this.#service.openFile(data)
                }
            })
        } else if (action.title === "Reseta") {
            this.#view.resetPassword({
                fn: ({ formData }) => {
                    formData.append('login', login)
                    return this.#service.openFile({
                        url: 'user/password/reset',
                        method: 'POST',
                        formData
                    })
                }
            })
        }
    }
}
