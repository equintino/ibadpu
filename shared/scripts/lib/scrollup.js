export default class ScrollUp {
    body
    arrow

    static init(element) {
        this.body = document.querySelector(element)
        this.arrow = document.querySelector('#upArrow')
        this.arrow.style.display = 'none'
        ScrollUp.scrollRun()
        ScrollUp.upArrow()
    }

    static scrollRun() {
        this.body.onscroll = e =>
            this.arrow.style.display = e.target.scrollTop > 0 ?
                'block' : 'none'
    }

    static upArrow() {
        this.arrow.onclick = event => this.body.scrollTop = 0
    }
}
