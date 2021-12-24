<style>
    @media print {
        body * {
            visibility: hidden;
        }

        iframe body {
            visibility: visible;
        }

        .printable * {
            visibility: visible;
        }

        .noprintable{
            display: none;
            visibility: hidden;
        }
    }
</style>
<main id="document-view" class="printable">
    <iframe src="<?= $link ?>" width="100%" height="400px" frameBorder="0" ></iframe>
</main>
