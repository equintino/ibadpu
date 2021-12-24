function occupationAction() {
    $("#registerOccupation #occupation-register").on("submit", function(e) {
        e.preventDefault();
        let that = $(this);
        let data = $(this).serialize();
        $.ajax({
            url: "occupation/save",
            type: "POST",
            dataType: "JSON",
            data: data,
            beforeSend: function() {
                $(".loading").show();
            },
            success: function(response) {
                let background = "var(--cor-warning)";
                if(response.indexOf("success") !== -1) {
                    background = "var(--cor-success)";
                    that.find("[type=reset]").trigger("click");
                }
                alertLatch(response, background);
            },
            error: function(error) {
                console.log(error);
            },
            complete: function() {
                $(".loading").hide();
            }
        });
    });
}
const scriptOccupation = () => {
    $("#registerOccupation button").on("click", function() {
        let act = $(this).attr("id");
        $(".loading").show();
        if(act === "list") {
            $("#exhibition").load("occupation/list", function() {
                $(".loading").hide();
                $("#registerOccupation #edit, #registerOccupation #delete").on("click", function() {
                    let action = $(this).attr("id");
                    let id = $(this).attr("data-id");
                    let name = $(this).closest("tr").find("td:eq(0)").text();
                    if(action === "edit") {
                        $.ajax({
                            url: "occupation/edit",
                            type: "POST",
                            dataType: "html",
                            data: {
                                id
                            },
                            beforeSend: function() {
                                $(".loading").show();
                            },
                            success: function(response) {
                                $("#exhibition").html(response);
                                occupationAction();
                            },
                            error: function(error) {
                                console.log(error);
                            },
                            complete: function() {
                                $(".loading").hide();
                            }
                        });
                    } else if(action === "delete") {
                        const conf = modal.confirm({
                            title: "Exclusão de Função",
                            message: "Deseja realmente excluir a função <strong>" + name + "</strong>?"
                        });
                        conf.on("click", function() {
                            if($(this).val() == 0) {
                                return false;
                            }
                            $.ajax({
                                url: "occupation/delete/id/" + id,
                                type: "POST",
                                dataType: "JSON",
                                beforeSend: function() {
                                    $(".loading").show();
                                },
                                success: function(response) {
                                    background = "var(--cor-warning)";
                                    if(response.indexOf("success")) {
                                        background = "var(--cor-success)";
                                    }
                                    alertLatch(response, background);
                                    $("#registerOccupation #list").trigger("click");
                                },
                                error: function(error) {
                                    console.log(error);
                                },
                                complete: function() {
                                    $(".loading").hide();
                                }
                            });
                        });
                    }
                });
            });
        } else {
            $("#exhibition").load("occupation/register", function() {
                $(".loading").hide();
                occupationAction();
            });
        }
    });
    $("#registerOccupation #list").trigger("click");
}
