const scriptDocumentation = () => {
    let documentation = $("#documentation #form-documentation");
    let buttonName;
    documentation.find("[type='file']").on("change", function() {
        documentation.find("button").attr("disabled",false);
    });
    documentation.find("button").on("click", function() {
        buttonName = $(this).text();
        if(buttonName === "Adicionar Novo") {
            documentation.find("table").append("<tr><td><input type='text' name='names[]' /></td><td><input type='text' name='descriptions[]' size='50'/></td><td><input type='file' name='files[]' /></td></tr>");
        }
    });
    documentation.on("submit", function(e) {
        e.preventDefault();
        if(buttonName === "Salvar") {
            let link = "documentation/save";
            let formData = new FormData(documentation[0]);
            if(saveData(link, formData)){
                documentation.find("button[type=reset]").trigger("click");
            }
        }
    });
    $("#documentation table.show tbody tr").on("click", function() {
        let id = $(this).attr("id");
        window.open("documentation/show/id/" + id);
    });
}
