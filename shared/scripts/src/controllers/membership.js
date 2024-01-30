import CertificatePrinting from "../../lib/certificateprintiing.js"
import Service from "../services/membership.js"
import View from "../views/membership.js"
import AbstractController from "./abstractController.js"

export default class Membership extends AbstractController {
    #view
    #service

    static initializer() {
        const membership = new Membership()
        membership.#view = new View()
        membership.#service = new Service()
        membership.#edition()
        membership.#view.certificate(({ ids }) => {
            CertificatePrinting.print(ids)
        })

        // let members_ids = [];
        // $("#membership .badge").on("click", function() {
        //     $(".loading").show();
        //     let id = $(this).closest("td").find("span").attr("data-id");
        //     let onOff = $(this).find("img").attr("alt");
        //     let src = $(this).find("img").attr("src").split("/");
        //     src.pop();
        //     if(onOff === "off") {
        //         if(members_ids.length >= 4) {
        //             $(".loading").hide();
        //             return alertLatch("Only four cards per sheet", "var(--cor-warning)");
        //         }
        //         members_ids.push(id);
        //         $(this).find("img").on("load", function() {
        //             $(".loading").hide();
        //         }).attr("src", src.join("/") + "/on.png");
        //         $(this).find("img").attr("alt","on");
        //     } else {
        //         let index = members_ids.indexOf(id);
        //         members_ids.splice(index,1);
        //         $(this).find("img").on("load", function() {
        //             $(".loading").hide();
        //         }).attr("src", src.join("/") + "/off.png");
        //         $(this).find("img").attr("alt","off");
        //     }
        //     $("#selected").text(members_ids.length);
        // });
        // $("#membership section button").on("click", function() {
        //     if($(this).text().indexOf("CARTEIRINHA") !== -1) {
        //         $("#loading").show();
        //         if(members_ids.length < 1) {
        //             return alertLatch("No Member was selected","var(--cor-warning)");
        //         } else {
        //             modal.show({
        //                 title: "EMISSÃO DE CARTEIRINHA",
        //                 content: "wallet",
        //                 params: {
        //                     members_ids
        //                 }
        //             })
        //             .styles({
        //                 element: "#boxe_main #content",
        //                 css: {
        //                     height: "450px"
        //                 }
        //             })
        //             .complete({
        //                 buttons: "<button class='button btn-secondary'>Fechar</button><button class='button btn-danger'>Imprimir</button>",
        //                 callback: function() {
        //                     $(buttons).find("button").on("click", function() {
        //                         if($(this).text() === "Fechar") {
        //                             $("#boxe_main, #mask_main").hide();
        //                         } else {
        //                             window.print();
        //                         }
        //                     });
        //                 }
        //             });
        //         }
        //     }
        // });
        $("#membership #tab-membership").on("scroll", function() {
            let scrollTop = $(this).scrollTop();
            if(scrollTop > 0) {
                $("#upArrow").fadeIn();
            } else {
                $("#upArrow").fadeOut();
            }
        });
        $("#upArrow").on("click", function() {
            $("#membership #tab-membership").scrollTop(0);
        });
        $("#membership").on("keyup", function() {
            $(this).find("i").removeClass("fa-search").addClass("fa-times");
            searchMember();
        });
        $("#membership button#search").on("click", function() {
            $(this).parent("section").find("input").val("").focus();
            $(this).find("i").removeClass("fa-times").addClass("fa-search");
            searchMember();
        });
        // $("#membership .certificate").on("click", function() {
        //     let id = $(this).parent().attr("data-id");
        //     if(typeof ids === "undefined") {
        //         ids = [ id ];
        //     } else {
        //         ids.push(id);
        //     }
        //     if(ids.length === 1) {
        //         modal.confirm({
        //             title: "Você pode selecionar até dois certificados",
        //             message: "Deseja selecionar mais um certificado?",
        //             buttons: "<button class='button cancel' value='0'>NÃO</button><button class='button error' value='1' style='margin-left: 3px'>SIM</button>"
        //         })
        //         .on("click", function() {
        //             if($(this).val() == 0) {
        //                 certificatePrinting(ids);
        //                 ids = [];
        //             } else {
        //                 return null;
        //             }
        //         });
        //     } else {
        //         certificatePrinting(ids);
        //         ids = [];
        //     }
        // });
    }

    #edition() {
        this.#view.setBtns((formData) => {
            const validate = this.#validate(formData)
            const response = this.#service.save(validate.data)
            this.#view.response(
                response,
                () => {
                    this.#view.showPage({
                        page: this.#service.openFile({
                            method: 'GET',
                            url: 'membership/init'
                        })
                    })
                    this.#edition()
                }
            )
            if (response.indexOf('success') !== -1 && validate.reload) window.location.reload()
        })
    }

    #validate(formData) {
        let reload = false
        if (formData.get('imgInp') !== 'undefined' || formData.get('imgCert') !== 'undefined') reload = true
        formData.delete('imgCert')
        return { data: formData, reload }
    }

    // #certificate() {
    //     let ids = []
    //     document.querySelectorAll('.certificate').forEach((btn) => {
    //         btn.onclick = (e) => {
    //             let id = (e.target.parentElement.attributes['data-id'].value ?? null)

    //             if (ids.length === 0) {
    //                 this.modal.confirm({
    //                     title: "Você pode selecionar até dois certificados",
    //                     message: "Deseja selecionar mais um certificado?",
    //                     buttons: "<button class='button cancel' value='0'>NÃO</button><button class='button error' value='1' style='margin-left: 3px'>SIM</button>"
    //                 })
    //                 .on("click", function(e) {
    //                     let btnValue = e.target.value
    //                     if (btnValue == 0) {
    //                         certificatePrinting(ids)
    //                         ids = []
    //                     }
    //                     if (btnValue == 1) {
    //                         ids.push(id)
    //                     }
    //                 })
    //             } else {
    //                 ids.push(id)
    //                 certificatePrinting(ids)
    //                 ids = []
    //             }
    //         }
    //     })
    // }
}
