const scriptDocumentation = () => {
    let validateFile = () => {
        let filesAdd = documentation.querySelectorAll("[type=file]")
        for(i of filesAdd) {
            if(i.files.length > 0) {
                if(i.files[0].size > 2000000) {
                    alertLatch("Document size above 2Mb", "var(--cor-warning)")
                    i.value = ""
                    return false
                }
                if(
                    i.files[0].type !== "image/jpeg" &&
                    i.files[0].type !== "image/png" &&
                    i.files[0].type !== "application/pdf"
                    ) {
                    alertLatch("Not allowed document type", "var(--cor-warning)")
                    i.value = ""
                    return false
                }
            }
        }
    }
    let btnName
    $("#documentation #form-documentation [type='file']").on("change", function() {
        validateFile()
        $("#documentation button").attr("disabled",false)
    })
    $("#documentation button").on("click", function() {
        btnName = $(this).val();
        if(btnName === "new") {
            $("#documentation table").append("<tr><td><input type='text' name='names[]' required/></td><td><input type='text' name='descriptions[]' required/></td><td><input type='file' name='files[]' required/></td></tr>").one("change", function() {
                validateFile()
            })
        } else if(btnName === "reset") {
            $("#documentation #form-documentation").trigger("reset")
        } else {
            let fields = documentation.querySelectorAll("[required]")
            for(i of fields) {
                i.style.background = "white"
                if(i.value === "") {
                    i.focus()
                    i.style.background = "pink"
                    alertLatch("The field required", "var(--cor-warning)")
                    return false
                }
            }
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
            } else {
                modal.show({
                    title: "Modo de Edição",
                    content: "documentation/edit/" +id,
                    buttons: "<button class='button save' value='save'>Alterar</button>"
                }).callback(function() {
                    $(buttons).find("button").on("click", function() {
                        let btnName = this.value
                        if(btnName === "save") {
                            let formData = new FormData(modal.content.find("#form-documentation")[0])
                            if(saveData("documentation/update", formData)) {
                                $(".content").load("documentation/init", function() {
                                    modal.close()
                                    scriptDocumentation()
                                })
                            }
                        }
                    })
                })
            }
        } else {
            window.open("documentation/show/id/" + id)
        }
    })
}
