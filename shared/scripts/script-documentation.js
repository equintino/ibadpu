const scriptDocumentation = () => {
    let btnName
    $("#documentation #form-documentation [type='file']").on("change", function() {
        $("#documentation button").attr("disabled",false)
    })
    $("#documentation button").on("click", function() {
        btnName = $(this).val();
        if(btnName === "new") {
            $("#documentation table").append("<tr><td><input type='text' name='names[]' /></td><td><input type='text' name='descriptions[]' /></td><td><input type='file' name='files[]' /></td></tr>");
        } else if(btnName === "reset") {
            $("#documentation #form-documentation").trigger("reset")
        } else {
            $("#documentation #form-documentation").trigger("submit")
        }
    })
    $("#documentation #form-documentation").on("submit", function(e) {
        e.preventDefault()
        let documentation = $("#documentation #form-documentation")
        let link = "documentation/save"
        let formData = new FormData(documentation[0])
        if(saveData(link, formData)){
            documentation.closest("#documentation").find("section button[type=reset]").trigger("click")
        }
    })
    $("#documentation table.show tbody tr").on("click", function(e) {
        let id = $(this).attr("id")
        if(typeof(e.target.parentElement.attributes["data-action"]) !== "undefined") {
            let action = e.target.parentElement.attributes["data-action"].value
            let description = e.target.parentElement.parentElement.children[1].textContent
            if(action === "delete") {
                modal.confirm({
                    title: "Deseja realmente excluir este documento?",
                    message: description,
                    buttons: "<button class='button cancel' value='close'>NÃO</button><button class='button save' value='delete'>SIM</button>"
                }).on("click", function(e) {
                    if(e.target.value === "delete") {
                        if(saveData("documentation/delete/id/" + id, id)) {
                            $(".content").load("documentation/init", function() {
                                scriptDocumentation()
                            })
                        }
                    }
                })
            }
        } else {
            window.open("documentation/show/id/" + id)
        }
    })
}
