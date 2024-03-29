<!DOCTYPE html>
    <head>
        <title><?= ( $head["title"] ?? "System Name" ) ?></title>
        <meta charset="UTF-8">
        <link rel="shortcut icon" href="<?= theme("assets/img/logo.png") ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="<?= theme("assets/style.css") ?>" rel="stylesheet"/>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    </head>
    <body class="body">
        <header>
            <div id="top">
                <?php require __DIR__ . "/top.php"; ?>
            </div>
        </header>
        <div class="header2">
            <section class="loading">
                <img class="schedule" src="<?= $head["img"] ?>" alt="reading" height="50px"/>
                <p class="text-loading">Texto da ação "loading"</p>
            </section>

            <!-- Janelas -->
            <div id="mask_main"></div>
            <div id="mask2_main"></div>

            <section id="boxe_main" class="fadeInDown" >
                <div id="title"></div>
                <span id="button" class="close"><i class="fa fa-times-circle"></i></span>
                <span id="message"></span>
                <div id="content"></div>
                <div id="buttons" style="text-align: right"></div>
            </section>

            <section id="boxe2_main" class="fadeInDown" >
                <div id="title"></div>
                <span id="button" class="close"><i class="fa fa-times-circle"></i></span>
                <span id="message"></span>
                <div id="content"></div>
                <div id="buttons" style="text-align: right"></div>
            </section>

            <!-- dialogue box -->
            <section id="div_dialogue" >
                <div id="title" class="title"></div>
                <span id="message"></span>
                <div id="content"></div>
                <div id="buttons" style="text-align: right"></div>
            </section>

            <span id="alert"></span>

        </div><!-- header2 -->
        <div class="content"></div>

        <!-- bank report -->
        <section id='ajax' style="display: none; float: right; font-size: .9em">
            <div class="title">Relatório de Resposta do Banco de Dados</div>
            <table id='tabAjax' class='display'></table>
        </section>

        <section id="upArrow"><div style="text-align: center"><img src="<?= theme('assets/img/logo.png') ?>" alt="logo" height="40px"><br>Topo</div></section>

        <script>var page = "<?= ($page ?? null) ?>";</script>
        <script type="text/javascript" src="<?= theme("assets/scripts.js") ?>" ></script>
        <script type="module" src="./shared/scripts/src/index.js" ></script>
    </body>
</html>
