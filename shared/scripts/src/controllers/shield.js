import AbstractController from './abstractController.js'
import View from './../views/shield.js'
import Service from './../services/shield.js'

export default class Shield extends AbstractController {
    #view
    #service

    initializer () {
        this.#view = new View()
        this.#service = new Service()

        this.#initBtns()
        this.#view.checkGroup({
            getListScreen: (data) => {
                return this.getListScreen(data)
            }
        })
        this.#view.btnGroups({
            getListScreen: (data) => {
                return this.getListScreen(data)
            }
        })
        this.#view.changeScreen()
    }

    #initBtns () {
        this.#view.btnAction(({ btnName }) => {
            if (btnName === 'add') this.addGroup()
            if (btnName === 'delete') this.delGroup()
            if (btnName === 'save') this.updateGroup()
        })
    }

    addGroup () {
        this.#view.addGroup({
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            fn: ({ formData }) => {
                const response = this.#service.openFile({
                    url: 'group/save',
                    method: 'POST',
                    formData
                })
                this.#view.submit({
                    response,
                    openFile: (data) => {
                        return this.#service.openFile(data)
                    },
                    initializer: () => {
                        this.initializer()
                    }
                })
            }
        })
    }

    delGroup () {
        this.#view.delGroup({
            openFile: (data) => {
                return this.#service.openFile(data)
            },
            fn: ({ groupName }) => {
                return this.#service.openFile({
                    url: `group/delete/${groupName}`,
                    method: 'POST'
                })
            },
            initializer: () => {
                this.initializer()
            }
        })
    }

    getListScreen ({ groupName }) {
        return JSON.parse(
            this.#service.openFile({
                url: `group/load/${groupName}`,
                method: 'POST'
            })
        )
    }

    updateGroup () {
        this.#view.updateGroup({
            update: ({ formData }) => {
                return this.#service.openFile({
                    url: 'group/update',
                    method: 'POST',
                    formData
                })
            },
            getScreenAccess: () => {
                return this.getScreenAccess()
            }
        })
    }
}
