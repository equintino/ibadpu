const occupationAction = () => {
    $("#registerOccupation #occupation-register").on("submit", function(e) {
        e.preventDefault();
        let that = $(this);
        let formData = new FormData($(this)[0]);
        if(saveData("occupation/save", formData)) {
            that.find("[type=reset]").trigger("click");
        }
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
                            if(saveData("occupation/delete/id/" + id, [])) {
                                $("#registerOccupation #list").trigger("click");
                            }
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
