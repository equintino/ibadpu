<style>
    @media (min-width: 600px) {
        #content {
            /* width: 60%;
            margin: 20px auto;
            padding: 20px 40px 40px; */
        }
    }
    #frame {
        border: 1px solid #ccc;
        padding: 5px;
        width: 138px;
        margin: 0 auto;
    }
    #frame > img {
        display: block;
    }
    #controls {
        display: block;
        text-align: center;
    }
    #controls a {
        padding: 0 5%;
        height: 50px;
        line-height: 50px;
        font-size: 1em;
        font-weight: 300;
        color: #888;
    }
    #controls a:hover {
        color: #000;
        text-decoration: none;
    }
    .hidden {
        display: none !important;
    }
</style>
<div id="crop">
    <ul id='data' class='hidden'>
      <div class='column'>
        <li>x: <span id='x'></span></li>
        <li>y: <span id='y'></span></li>
      </div>
      <div class='column'>
        <li>width:  <span id='w'></span></li>
        <li>height: <span id='h'></span></li>
      </div>
      <div class='column'>
        scale: <span id='scale'></span>
        angle: <span id='angle'></span>
      </div>
    </ul>
    <span id='controls' class='hidden'>
      <a href='#' id='zoom_out'     title='Zoom out'><i class='fa fa-search-minus'></i></a>
      <a href='#' id='fit'          title='Fit image'><i class='fa fa-arrows-alt'></i></a>
      <a href='#' id='zoom_in'      title='Zoom in'><i class='fa fa-search-plus'></i></a>
    </span>
    <div id="frame">
        <img src="#" id="imgCrop" alt="" />
    </div>
    <form id="form_crop" class="ml-4" action="image/cropped" method="post" enctype="multipart/form-data">
        <input type="hidden" name="x" />
        <input type="hidden" name="y" />
        <input type="hidden" name="w" />
        <input type="hidden" name="h" />
        <span id="inputFile"><input type="file" name="image" id="imgFile" /></span>
        <button class="button" value="cancel">Cancelar</button>
        <button class="button save" type="submit" value="crop" >Recortar Imagem</button>
    </form>
</div>
<script language="Javascript">
    // function UpdateCrop(c) {
    //     $('#x').val(c.x);
    //     $('#y').val(c.y);
    //     $('#w').val(c.w);
    //     $('#h').val(c.h);
    // }

    /** guillotine */
    var picture = $('#imgCrop')
    var camelize = function() {
        var regex = /[\W_]+(.)/g
        var replacer = function (match, submatch) { return submatch.toUpperCase() }
        return function (str) { return str.replace(regex, replacer) }
    }()

    var showData = function (data) {
        data.scale = parseFloat(data.scale.toFixed(4))
        for(var k in data) { $('#'+k).html(data[k]) }
    }

    var updateData = function (data) {
        let wScale = parseFloat(data.w) / parseFloat(data.scale)
        let hScale = parseFloat(data.h) / parseFloat(data.scale)
        for(var pair of form_crop.children) {
            if(pair.name === "x")pair.value = data.x
            if(pair.name === "y")pair.value = data.y
            if(pair.name === "h")pair.value = hScale
            if(pair.name === "w")pair.value = wScale
        }
    }

    picture.on('load', function() {
        picture.guillotine({ eventOnChange: 'guillotinechange' })
        picture.guillotine('fit')
        for (var i=0; i<5; i++) { picture.guillotine('zoomIn') }
        updateData(picture.guillotine('getData'))

        // Show controls and data
        $('#controls').removeClass('hidden')
        showData( picture.guillotine('getData') )

        // Bind actions
        $('#controls a').click(function(e) {
            e.preventDefault()
            action = camelize(this.id)
            picture.guillotine(action)
        })

        // Update data on change
        picture.on('guillotinechange', function(e, data, action) {
            showData(data)
            updateData(data)
        })
    })

    var photo_id;
    imgFile.onchange = evt => {
        thumbImage(imgFile, imgCrop)
        // $(imgCrop).Jcrop({
        //     aspectRatio: 138/152,
        //     onSelect: UpdateCrop,
        //     setSelect: [0,0,138,152],
        //     allowSelect: true,
        //     allowMove: true,
        //     allowResize: true,
        //     fixedSupport: true,
        // }).css("width","100%")
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
