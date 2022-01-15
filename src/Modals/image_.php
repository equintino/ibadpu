<style>
    @media print {
        body * {
            visibility: hidden;
        }

        #document-view iframe {
            visibility: visible;
            height: 1200px;
        }

        /* .printable * {
            visibility: visible;
        } */

        /* .noprintable{
            display: none;
            visibility: hidden;
        } */
    }
</style>
<span id="document-view" class="">
    <iframe src="<?= $link ?>" width="100%" height="500px" frameBorder="0" ></iframe>
</span>
