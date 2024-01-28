export default class Modal {
    nameModal = $("#boxe_main")
    mask = $("#mask_main")
    title = $("#boxe_main #title")
    message = $("#boxe_main #message")
    content = $("#boxe_main #content")
    buttons = $("#boxe_main #buttons")
    dialogue = $("#div_dialogue")

    closeEnable() {
        let closeEnable
        let that = this
        /** execute only once */
        if (typeof(closeEnable) === "undefined") {
            that.nameModal.find(".close").on("click", function() {
                that.hideContent()
                closeEnable = 1
            })
        }
    }

    beforeSend() {}

    escapeEnable() {
        let escapeEnable
        let that = this
        /** execute only once */
        if (typeof(escapeEnable) === "undefined") {
            $(document).on("keyup", function(e) {
                if(e.keyCode === 27) {
                    that.hideContent()
                    escapeEnable = 1
                }
            })
        }
    }

    clickMaskEnable() {
        let closeMaskEnable
        let that = this
        /** execute only once */
        if (typeof(closeMaskEnable) === "undefined") {
            this.mask.on("click", function() {
                that.hideContent()
                closeMaskEnable = 1
            })
        }
    }

    /** @var title, message, content */
    show(params) {
        let that = this
        this.closeEnable()
        this.escapeEnable()
        this.clickMaskEnable()

        if (params.title != null) this.title.html(params.title).show()
        if (params.message != null) this.message.html(params.message).show().css({
            "overflow-y": "scroll",
            "max-height": "450px"
        })
        if(params.content != null) {
            this.content.load(params.content, params.params, function() {
                if(params.callback != null) params.callback()
                that.complete()
                loading.hide()
            }).show()
        } else {
            loading.hide()
        }

        if(params.buttons != null) this.buttons.html(params.buttons).show()

        this.mask.show()
        this.nameModal.show().css({
            display: "flex",
            top: 0
        })

        return this
    }

    modal(params) {
        loading.show({
            text: "loading..."
        })
        let that = this
        if (params.title != null) this.dialogue.find("#title").html(params.title).show()
        if (params.message != null) this.dialogue.find("#message").html(params.message).show()
        if (params.content != null) {
            this.dialogue.find("#content").load(params.content, params.params, function() {
                loading.hide()
            }).show()
        } else {
            loading.hide()
        }

        if (params.html != null) this.dialogue.find("#content").html(params.html).show()
        if (params.buttons != null) this.dialogue.find("#buttons").html(params.buttons).show()
        if (params.callback != null) params.callback()

        this.dialogue.fadeIn().css({
            display: "flex"
        })

        this.dialogue.find("#content").css({
            "overflow-y": "scroll",
            "max-height": "490px"
        })

        $("#mask_main").css({
            "z-index": "4"
        })

        this.styles({
            element: this.dialogue.find("#buttons button"),
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
        let indexMask = that.mask.css("z-index")
        if (indexMask == 4) {
            that.dialogue.hide()
            that.dialogue.find("#title").hide().find("html").remove()
            that.dialogue.find("#message").hide().find("html").remove()
            that.dialogue.find("#content").hide().html("")
            that.dialogue.find("#buttons").hide().find("html").remove()
            that.mask.css("z-index","2")
        } else if (indexMask == 2) {
            that.title.hide().find("html").remove()
            that.message.hide().find("html").remove()
            that.content.hide().html("")
            that.buttons.hide().find("html").remove()
            that.nameModal.hide().find("html").remove()
            that.dialogue.find("#title").hide().find("html").remove()
            that.dialogue.find("#message").hide().find("html").remove()
            that.dialogue.find("#content").hide().find("html").remove()
            that.dialogue.find("#buttons").hide().find("html").remove()
            that.mask.hide()
        }
    }

    confirm(params) {
        this.dialogue.find("#title").html(params.title).show()
        this.dialogue.find("#message").html(params.message).show()

        if (typeof params.buttons !== "undefined") {
            this.dialogue.find("#buttons").html(params.buttons).show()
        } else {
            this.dialogue.find("#buttons").html("<div align='right'><button class='button cancel'value='0'>Cancela</button><button class='button error' style='margin-left: 3px'value='1'>Confirma</button></div>").show();
        }

        this.dialogue.fadeIn().css({
            display: "flex"
        })

        if (this.mask.css("z-index") === 2) {
            this.mask.css({
                "z-index": "4"
            })
        }

        this.mask.show()
        let that = this

        return this.dialogue.find("button").on("click", function() {
            that.hideContent()
            return $(this).val()
        })
    }

    callback(func) {
        func()
    }

    styles(params) {
        // this.buttons.find("button").css({
        //     "border-radius": "0 0 5px 5px"
        // });
        if (params != null && params.element != null) $(params.element).css(params.css)
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