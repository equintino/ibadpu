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

    #birthday main div > span {
        color: red;
        font-weight: bolder;
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
        <?php foreach($months as $key => $month): ?>
        <div>
            <section><?= $key ?> (<?= count($birthdays[$month]) ?>)</section>
            <?php foreach($birthdays[$month] as $membership): ?>
            <div><span><?= explode("-",$membership->birth_date)[2] ?></span> - <?= mb_strtoupper($membership->name) ?></div>
            <?php endforeach ?>
        </div>
        <?php endforeach ?>
    </main>
</div>
