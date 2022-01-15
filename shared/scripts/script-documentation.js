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
        // let img = "documentation/show";
        // modal.show({
        //     content: img,
        //     params: {
        //         id: id
        //     },
        //     buttons: "<button class='button btn-default mr-1'>Fechar</button><button class='button btn-danger'>Visualizar Impressão</button>",
        //     callback: function() {
        //         $("#boxe_main button").on("click", function() {
        //             if($(this).text() === "Fechar") {
        //                 $("#boxe_main #content").html("");
        //                 $("#boxe_main, #mask_main").hide();
        //             } else {
        //                 /** Open impression preview */
        //                 // let dataPost = {
        //                 //     "year": getYearMonthDay(date, 0),
        //                 //     "month": getYearMonthDay(date, 1)
        //                 // };
        //                 // modal.new({
        //                 //     url: "impression",
        //                 //     post: dataPost,
        //                 //     box: "box_print",
        //                 //     buttons: "<button class='button btn-default mr-1'>Fechar</button><button class='button btn-danger'>Imprimir</button>",
        //                 //     callback: function() {
        //                 //         $("#mask_main").css("z-index", "5");
        //                 //         $("#box_print button").on("click", function() {
        //                 //             if($(this).text() === "Imprimir") {
        //                 //                 window.print();
        //                 //             }
        //                 //             $("#box_print").remove();
        //                 //             $("#mask_main").css("z-index", "4");
        //                 //         });
        //                 //     }
        //                 // });
        //                 window.print();
        //             }
        //         });
        //     }
        // });
    });
}
