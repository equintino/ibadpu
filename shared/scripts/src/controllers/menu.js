import AbstractController from "./abstractController.js"
import View from "../views/menu.js"
import Service from "../services/menu.js"

export default class Menu extends AbstractController{
    #view
    #service

    initializer = () => {
        this.#view = new View()
        this.#service = new Service()

        this.#view.initializer((page) => {
            this.#view.showPage(this.#getPage(page))
        })
    }

    #getPage = (page) => {
        return this.#service.openFile({ method: 'GET', url: page})
        // document.querySelector('.content').innerHTML = this.#service.openFile({ method:'GET', url:btnName }, async (status) => {
        //     alert(status)
        //     document.querySelector(".loading").style = 'display=none'
        //     document.querySelector("#mask_main").style = 'display=none'
        // })
        // if (page.status === 200) {
        //     alert('entrei')
        //     document.querySelector(".loading").style = 'display=none'
        //     document.querySelector("#mask_main").style = 'display=none'
        // }
        return
        $(".content").load(btnName, function() {
            callScript(btnName)
            document.querySelector(".loading").style = 'display=none'
            document.querySelector("#mask_main").style = 'display=none'
            // let hasButton = topHeader.querySelector("[aria-expanded]").attributes["aria-expanded"].value
            // if(hasButton == "true") {
            //     $(".navbar-toggler-icon").trigger("click")
            // }
        })
        return
        switch(btnName) {
            case 'home':
                $(".content").load(btnName, function() {
                    callScript(btnName)
                    document.querySelector(".loading").style = 'display=none'
                    document.querySelector("#mask_main").style = 'display=none'
                    // let hasButton = topHeader.querySelector("[aria-expanded]").attributes["aria-expanded"].value
                    // if(hasButton == "true") {
                    //     $(".navbar-toggler-icon").trigger("click")
                    // }
                });
                // let hasButton = topHeader.querySelector("[aria-expanded]").attributes["aria-expanded"].value
                // if(hasButton == "true") {
                //     $(".navbar-toggler-icon").trigger("click")
                // }
                break
            case 'documentation/init':
                $(".content").load(btnName, function() {
                    callScript(btnName)
                    document.querySelector(".loading").style = 'display=none'
                    document.querySelector("#mask_main").style = 'display=none'
                    // let hasButton = topHeader.querySelector("[aria-expanded]").attributes["aria-expanded"].value
                    // if(hasButton == "true") {
                    //     $(".navbar-toggler-icon").trigger("click")
                    // }
                });
                console.log(btnName)
                break
            case 'documentation/add':
                $(".content").load(btnName, function() {
                    callScript(btnName)
                    document.querySelector(".loading").style = 'display=none'
                    document.querySelector("#mask_main").style = 'display=none'
                    // let hasButton = topHeader.querySelector("[aria-expanded]").attributes["aria-expanded"].value
                    // if(hasButton == "true") {
                    //     $(".navbar-toggler-icon").trigger("click")
                    // }
                });
                console.log(btnName)
                break
            default:
        }
    }
}