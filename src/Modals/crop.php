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
        width: 100%;
        margin: 0 auto;
        overflow: scroll;
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
    <div id="frame">
        <!-- <img src="#" id="imgCrop" alt="" width="138" /> -->
        <img src="#" id="imgCrop" alt="" />
    </div>
    <form id="form_crop" class="ml-4 pb-2" action="image/cropped" method="post" enctype="multipart/form-data">
        <input type="hidden" name="x" />
        <input type="hidden" name="y" />
        <input type="hidden" name="w" />
        <input type="hidden" name="h" />
        <span id="inputFile"><input type="file" name="image" id="imgFile" /></span>
    </form>
</div>
<script language="Javascript">
    function UpdateCrop(c) {
        $('[name=x]').val(c.x);
        $('[name=y]').val(c.y);
        $('[name=w]').val(c.w);
        $('[name=h]').val(c.h);
    }

    var photo_id;
    imgFile.onchange = evt => {
        thumbImage(imgFile, imgCrop)
        $(imgCrop).Jcrop({
            // aspectRatio: 138/152,
            onSelect: UpdateCrop,
            setSelect: [0,0,138,152],
            allowMove: true,
            touchSupport: true,
            allowSelect: true,
            allowResize: false,
            fixedSupport: true
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
</script>
