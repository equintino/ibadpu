<style>
    #birthday {
        background: url("<?= theme('assets/img/pink_circle.png') ?>");
        padding: 20px 0;
    }

    #birthday h2 {
        text-align: center;
        font-size: 1.5em;
        font-weight: bolder;
        color: #6a2509;
    }

    #birthday main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 50px;
    }

    @media screen and (max-width: 600px) {
        #birthday main {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    #birthday main div {
        border: 1px solid gray;
        border-radius: 5px;
        margin: 5px;
        justify-self: stretch;
        text-align: center;
        background: white;
    }

    #birthday main div section {
        font-size: 1.2em;
        background: gray;
        color: white;
        border-radius: 5px;
    }
</style>
<div id="birthday">
    <h2>PARABÉNS!!!</h2>
    <main>
        <div>
            <section>Janeiro</section>
            <?php foreach($birthdays["january"] as $january): ?>
            <div><?= mb_strtoupper($january->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Fevereiro</section>
            <?php foreach($birthdays["february"] as $february): ?>
            <div><?= mb_strtoupper($february->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Março</section>
            <?php foreach($birthdays["march"] as $march): ?>
            <div><?= mb_strtoupper($march->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Abril</section>
            <?php foreach($birthdays["abril"] as $abril): ?>
            <div><?= mb_strtoupper($abril->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Maio</section>
            <?php foreach($birthdays["mai"] as $mai): ?>
            <div><?= mb_strtoupper($mai->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Junho</section>
            <?php foreach($birthdays["june"] as $june): ?>
            <div><?= mb_strtoupper($june->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Julho</section>
            <?php foreach($birthdays["july"] as $july): ?>
            <div><?= mb_strtoupper($july->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Agosto</section>
            <?php foreach($birthdays["august"] as $august): ?>
            <div><?= mb_strtoupper($august->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Setembro</section>
            <?php foreach($birthdays["september"] as $september): ?>
            <div><?= mb_strtoupper($september->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Outubro</section>
            <?php foreach($birthdays["october"] as $october): ?>
            <div><?= mb_strtoupper($october->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Novembro</section>
            <?php foreach($birthdays["november"] as $november): ?>
            <div><?= mb_strtoupper($november->name) ?></div>
            <?php endforeach ?>
        </div>
        <div>
            <section>Dezembro</section>
            <?php foreach($birthdays["dezember"] as $dezember): ?>
            <div><?= mb_strtoupper($dezember->name) ?></div>
            <?php endforeach ?>
        </div>
    </main>
</div>
