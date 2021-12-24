function exhibition(element) {
    $(element).on("click", function() {
        $(".loading").show();
        var action = $(this).attr("title");
        var tr = $(this).closest("tr");
        var login = tr.find("td:eq(2)").text();
        var url = "user/" + login;
        if(action === "Edita") {
            $("#exhibition").load(url, function() {
                $(".loading").hide();
            })
            .on("submit", function(e) {
                e.preventDefault();
                const buttonName = $(this).text();
                const formData = new FormData($(this).find("form")[0]);
                if(buttonName !== "Salvar") {
                    url = "user/update";
                    saveData(url, formData);
                }
            });
        } else if(action === "Exclui") {
            if(logged.toLowerCase() === login.toLowerCase()) {
                alertLatch("User logged in, is not allowed to delete it", "var(--cor-warning)");
                $(".loading").hide();
                return null;
            }
            modal.confirm({
                title: "Você deseja realmente excluir o usuário <span style='margin-left: 5px;font-size: 1.2em'><strong style='color:red; margin-right: 5px'>" + login + "</strong>?</span>",
                message: " "
            })
            .on("click", function() {
                const formData = new FormData();
                formData.append("Logon", login);
                if($(this).val() == 1) {
                    let url = "user/delete/" + login;
                    if(saveData(url, formData, "Excluindo")) {
                        $("#boxe_main .close").trigger("click");
                        tr.remove();
                    }
                    modal.hide();
                }
            });
        } else if(action === "Reseta") {
            modal.confirm({
                title: "A senha será excluída",
                message: "A nova senha será cadastrada no próximo login"
            }).on("click", function() {
                if($(this).val() == 1) {
                    let url = "user/password/reset";
                    const formData = new FormData();
                    formData.append("Logon", login);
                    saveData(url, formData);
                    modal.hide();
                }
                $("#mask_main").hide();
            });
        }
        $(".loading").hide();
    });
}
function disabledTableLine(dom) {
    /** highlighting disabled user */
    $(dom).each(function() {
        var that = $(this);
        var disabledItens = $(this).find("td:eq(4)").text();
        if(disabledItens !== "SIM") {
            that.find("td").each(function() {
                if($(this).index() > 0 && $(this).index() < 5) {
                    var text = $(this).text();
                    $(this)
                        .html("<strike>" + text + "</sctrike>")
                        .css("color","var(--cor-secondary-light)");
                }
            });
        }
    });
}

function scriptUser() {
    if(typeof(companyId) !== "undefined") {
        disabledTableLine("#exhibition table tbody tr");
    }
    $("select[name=NomeFantasia]").on("change", function() {
        var companyId = $(this).val();
        var url = "user/list/company/" + companyId;
        if(companyId != "") {
            $("#exhibition").load(url, function() {
                exhibition("#exhibition table#tabList tbody td");
                disabledTableLine("#exhibition table tbody tr");
            });
        }
    });
    $(".header button").on("click", function() {
        $(".loading").show();
        var btnAction = $(this).text();
        var companyId = $("select[name=NomeFantasia]").val();
        if(companyId == "") {
            alertLatch("Selecione a EMPRESA", "var(--cor-warning)");
            $(this).closest(".header")
                .find("select")
                .focus();
            return false;
        }
        if(btnAction === "Adicionar") {
            let url = "user/register";
            $("#exhibition").load(url, function() {
                    $(this).find("[name=Nome]").focus();
                    $(".loading").hide();
                })
                .on("submit", function(e) {
                    e.preventDefault();
                    const formData = new FormData($(this).find("form")[0]);
                    formData.append("IDEmpresa",companyId);
                    var link = "user/save";
                    var result = saveData(link, formData);
                    if(result) $("#exhibition form#login-register").find("button[type=reset]").trigger("click");
            });
        } else {
            let url = "user/list/company/" + companyId;
            $("#exhibition").load(url, function() {
                exhibition("#exhibition table#tabList tbody td");
                disabledTableLine("#exhibition table tbody tr");
                $(".loading").hide();
            });
        }
    });
    exhibition("#exhibition #tabList tbody td");
    $(".header button").each(function() {
        if($(this).text() === "Listar")$(this).trigger("click");
    });
}
