import AbstractView from "./abstractView.js";

export default class View extends AbstractView {
    initializer = (fn) => {
        const btnMenu = document.getElementById('top').querySelectorAll('[data-id]')
        btnMenu.forEach((e) => {
            e.onclick = (i) => {
                let element = (i.target['tagName'] === 'A' ? i.target : i.target.parentElement)
                fn(element.attributes['data-id'].value)
            }
        })
    }

    showPage(page) {
        document.querySelector('.content').innerHTML = page
    }
}