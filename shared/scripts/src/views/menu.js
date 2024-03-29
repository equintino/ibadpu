import AbstractView from "./abstractView.js";

export default class View extends AbstractView {
    initializer ({ fn }) {
        const btnMenu = document.getElementById('top').querySelectorAll('li')
        btnMenu.forEach((e) => {
            e.onclick = (i) => {
                i.preventDefault()
                let element = (i.target['tagName'] === 'I' ? i.target.parentElement : i.target)
                let pageName = (
                    element.attributes['data-id'] ? element.attributes['data-id'].value : null
                )
                if (!pageName) return
                this.loading.show()
                fn({ pageName, element })
                this.identif(pageName, logged)
            }
        })
    }

    showPage ({ page, callScript }) {
        document.querySelector('.content').innerHTML = page
        callScript()
        setTimeout(() => {
            this.loading.hide()
        }, 100)
    }

    active (element) {
        document.querySelectorAll("#topHeader ul li a").forEach((e) => {
            e.parentElement.classList.remove('active')
            e.classList.remove('active')
            if (document.querySelector('body').scrollTop === 0) {
                document.querySelector('#upArrow').style.display = 'none'
            }
        })
        element.classList.add('active')
        while (element['tagName'] !== 'LI') {
            element = element.parentElement
            if (element['tagName'] === 'LI') element.classList.add('active')
        }
    }

    identif (page, logged="Nenhum usuário logado") {
        let ident
        switch(page) {
            case "home":
                ident = "<i>Usuário:</i> " + logged
                break
            case "user":
                ident = "GERENCIAMENTO DE LOGINS"
                break
            case "shield":
                ident = "TELAS DE ACESSO"
                break
            case "config":
                ident = "CONFIGURAÇÃO DO ACESSO AO BANCO DE DADOS"
                break
            case "membership/init":
                ident = "LISTA DE MEMBROS"
                break
            case "occupation/init":
                ident = "FUNÇÕES"
                break
            case "membership/birthday":
                ident = "ANIVERSARIANTES"
                break
            case "moviment": case "moviment/new":
                ident = "MOVIMENTAÇÃO FINANCEIRA"
                break
            case "documentation/init":
                ident = "DOCUMENTAÇÃO"
                break
            case "documentation/add":
                ident = "CADASTRO DE DOCUMENTAÇÃO"
                break
            case "proof/init":
                ident = "CADASTRO DE COMPROVANTES"
                break
            default:
                ident = "CADASTRO DE " + page.toUpperCase()
        }
        document.querySelector('.identification').innerHTML = ident
    }
}
