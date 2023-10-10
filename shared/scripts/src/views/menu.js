import AbstractView from "./abstractView.js";

export default class View extends AbstractView {
    initializer = (fn) => {
        const btnMenu = document.getElementById('top').querySelectorAll('li')
        btnMenu.forEach((e) => {
            e.onclick = (i) => {
                i.preventDefault()
                let element = (i.target['tagName'] === 'I' ? i.target.parentElement : i.target)
                let pageName = (
                    element.attributes['data-id'] ? element.attributes['data-id'].value : null
                )
                if (!pageName) return
                this.#loading.show()
                fn({ pageName, element })
                document.querySelector('.identification').innerHTML = this.#identif(pageName, logged)
            }
        })
    }

    showPage = (page) => {
        document.querySelector('.content').innerHTML = page
        setTimeout(() => {
            this.#loading.hide()
        }, 100)
    }

    #loading = {
        show: () => {
            document.querySelector('.loading').style.display = 'block'
            // document.querySelector('#mask_main').style.display = 'block'
        },
        hide: async () => {
            document.querySelector('.loading').style.display = 'none'
            // document.querySelector('#mask_main').style.display = 'none'
        }
    }

    active = (element) => {
        document.querySelectorAll("#topHeader ul li a").forEach((e) => {
            e.parentElement.classList.remove('active')
            e.classList.remove('active')
            // if ($(this).attr("data-toggle") !== "dropdown") {
            //     $("#upArrow").css("display","none")
            // }
        })
        element.classList.add('active')
        while (element['tagName'] !== 'LI') {
            element = element.parentElement
            if (element['tagName'] === 'LI') element.classList.add('active')
        }
    }

    #identif = (page, logged="Nenhum usuário logado") => {
        switch(page) {
            case "home":
                return "<i>Usuário:</i> " + logged;
            case "user":
                return "GERENCIAMENTO DE LOGINS";
            case "shield":
                return "TELAS DE ACESSO";
            case "config":
                return "CONFIGURAÇÃO DO ACESSO AO BANCO DE DADOS";
            case "membership/init":
                return "LISTA DE MEMBROS";
            case "occupation/init":
                return "FUNÇÕES";
            case "membership/birthday":
                return "ANIVERSARIANTES";
            case "moviment": case "moviment/new":
                return "MOVIMENTAÇÃO FINANCEIRA";
            case "documentation/init":
                return "DOCUMENTAÇÃO";
            case "documentation/add":
                return "CADASTRO DE DOCUMENTAÇÃO";
            case "proof/init":
                return "CADASTRO DE COMPROVANTES";
            default:
                return "CADASTRO DE " + page.toUpperCase();
        }
    }
}