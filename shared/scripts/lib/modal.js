import CreateElement from './createElement.js'
import Loading from './loading.js'

export default class Modal {
    nameModal = document.querySelector('#boxe_main')
    mask = document.querySelector("#mask_main")
    title = document.querySelector("#boxe_main #title")
    btnClose = document.querySelector('#boxe_main .close')
    message = document.querySelector("#boxe_main #message")
    content = document.querySelector("#boxe_main #content")
    buttons = document.querySelector("#boxe_main #buttons")
    dialogue = document.querySelector("#div_dialogue")

    closeEnable () {
        let closeEnable
        let that = this
        /** execute only once */
        if (typeof(closeEnable) === "undefined") {
            document.querySelector('#boxe_main .close').onclick = evnt => {
                that.hideContent()
                closeEnable = 1
            }
        }
    }

    beforeSend () {
        Loading.show()
    }

    async afterSend () {
        await Loading.hide()
    }

    escapeEnable () {
        let escapeEnable
        let that = this
        /** execute only once */
        if (typeof(escapeEnable) === "undefined") {
            document.onkeyup = e => {
                if(e.keyCode === 27) {
                    that.hideContent()
                    escapeEnable = 1
                }
            }
        }
    }

    clickMaskEnable () {
        let closeMaskEnable
        let that = this
        /** execute only once */
        if (typeof(closeMaskEnable) === "undefined") {
            this.mask.onclick = () => {
                that.hideContent()
                closeMaskEnable = 1
            }
        }
    }

    /** @var title, message, content */
    show (params) {
        this.beforeSend()
        this.closeEnable()
        this.escapeEnable()
        this.clickMaskEnable()

        if (params.title != null) {
            this.title.innerHTML = params.title
            this.title.style.display = 'block'
        }
        if (params.message != null) {
            this.message.innerHTML = params.message
            this.message.style.display = 'block'
            this.message.style.overflowY = 'scroll'
            this.message.style.maxHeight = '450px'
        }
        if (params.content != null) {
            this.content.innerHTML = params.content
            this.content.style.display = 'block'
            if (params.callback != null) params.callback()
            this.complete()
        }

        if (params.buttons != null) {
            this.buttons.innerHTML = params.buttons
            this.buttons.style.display = 'block'
        }

        this.mask.style.display = 'block'
        this.mask.style.zIndex = '2'
        this.nameModal.style.display = 'flex'
        this.nameModal.top = 0

        this.afterSend()
        return this
    }

    modal (params) {
        this.beforeSend()
        if (params.title != null) {
            this.dialogue.querySelector('#title').innerHTML = params.title
            this.dialogue.querySelector('#title').style.display = 'block'
        }
        if (params.message != null) {
            this.dialogue.querySelector('#message').innerHTML = params.message
            this.dialogue.querySelector('#message').style.display = 'block'
        }
        if (params.content != null) {
            this.dialogue.querySelector("#content").innerHTML = params.content
            this.dialogue.querySelector("#content").style.display = 'block'
        }

        if (params.html != null) {
            this.dialogue.querySelector("#content").innerHTML = params.html
            this.dialogue.querySelector("#content").style.display = 'block'
        }
        if (params.buttons != null) {
            this.dialogue.querySelector("#buttons").innerHTML = params.buttons
            this.dialogue.querySelector("#buttons").style.display = 'block'
        }
        if (params.callback != null) params.callback()

        this.dialogue.style.display = "flex"

        this.dialogue.querySelector("#content").style.overflowY = 'scroll'
        this.dialogue.querySelector("#content").style.maxHeight = '490px'

        this.mask.style.zIndex = "4"
        this.mask.onclick = () => {
            this.hideContent()
        }

        this.styles({
            element: "#buttons button",
            css: {
               "border-radius": "0 0 5px 5px",
            }
        })

        this.complete()
        this.afterSend()
        return this
    }

    complete (params) {
        if (typeof(params) !== "undefined") {
            this.content.on("submit", function(e) {
                e.preventDefault()
            })
            this.buttons.html(params.buttons).show()
            if (params.callback != null) params.callback()
        }
        return this
    }

    close () {
        document.querySelector('#mask_main').dispatchEvent(new Event('click'))
    }

    hide () {
        document.querySelector("#boxe_main").style.display = 'none'
        document.querySelector("#div_dialogue").style.display = 'none'
    }

