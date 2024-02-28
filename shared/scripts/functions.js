/** Modal */
(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
      // AMD
      define(['jquery'], factory);
    } else if (typeof exports === 'object') {
      // Node, CommonJS-like
      module.exports = factory(require('jquery'));
    } else {
      // Browser globals (root is window)
      root.modal = factory(root.jQuery);
    }
}(this, function init($, undefined) {
    return {
        nameModal: $("#boxe_main"),
        mask: $("#mask_main"),
        title: $("#boxe_main #title"),
        message: $("#boxe_main #message"),
        content: $("#boxe_main #content"),
        buttons: $("#boxe_main #buttons"),
        dialogue: $("#div_dialogue"),
        closeEnable: function() {
            var that = this;
            /** execute only once */
            if(typeof(closeEnable) === "undefined") {
                that.nameModal.find(".close").on("click", function() {
                    that.hideContent();
                    closeEnable = 1;
                });
            }
        },
        beforeSend:({}),
        escapeEnable: function() {
            let that = this;
            /** execute only once */
            if(typeof(escapeEnable) === "undefined") {
                $(document).on("keyup", function(e) {
                    if(e.keyCode === 27) {
                        that.hideContent();
                        escapeEnable = 1;
                    }
                });
            }
        },
        clickMaskEnable: function() {
            let that = this
            /** execute only once */
            if(typeof(closeMaskEnable) === "undefined") {
                this.mask.on("click", function() {
                    that.hideContent()
                    closeMaskEnable = 1
                })
            }
        },
        /** @var title, message, content */
        show: function(params) {
            loading.show({
                text: "loading..."
            })
            let that = this
            this.closeEnable()
            this.escapeEnable()
            this.clickMaskEnable()
            if (params.title != null) this.title.html(params.title).show()
            if (params.message != null) this.message.html(params.message).show().css({
                "overflow-y": "scroll",
                "max-height": "450px"
            })
            if (params.content != null) {
                this.content.load(params.content, params.params, function() {
                    if(params.callback != null) params.callback()
                    that.complete()
                    loading.hide()
                }).show()
            } else {
                loading.hide()
            }
            if (params.buttons != null) this.buttons.html(params.buttons).show()
            this.mask.show()
            this.nameModal.show().css({
                display: "flex",
                top: 0
            })
            return this
        },
        hideContent: function() {
            let that = this;
            let indexMask = that.mask.css("z-index");
            if(indexMask == 4) {
                that.dialogue.hide();
                that.dialogue.find("#title").hide().find("html").remove();
                that.dialogue.find("#message").hide().find("html").remove();
                that.dialogue.find("#content").hide().html("");
                that.dialogue.find("#buttons").hide().find("html").remove();
                that.mask.css("z-index","2");
            } else if(indexMask == 2) {
                that.title.hide().find("html").remove();
                that.message.hide().find("html").remove();
                that.content.hide().html("");
                that.buttons.hide().find("html").remove();
                that.nameModal.hide().find("html").remove();
                that.dialogue.find("#title").hide().find("html").remove();
                that.dialogue.find("#message").hide().find("html").remove();
                that.dialogue.find("#content").hide().find("html").remove();
                that.dialogue.find("#buttons").hide().find("html").remove();
                that.mask.hide();
            }
        },
        hide: function() {
            $("#boxe_main, #div_dialogue").hide();
        },
        confirm: function(params) {
            this.dialogue.find("#title").html(params.title).show();
            this.dialogue.find("#message").html(params.message).show();
            if(typeof params.buttons !== "undefined") {
                this.dialogue.find("#buttons").html(params.buttons).show();
            } else {
                this.dialogue.find("#buttons").html("<div align='right'><button class='button cancel' value='0'>Cancela</button><button class='button error' style='margin-left: 3px' value='1'>Confirma</button></div>").show();
            }
            this.dialogue.fadeIn().css({
                display: "flex"
            });
            if(this.mask.css("z-index") === 2) {
                this.mask.css({
                    "z-index": "4"
                });
            }
            this.mask.show();

            let that = this;
            return this.dialogue.find("button").on("click", function() {
                that.hideContent();
                return $(this).val();
            });
        },
        open: function(params) {
            loading.show({
                text: "loading..."
            });
            this.closeEnable();
            if(params.title != null) this.title.html(params.title).show();
            if(params.message != null) this.message.html(params.message).show();
            if(params.content != null) this.content.load(params.content, function() {
                loading.hide();
            }).show();
            this.mask.fadeIn();
            this.nameModal.fadeIn().css({
                display: "flex",
                top: 0
            });
            return this;
        },
        modal: function(params) {
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
        },
        new: function(params) {
            loading.show({
                text: "loading..."
            });
            $("body").append(
                "<section id='" + params.box + "' ><div id='title' class='title'></div><span id='message'></span><div id='content'></div></section>"
            );
            let idName = $("#" + params.box);
            idName.css({
                position: "fixed",
                top: "30px",
                left: "25%",
                width: "50%",
                "z-index": "10",
                background: "white"
            });
            idName.find("#title").html(params.title).show();
            idName.find("#content").load(params.url, params.post, function() {
                let buttons = "<div id='buttons' style='text-align: right; margin-bottom: -25px'>" + params.buttons + "</div>";
                $(this).parent().append(buttons).find("button").css("border-radius","0 0 5px 5px");
                params.callback();
                loading.hide();
            }).css({
                "max-height": "450px",
                "overflow-y": "scroll"
            });
            return this;
        },
        on: function(event, func) {
            this.nameModal.on(event, function() {
                func()
            })
        },
        complete: function(params) {
            if(typeof(params) !== "undefined") {
                this.content.on("submit", function(e) {
                    e.preventDefault();
                });
                this.buttons.html(params.buttons).show();
                if(params.callback != null) params.callback();
            }
            return this;
        },
        callback: function(func) {
            func()
        },
        close: function(params) {
            $("#mask_main").trigger("click");
        },
        styles: function(params) {
            this.buttons.find("button").css({
                "border-radius": "0 0 5px 5px"
            });
            if(params != null && params.element != null) $(params.element).css(params.css);
            return this;
        }
    };
}));

