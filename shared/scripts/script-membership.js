function certificatePrinting(ids, side=null) {
    loading.show({
        text: "loading"
    });
	modal.show({
		title: "CERTIFICADO DE BATISMO",
		content: "certificate",
        callback: function() {
            /** Shifting aside */
            $("#certificate").on("click", function() {
                side = (side === null ? true : side);
                $(this).find("[data-id]").each(function() {
                    ids.push($(this).attr("data-id"));
                });
                $("#boxe_main #content").html("");
                certificatePrinting(ids, !side);
                ids = [];
            });
            loading.hide();
        },
		params: {
			ids: ids,
			side
		},
	})
	.styles({
		element: "#boxe_main #content",
			css: {
				height: "450px"
			}
	})
	.complete({
		buttons: "<button class='button btn-secondary'>Fechar</button><button class='button btn-danger'>Imprimir</button>",
		callback: function() {
			$(buttons).find("button").on("click", function() {
				if($(this).text() === "Fechar") {
					$("#boxe_main, #mask_main").hide();
				} else {
					window.print();
				}
			});
		}
	});
}
function searchMember() {
    let search = $("#membership input[name=search]").val().toUpperCase();
    $("#tab-membership table").each(function() {
        let member = $(this).attr("id");
        if(typeof(member) !== "undefined") {
            if($(this).attr("id").indexOf(search) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        }
    });
}
function scriptMembership() {
    $("#membership .photo, #membership [data-action='edit'], .add").on("click", function() {
        let name = $(this).attr("data-name");
        if(name === "markOff") {
            let src = $("#membership .badge").find("img").attr("src").split("/");
            src.pop();
            $("#membership .badge").find("img").on("load", function() {
                $(".loading").hide();
            }).attr("src", src.join("/") + "/off.png").attr("alt","off");
            members_ids = [];
            $("#selected").text(members_ids.length);
            return null;
        }
        let id = ($(this).attr("data-id") ?? 0);
        let add_edit = $(this).hasClass("add");
        let way = (add_edit ? "Novo Membro": name);
        modal.show({
            title: way,
            content: "membership/register/" + id
        })
        .styles({
            element: "#boxe_main #content",
            css: {
                height: "450px"
            }
        })
        .complete({
            buttons: "<button  class='button btn-danger'>Save</button>",
            callback: function() {
                $("#boxe_main button").on("click", function() {
                    if($(this).text() === "Save") {
                        let form = $("#boxe_main form");
                        let required = form.find("[required]");

                        /** Require compulsory fields */
                        for(var field of required) {
                            if(field.value == "") {
                                let fieldName = field.previousElementSibling.textContent.trim()
                                $(field).trigger("focus").css("background", "pink")

                                return alertLatch("O campo \"" + fieldName.substring(0, fieldName.length -1) + "\" requerido", "var(--cor-warning)");
                            }
                        }

                        let formData = new FormData(form[0]);

                        /** pick up attached files */
                        let file = $("#boxe_main form [type=file]")[0].files[0]
                        if(file !== "undefined") {
                            formData.append("file", file)
                        }
                        if(saveData("membership/update", formData)) {
                            alertLatch("Is need reload for update to the photo", "var(--cor-warning)")
                            modal.close();
                        }
                    }
                });
            }
        });
    });
    $("#membership .no_members").on("click", function() {
        modal.show({
            title: "EX-MEMBROS OU VISITANTES",
            content: "membership/no_member"
        });
    });
    let members_ids = [];
    $("#membership .badge").on("click", function() {
        $(".loading").show();
        let id = $(this).closest("td").find("span").attr("data-id");
        let onOff = $(this).find("img").attr("alt");
        let src = $(this).find("img").attr("src").split("/");
        src.pop();
        if(onOff === "off") {
            if(members_ids.length >= 4) {
                $(".loading").hide();
                return alertLatch("Only four cards per sheet", "var(--cor-warning)");
            }
            members_ids.push(id);
            $(this).find("img").on("load", function() {
                $(".loading").hide();
            }).attr("src", src.join("/") + "/on.png");
            $(this).find("img").attr("alt","on");
        } else {
            let index = members_ids.indexOf(id);
            members_ids.splice(index,1);
            $(this).find("img").on("load", function() {
                $(".loading").hide();
            }).attr("src", src.join("/") + "/off.png");
            $(this).find("img").attr("alt","off");
        }
        $("#selected").text(members_ids.length);
    });
    $("#membership section button").on("click", function() {
        if($(this).text().indexOf("CARTEIRINHA") !== -1) {
            $("#loading").show();
            if(members_ids.length < 1) {
                return alertLatch("No Member was selected","var(--cor-warning)");
            } else {
                modal.show({
                    title: "EMISSÃO DE CARTEIRINHA",
                    content: "wallet",
                    params: {
                        members_ids
                    }
                })
                .styles({
                    element: "#boxe_main #content",
                    css: {
                        height: "450px"
                    }
                })
                .complete({
                    buttons: "<button class='button btn-secondary'>Fechar</button><button class='button btn-danger'>Imprimir</button>",
                    callback: function() {
                        $(buttons).find("button").on("click", function() {
                            if($(this).text() === "Fechar") {
                                $("#boxe_main, #mask_main").hide();
                            } else {
                                window.print();
                            }
                        });
                    }
                });
            }
        }
    });
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
    $("#membership .certificate").on("click", function() {
        let id = $(this).parent().attr("data-id");
		if(typeof ids === "undefined") {
			ids = [ id ];
		} else {
			ids.push(id);
		}
		if(ids.length === 1) {
			modal.confirm({
				title: "Você pode selecionar até dois certificados",
				message: "Deseja selecionar mais um certificado?",
				buttons: "<button class='button cancel' value='0'>NÃO</button><button class='button error' value='1' style='margin-left: 3px'>SIM</button>"
			})
            .on("click", function() {
				if($(this).val() == 0) {
					certificatePrinting(ids);
                    ids = [];
				} else {
					return null;
				}
			});
		} else {
			certificatePrinting(ids);
            ids = [];
		}
	});
}