    hideContent () {
        let that = this
        let indexMask = that.mask.style.zIndex
        if (indexMask == 4) {
            this.dialogue.style.display = 'none'
            this.dialogue.querySelector("#title").innerHTML = ''
            this.dialogue.querySelector("#message").innerHTML = ''
            this.dialogue.querySelector("#content").innerHTML = ''
            this.dialogue.querySelector("#buttons").innerHTML = ''
            this.mask.style.zIndex = "2"
        } else {
            const dialogue = [
                this.dialogue.querySelector("#title"),
                this.dialogue.querySelector("#message"),
                this.dialogue.querySelector("#content"),
                this.dialogue.querySelector("#buttons")
            ]
            .forEach((e) => {
                e.innerHTML = ''
                e.style.display = 'none'
            })
            this.dialogue.style.display = 'none'

            const box = [
                this.title,
                this.message,
                this.content,
                this.buttons,
                this.mask
            ]
            .forEach((e) => {
                e.style.display = 'none'
                e.innerHTML = ''
            })
            this.nameModal.style.display = 'none'
        }
    }

    confirm (params) {
        this.beforeSend()
        this.dialogue.querySelector("#title").innerHTML = params.title
        this.dialogue.querySelector("#title").style.display = 'block'
        this.dialogue.querySelector("#message").innerHTML = params.message
        this.dialogue.querySelector("#message").style.display = 'block'

        if (typeof(params.buttons) !== "undefined") {
            this.dialogue.querySelector("#buttons").innerHTML = params.buttons
        } else {
            this.dialogue.querySelector("#buttons").innerHTML = "<div align='right'><button class='button cancel'value='0'>Cancela</button><button class='button error' style='margin-left: 3px'value='1'>Confirma</button></div>"
        }
        this.dialogue.querySelector("#buttons").style.display = 'block'
        this.dialogue.style.display = "flex"

        if (this.mask.style.zIndex == 2) this.mask.style.zIndex = 4

        this.mask.style.display = 'block'
        this.dialogue.querySelectorAll("button").forEach((e) => {
            e.onclick = btn => this.hideContent()
        })
        this.afterSend()
        return this.dialogue.querySelector('#buttons')
    }

    callback (fn) {
        fn()
    }

    /**
     *
     * @param {element: class or id
     * css: attribute, value} params
     * @returns
     */
    styles (params) {
        if (params != null && params.element != null) {
            for (let i in params.css) {
                document.querySelector(params.element).style = `${i}: ${params.css[i]}`
            }
        }
        if (params.elements != null) {
            for (let el of params.elements.split(',')) {
                for (let i in params.css) {
                    document.querySelector(el).style = `${i}: ${params.css[i]}`
                }
            }
        }
        return this
    }

    new (params) {
        this.beforeSend()
        CreateElement.initializer({
            parent: {
                element: 'section', attr: { id: params.box }
            },
            childs: {
                divs: [
                    { id: 'title' },
                    { id: 'content' }
                ],
                span: { id: 'message' },
                div: { id: 'buttons' }
            }
        })
        .render()

        document.querySelector(`#${params.box}`).style.position = 'absolute'
        document.querySelector(`#${params.box}`).style.zIndex = '10'
        document.querySelector(`#${params.box}`).style.top = '30px'
        document.querySelector(`#${params.box}`).style.left = '20%'
        document.querySelector(`#${params.box}`).style.width = '60%'
        document.querySelector(`#${params.box}`).style.background = 'white'

        document.querySelector(`#${params.box} #content`).innerHTML = params.content
        document.querySelector(`#${params.box} #buttons`).innerHTML = params.buttons

        document.querySelector(`#${params.box} #content`).style.maxHeight = '450px'
        document.querySelector(`#${params.box} #content`).style.overflowY = 'scroll'
        document.querySelector(`#${params.box} #buttons`).style.textAlign = 'right'
        document.querySelector(`#${params.box} #buttons`).style.marginBottom = '-20px'

        if (params.callback !== null) params.callback()

        return this
    }

    on ({ event, fn }) {
        this.nameModal.on(event, () => {
            fn()
        })
    }

    // open (params) {
    //     this.beforeSend()
    //     this.closeEnable()
    //     if (params.title != null) this.title.html(params.title).show()
    //     if (params.message != null) this.message.html(params.message).show()
    //     if (params.content != null) this.content.load(params.content, () => {
    //         Loading.hide()
    //     })
    //     .show()

    //     this.mask.fadeIn()
    //     this.nameModal.fadeIn().css({
    //         display: "flex",
    //         top: 0
    //     })

    //     return this
    // }
}