/** loading */
const loading = {
    source: "../themes/img/loading.png",
    height: "100%",
    width: "100%",
    show: function(params) {
        let text = (params.text ?? "") ;
        let source = (params.source ? params.source : this.source);
        $(".loading").show();
        $(".text-loading").html(text).show();
        return this;
    },
    hide: function() {
        $(".loading, .text-loading").hide();
    }
};

/** alert message */
const alertLatch = function(text, background) {
    let box = $("#alert").html(text).css("display","none");
    let marginRight = box.width() + 40;
    let css = box.css({
                display: "block",
                overflow: "hidden",
                background: background,
                "margin-right": -marginRight
            });
    css.animate({
            "margin-right": "0"
        }, 1000, function() {
            setTimeout(function() {
                $("#alert").animate({
                    "margin-right": -marginRight
                });
            }, 5000);
        });
    $("#alert").on("click", function() {
        css.animate({
                "margin-right": "0"
            }, 1000, function() {
                setTimeout(function() {
                    $("#alert").animate({
                        "margin-right": -marginRight
                    });
                }, 3000);
            });
    });
};

/** save configuration */
const saveForm = function(act, action, connectionName = null, url = "../Suporte/Ajax/save.php") {
    let success
    let form = $("#boxe_main form")
    let data = $("#boxe_main form").serialize()

    for(let value of form[0]) {
        value.style = "background: white"
        if(value.required && value.value === "") {
            $(value).trigger("focus")
            alertLatch("This field is required", "var(--cor-warning)")
            return value.style = "background: pink"
        }
    }
    $.ajax({
        url: url,
        type: "POST",
        dataType: "JSON",
        async: false,
        data: {
            act: act,
            action: action,
            connectionName: connectionName,
            data: data
        },
        beforeSend: function() {
            loading.show({
                text: "salvando"
            });
        },
        success: function(response) {
            let background;
            if(response.indexOf("success") !== -1) {
                background = "var(--cor-success)";
                success = true;
            } else {
                background = "var(--cor-warning)";
                success = false;
            }
            alertLatch(response, background);
        },
        error: function(error) {
            alertLatch(error, "var(--cor-danger)");
        },
        complete: function() {
            loading.hide();
        }
    });
    if(success) {
        $(".content").load("config", function() {
            callScript("config");
            $("#boxe_main, #mask_main").hide();
        });
    }
    return success;
};

/** @params array screens(access), element, icon One, icon two */
// const insertCheck = function(screens, element, optionGreen, optionRed) {
//     element.find("i").removeClass();
//     element.each(function() {
//         if(screens == " *" || screens.indexOf($(this).text().trim()) !== -1) {
//             $(this).find("i").addClass(optionGreen)
//                 .css("color","green");
//         } else {
//             $(this).find("i").addClass(optionRed)
//                 .css("color","red");
//         }
//     });
// };

