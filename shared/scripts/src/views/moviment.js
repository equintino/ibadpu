import AbstractView from "./abstractView.js"

export default class Moviment extends AbstractView {
    #content = document.querySelector('body .content')

    location() {
        let text = this.#content.innerText
    }
}
