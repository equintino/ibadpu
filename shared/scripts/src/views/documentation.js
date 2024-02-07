import AbstractView from "./abstractView.js"

export default class Documentation extends AbstractView {
    #row = document.querySelectorAll('#documentation table.show tbody tr')

    openDoc({ fn, getPage }) {
        this.#row.forEach((e) => {
            const formData = new FormData()
            e.onclick = (i) => {
                let id = e.attributes['id'].value
                formData.append('id', id)
                if (typeof(i.target.parentElement.attributes["data-action"]) !== "undefined") {
                    let action = i.target.parentElement.attributes["data-action"].value
                    let description = i.target.parentElement.parentElement.children[1].textContent
                    if (action === "delete") {
                        const conf = this.modal.confirm({
                            title: "Deseja realmente excluir este documento?",
                            message: description,
                            buttons: "<button class='button cancel' value='close'>NÃO</button><button class='button save' value='delete'>SIM</button>"
                        })
                        conf.onclick = (e) => {
                            let btnName = e.target.value
                            if (btnName === 'close') return
                            const response = fn({ btnName, formData })
                            this.message.text(response)
                        }
                    } else {
                        this.modal.show({
                            title: "Modo de Edição",
                            content: getPage({ url: "documentation/edit/" + id }),
                            buttons: "<button class='button save' value='edit'>Alterar</button>"
                        })
                        this.modal.buttons.onclick = (e) => {
                            const btnName = e.target.value
                            const form = this.modal.content.querySelector('form')
                            const formData = new FormData(form)
                            const response = fn({ btnName, formData })
                            if (response.indexOf('success') !== -1) this.modal.close()
                            this.message.text(response)
                        }
                    }
                } else {
                    window.open("documentation/show/id/" + id)
                }
            }
        })
    }
}
