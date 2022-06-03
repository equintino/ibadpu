<style>
    #img {
        width: 90%;
        overflow: scroll;
        height: 90%;
    }
</style>
<div id="crop">
    <form id="form_crop" class="ml-4" action="image/cropped" method="post" enctype="multipart/form-data">
        <input type="hidden" id="x" name="x" />
        <input type="hidden" id="y" name="y" />
        <input type="hidden" id="w" name="w" />
        <input type="hidden" id="h" name="h" />
        <span id="inputFile"><input type="file" name="image" id="imgFile" /></span>
        <button class="button" value="cancel">Cancelar</button>
        <button class="button save" type="submit" value="crop" >Recortar Imagem</button>
    </form>
    <div id="img" class="p-2" style="margin-top: 20px">
        <img src="#" id="imgCrop" alt=""/>
    </div>
</div>
<script language="Javascript">
    function UpdateCrop(c)
    {
        $('#x').val(c.x);
        $('#y').val(c.y);
        $('#w').val(c.w);
        $('#h').val(c.h);
    }
    var photo_id;
    imgFile.onchange = evt => {
        thumbImage(imgFile, imgCrop)
        $(imgCrop).Jcrop({
            aspectRatio: 138/152,
            onSelect: UpdateCrop,
            setSelect: [0,0,138,152]
        })
        inputFile.style.display = "none"

        /** to get last photo id */
        photo_id = cadastro.querySelector("input[name=photo_id]").value
        if(photo_id === "") {
            $.ajax({
                url: "image/lastid",
                type: "POST",
                dataType: "JSON",
                success: function(response) {
                    let lastId = parseInt(response)
                    cadastro.querySelector("input[name=photo_id]").value = lastId + 1
                }
            })
        }
    }
    form_crop.onsubmit = evt => {
        evt.preventDefault()
    }
    form_crop.onclick = evt => {
        let btnName = evt.target.value
        let link = form_crop.action.split("/").pop()
        if(btnName === "cancel") {
            modal.mask.trigger("click")
        } else if(btnName === "crop") {
            let hasFile = imgCrop.src.split("/").pop()
            if(hasFile !== "#") {
                let formData = new FormData(form_crop)
                formData.append("id", photo_id)
                $.ajax({
                    url: "image/cropped",
                    type: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    xhrFields:{
                        responseType: 'blob'
                    },
                    beforeSend: function() {

                    },
                    success: function(response) {
                        let url = window.URL || window.webkitURL
                        let src = url.createObjectURL(response)
                        $("#thumb_image").attr("src", src)
                        modal.mask.trigger("click")
                    },
                    error: function(error) {
                        console.log(error)
                    },
                    complete: function() {

                    }
                })
            } else {
                alertLatch("There are't file selected", "var(--cor-warning)")
            }
        }
    }
</script>
