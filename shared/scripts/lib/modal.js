export default class Modal {
    nameModal = document.querySelector("#boxe_main")
    mask = document.querySelector("#mask_main")
    title = document.querySelector("#boxe_main #title")
    message = document.querySelector("#boxe_main #message")
    content = document.querySelector("#boxe_main #content")
    buttons = document.querySelector("#boxe_main #buttons")
    dialogue = document.querySelector("#div_dialogue")

    closeEnable() {
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

    beforeSend() {}

    escapeEnable() {
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

    clickMaskEnable() {
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
    show(params) {
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
        if(params.content != null) {
            this.content.innerHTML = params.content
            this.content.style.display = 'block'
            if (params.callback != null) params.callback()
            this.complete()
        } else {
            loading.hide()
        }

        if (params.buttons != null) {
            this.buttons.innerHTML = params.buttons
            this.buttons.style.display = 'block'
        }

        this.mask.style.display = 'block'
        this.mask.style.zIndex = '2'
        this.nameModal.style.display = 'flex'
        this.nameModal.top = 0

        return this
    }

    modal(params) {
        loading.show({
            text: "loading..."
        })
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
        } else {
            loading.hide()
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
            element: this.dialogue.querySelector("#buttons button"),
            css: {
               "border-radius": "0 0 5px 5px",
            }
        })

        this.complete()
        return this
    }

    complete(params) {
        if (typeof(params) !== "undefined") {
            this.content.on("submit", function(e) {
                e.preventDefault()
            })
            this.buttons.html(params.buttons).show()
            if (params.callback != null) params.callback()
        }
        return this
    }

    close() {
        $("#mask_main").trigger("click")
    }

    hide() {
        $("#boxe_main, #div_dialogue").hide()
    }

    hideContent() {
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
            this.title.style.display = 'none',
            this.message.style.display = 'none',
            this.content.style.display = 'none',
            this.buttons.style.display = 'none',
            this.nameModal.style.display = 'none',
            this.dialogue.style.display = 'none',
            this.mask.style.display= 'none'
        }
    }

    confirm(params) {
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
        return this.dialogue.querySelector('#buttons')
    }

    callback(func) {
        func()
    }

    styles(params) {
        // this.buttons.querySelector("button").style.borderRadius = "0 0 5px 5px"

        if (params != null && params.element != null) {
            for (let i in params.css) {
                document.querySelector(params.element).style.i = params.css[i]
            }
        }
        if (params.elements != null) {
            for (let el of params.elements.split(',')) {
                for (let i in params.css) {
                    document.querySelector(el).style.i = params.css[i]
                }
            }
        }
        return this
    }

        // open: function(params) {
        //     loading.show({
        //         text: "loading..."
        //     });
        //     this.closeEnable();
        //     if(params.title != null) this.title.html(params.title).show();
        //     if(params.message != null) this.message.html(params.message).show();
        //     if(params.content != null) this.content.load(params.content, function() {
        //         loading.hide();
        //     }).show();
        //     this.mask.fadeIn();
        //     this.nameModal.fadeIn().css({
        //         display: "flex",
        //         top: 0
        //     });
        //     return this;
        // },
        // new: function(params) {
        //     loading.show({
        //         text: "loading..."
        //     });
        //     $("body").append(
        //         "<section id='" + params.box + "' ><div id='title' class='title'></div><span id='message'></span><div id='content'></div></section>"
        //     );
        //     let idName = $("#" + params.box);
        //     idName.css({
        //         position: "fixed",
        //         top: "30px",
        //         left: "25%",
        //         width: "50%",
        //         "z-index": "10",
        //         background: "white"
        //     });
        //     idName.find("#title").html(params.title).show();
        //     idName.find("#content").load(params.url, params.post, function() {
        //         let buttons = "<div id='buttons' style='text-align: right; margin-bottom: -25px'>" + params.buttons + "</div>";
        //         $(this).parent().append(buttons).find("button").css("border-radius","0 0 5px 5px");
        //         params.callback();
        //         loading.hide();
        //     }).css({
        //         "max-height": "450px",
        //         "overflow-y": "scroll"
        //     });
        //     return this;
        // },
        // on: function(event, func) {
        //     this.nameModal.on(event, function() {
        //         func()
        //     })
        // },
    // }
}