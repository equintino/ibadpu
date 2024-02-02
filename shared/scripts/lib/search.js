export default class Search {
    constructor() {
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
        })
    }
}
