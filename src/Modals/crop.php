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
    <div class="p-2" style="margin-top: 20px">
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
    };
    imgFile.onchange = evt => {
        thumbImage(imgFile, imgCrop)
        $(imgCrop).Jcrop({
            aspectRatio: 138/152,
            onSelect: UpdateCrop,
            setSelect: [0,0,138,152]
        })
        inputFile.style.display = "none"
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
                const [file] = imgFile.files
                $.ajax({
                    url: "image/cropped",
                    type: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    // dataType: "script",
                    xhrFields:{
                        responseType: 'blob'
                    },
                    beforeSend: function() {

                    },
                    success: function(response) {
                        let url = window.URL || window.webkitURL
                        // return console.log(
                        //     response,
                        //     url.createObjectURL(response)
                        // )
                        let src = url.createObjectURL(response)
                        $("#thumb_image").attr("src", src)
                        // document.getElementById("imgInp").src = src
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