/** @return object */
// const getScreenAccess = function(element, check, groupName) {
//     var access = "";
//     element.each(function() {
//         if($(this).find("i").hasClass(check)) {
//             access += (access.length === 0 ? $(this).text() : "," + $(this).text());
//         }
//     });
//     return {
//         access: access,
//         name: groupName
//     };
// };

/**
* @return bool
* @params element, icon One, icon Two
*/
// const changeCheck = function(element, optionGreen, optionRed) {
//     let currentOption = element.attr("class");
//     element.removeClass();
//     if(currentOption === optionRed) {
//         element.addClass(optionGreen)
//             .css("color","green");
//     } else {
//         element.addClass(optionRed)
//             .css("color","red");
//     }
//     return true;
// };

/** @return resp */
const loadData = function(link, data = null, dataType = "JSON", msg = "Loading...") {
    let resp = null;
    $.ajax({
        url: link,
        type: "POST",
        dataType: dataType,
        context: msg,
        async: false,
        data: data,
        beforeSend: function() {
            $("#mask_main").show();
            loading.show({
                text: msg
            });
        },
        success: function(response) {
            resp = response;
        },
        error: function(error) {
            alertLatch("Could not load data", "var(--cor-danger)");
            setTimeout(function() {
                loading.hide();
                $("#mask_main").fadeOut();
            }, setTime);
        },
        complete: function() {
            if($("#boxe_main").css("display") === "none")$("#mask_main").hide();
            loading.hide();
        }
    });
    return resp;
};

/** @return bool with file data */
const saveData = function(link, data, msg = "Saving") {
    let success = false;
    $.ajax({
        url: link,
        type: "POST",
        dataType: "JSON",
        context: msg,
        processData: false,
        contentType: false,
        async: false,
        data: data,
        beforeSend: function() {
            $("#mask_main").show();
            loading.show({
                text: msg
            });
        },
        success: function(response) {
            let background;
            if(response.indexOf("success") !== -1) {
                background = "var(--cor-success)";
                success = true;
            } else if(response.indexOf("danger") !== -1) {
                background = "var(--cor-danger)";
            } else {
                background = "var(--cor-warning";
            }
            alertLatch(response, background);
            if(success)$("#mask_main").hide();
        },
        error: function(error) {
            alertLatch("Could not save change", "var(--cor-danger)");
        },
        complete: function() {
            if($("#boxe_main").css("display") === "none")$("#mask_main").hide();
            loading.hide();
        }
    });
    return success;
};

/** @return bool */
const saveAjax = function(link, data, msg = "Saving") {
    let success = false;
    $.ajax({
        url: link,
        type: "POST",
        dataType: "JSON",
        context: msg,
        async: false,
        data: data,
        beforeSend: function() {
            $("#mask_main").show();
            loading.show({
                text: msg
            });
        },
        success: function(response) {
            let background;
            if(response.indexOf("success") !== -1) {
                background = "var(--cor-success)";
                success = true;
            } else if(response.indexOf("danger") !== -1) {
                background = "var(--cor-danger)";
            } else {
                background = "var(--cor-warning";
            }
            alertLatch(response, background);
            if(success)$("#mask_main").hide();
            loading.hide();
        },
        error: function(error) {
            alertLatch("Could not save change", "var(--cor-danger)");
            setTimeout(function() {
                loading.hide();
                $("#mask_main").fadeOut();
            }, setTime);
        },
        complete: function() {}
    });
    return success;
};

const sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const valReal = function(val) {
    var val = (val != null ? val : "0,00");
    return parseFloat(val.replace(".","").replace(",","."));
};

const moeda = function(val) {
    return parseFloat(val).toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});
};

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

const getYearMonthDay = function(date, index, name=null) {
    date = date.split("-");
    if(!name || index !== 1) {
        return date[index];
    }
    let conversion = [ "janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
    return conversion[name-1];
};

function monthNumber(month) {
    let conversion = [ "janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
    let m = month.toLowerCase();
    return conversion.indexOf(m) + 1;
}

const thumbImage = (origin, destination) => {
    const [file] = origin.files
    if (file) {
        destination.src = URL.createObjectURL(file)
    }
}

const unserializedData = (data) => {
    let urlParams = new URLSearchParams(data);
    let unserialized = {}; // prepare result object
    let key;
    let value;
    for ([key, value] of urlParams) { // get pair > extract it to key/value
        unserialized[key] = value;
    }
    return unserialized
}
