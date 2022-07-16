const identif = (page, logged="Nenhum usuário logado") => {
    switch(page) {
        case "home":
            return "<i>Usuário:</i> " + logged;
        case "user":
            return "GERENCIAMENTO DE LOGINS";
        case "shield":
            return "TELAS DE ACESSO";
        case "config":
            return "CONFIGURAÇÃO DO ACESSO AO BANCO DE DADOS";
        case "membership/init":
            return "LISTA DE MEMBROS";
        case "occupation/init":
            return "FUNÇÕES";
        case "membership/birthday":
            return "ANIVERSARIANTES";
        case "moviment": case "moviment/new":
            return "MOVIMENTAÇÃO FINANCEIRA";
        case "documentation/init":
            return "DOCUMENTAÇÃO";
        case "documentation/add":
            return "CADASTRO DE DOCUMENTAÇÃO";
        case "proof/init":
            return "CADASTRO DE COMPROVANTES";
        default:
            return "CADASTRO DE " + page.toUpperCase();
    }
}

const callScript = (name) => {
    switch(name) {
        case "user":
            scriptUser();
            break;
        case "shield":
            scriptSecurity();
            break;
        case "config":
            scriptConfig();
            break;
        case "moviment": case "moviment/new": case "proof/init":
            scriptMoviment();
            break;
        case "membership/init":
            scriptMembership();
            break;
        case "occupation/init":
            scriptOccupation();
            break;
        case "documentation/add": case "documentation/init":
            scriptDocumentation();
            break;
    }
}

$(function() {
    $("#topHeader ul li a").on("click", function(e) {
        e.preventDefault();
        var name = $(this).attr("data-id");
        var li = $(this).closest("li");

        $("#topHeader ul li").removeClass("active");
        li.addClass("active");
        if($(this).attr("data-toggle") !== "dropdown") {
            $("#upArrow").css("display","none");
            $(".loading, #mask_main").show();
            $(".identification").html(identif(name, logged));

            $(".content").load(name, function() {
                callScript(name);
                $(".loading, #mask_main").hide();
                let hasButton = topHeader.querySelector("[aria-expanded]").attributes["aria-expanded"].value
                if(hasButton == "true") {
                    $(".navbar-toggler-icon").trigger("click")
                }
            });
        }
    });

    if(typeof logged !== "undefined") {
        $("#topHeader ul li [data-id=home]").trigger("click")
        let showBirthMonths = () => {
            let now = new Date
            modal.show({
                title: 'Aniversariantes do Mês',
                content: 'membership/birthmonth',
                params: { month: now.getMonth() + 1 }
            })
        }
        setTimeout(function() {
            showBirthMonths()
        }, 2000)
    }
});
