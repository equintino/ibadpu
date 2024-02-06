import AbstractView from "./abstractView.js"

export default class Occupation extends AbstractView {
    #exhibition = document.querySelector('#exhibition')

    setBtn({ getPage }) {
        const btnAction = (btn) => {
            if (btn === "list") {
                this.#exhibition.innerHTML = getPage({ url: 'occupation/list' })
                const btnEdit = document.querySelectorAll('#registerOccupation #tablist #edit')
                const btnDelete = document.querySelectorAll('#registerOccupation #tablist #delete')

                btnEdit.forEach((e) => {
                    e.onclick = () => {
                        let id = e.attributes['data-id'].value
                        let formData = new FormData()
                        formData.append('id', id)
                        this.#exhibition.innerHTML = getPage({
                            url: 'occupation/edit',
                            method: 'POST',
                            formData
                        })
                        let form = this.#exhibition.querySelector('form')
                        form.onsubmit = (e) => {
                            e.preventDefault()
                            const formData = new FormData(form)
                            const response = getPage({
                                url: 'occupation/save',
                                method: 'POST',
                                formData
                            })
                            this.message.text(response)
                            if (response.indexOf('success') !== -1) btnAction('add')
                        }
                    }
                })

                btnDelete.forEach((e) => {
                    e.onclick = () => {
                        let id = e.attributes['data-id'].value
                        let name = e.parentElement.cells[0].innerText
                        const conf = this.modal.confirm({
                            title: "Exclusão de Função",
                            message: "Deseja realmente excluir a função <strong>" + name + "</strong>?"
                        })
                        conf.onclick = (e) => {
                            if (e.target.value != 1) return
                            const response = getPage({
                                url: 'occupation/delete/id/' + id,
                                method: 'POST'
                            })
                            if (response.indexOf('success') !== -1) btnAction('list')
                            this.message.text(response)
                        }
                    }
                })
            } else {
                this.#exhibition.innerHTML = getPage({
                    url: 'occupation/register'
                })
                const form = document.querySelector('#exhibition form')

                form.onsubmit = (e) => {
                    e.preventDefault()
                    const formData = new FormData(form)
                    const response = getPage({
                        url: 'occupation/save',
                        method: 'POST',
                        formData
                    })
                    if (response.indexOf('success') !== -1) form.reset()
                    this.message.text(response)
                }
            }
            document.querySelector('.loading').style.display = 'none'
        }

        document.querySelector('.buttons').onclick = btn => {
            const btnName = btn.target.attributes['id'].value
            btnAction(btnName)
        }

        btnAction('list')
    }
}
