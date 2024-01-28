import AbstractService from "./abstractService.js";

export default class Membership extends AbstractService {
    save(formData) {
        return this.openFile({
            method: 'POST',
            url: 'membership/update',
            formData
        })

        if (saveData("membership/update", formData)) {
            alertLatch("Is need reload for update to the photo", "var(--cor-warning)")
            modal.close();
        }

        /** @return bool with file data */
        const saveData = function(link, data, msg = "Saving") {
            let success = false;
            $.ajax({
                url: link,
                type: "POST",
                dataType: "JSON",
                context: msg,
                processData: false,
                contentType: false,
                async: false,
                data: data,
                beforeSend: function() {
                    $("#mask_main").show();
                    loading.show({
                        text: msg
                    });
                },
                success: function(response) {
                    let background;
                    if(response.indexOf("success") !== -1) {
                        background = "var(--cor-success)";
                        success = true;
                    } else if(response.indexOf("danger") !== -1) {
                        background = "var(--cor-danger)";
                    } else {
                        background = "var(--cor-warning";
                    }
                    alertLatch(response, background);
                    if(success)$("#mask_main").hide();
                },
                error: function(error) {
                    alertLatch("Could not save change", "var(--cor-danger)");
                },
                complete: function() {
                    if($("#boxe_main").css("display") === "none")$("#mask_main").hide();
                    loading.hide();
                }
            });
            return success;
        };
    }
}
