export default class Message {
    box
    css

    /** @string var text, var background var(--cor-warning) */
    text (text, background, id = '#alert') {
        this.box = document.querySelector(id)
        this.box.innerHTML = text
        this.css = this.box.style
        const marginRight = this.box.offsetWidth
        this.css.display = 'block'
        this.css.background = background ?? this.#setCollor(text)
        this.css.marginRight = -(marginRight) + 40

        this.#showMsg(marginRight)
        let hiddenMsg = this.#closingMsg(7000)
        this.box.onclick = () => {
            this.#showMsg(marginRight)
            clearTimeout(hiddenMsg)
            hiddenMsg = this.#closingMsg(7000)
        }
    }

    /** show msg */
    #showMsg (marginRight) {
        let pos = -(marginRight) + 40
        const msg = setInterval(() => {
            if (pos >= 0) {
                clearInterval(msg)
                this.#sleep(3000).then(() => {
                    const hide = setInterval(() => {
                        if (pos === -(marginRight) + 40) clearInterval(hide)
                        this.css.marginRight = pos
                        pos = pos - 2
                    }, 1)
                })
            }
            this.css.marginRight = pos
            pos = pos + 2
        }, 1)
    }

    #sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    #setCollor (response) {
        let collor = [ 'success', 'warning', 'danger' ]
        const back = collor.map((a, i) => {
            if (response.indexOf(a) !== -1) return 1
            return 0
        })
        return 'var(--cor-' + collor[back.indexOf(1)] + ')'
    }

    #closingMsg (ms) {
        const idTimeout  = setTimeout(() => {
            this.box.innerHTML = ''
        }, ms)
        return idTimeout
    }
}
