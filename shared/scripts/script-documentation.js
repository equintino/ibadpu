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
    });
    $("#documentation #form-documentation").on("submit", function(e) {
        e.preventDefault()
        let documentation = $("#documentation #form-documentation")
        let link = "documentation/save"
        let formData = new FormData(documentation[0])
        if(saveData(link, formData)){
            documentation.find("button[type=reset]").trigger("click")
        }
    });
    $("#documentation table.show tbody tr").on("click", function() {
        let id = $(this).attr("id");
        window.open("documentation/show/id/" + id);
    });
}
