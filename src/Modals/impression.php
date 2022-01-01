<style>
    .summarie {
        visibility: visible;
        background-size: 500px;
        width: 400px;
        height: 550px;
    }

    .my-table {
        position: relative;
        margin: -650px 30%;
        background: white;
    }

    .signature {
        visibility: visible;
        position: relative;
        top: 700px;
        left: 25px;
        width: 700px;
    }

    .foot {
        visibility: visible;
        position: relative;
        top: 800px;
        text-align: center;
        width: 700px;
        font-weight: bolder;
    }

    @media print {
        body * {
            visibility: hidden;
        }

        .water-mark {
            visibility: visible;
            position: absolute;
            top: -50px;
            margin-left: -300px;
            width: 1100px;
            height: 1500px;
            background: white;
            z-index: -1;
        }

        #printable * {
            visibility: visible;
        }

        .my-table {
            visibility: visible;
            position: absolute;
            margin: 250px auto;
            width: 500px;
        }

        .signature {
            visibility: visible;
            position: absolute;
            top: 1150px;
            left: -50px;
            width: 700px;
            z-index: 2;
        }

        .foot {
            visibility: visible;
            position: absolute;
            top: 1300px;
            left: -90px;
        }

        .noprintable{
            display: none;
            visibility: hidden;
        }
    }
</style>
<div id="printable" class="summarie">
    <img class="water-mark" src="<?= theme("assets/img/timbrado.png") ?>" alt="" />
    <table class="my-table" >
        <thead>
            <tr style="background: var(--cor-primary); text-align: center"><th colspan="3" style="color: white; font-size: .9em">RELATÓRIO MENSAL DE <?= $month ?> DE <?= $year ?></th></tr>
            <tr>
                <?php foreach($titles as $title): ?>
                    <th style="text-align: center"><?= $title ?></th>
                <?php endforeach ?>
            </tr>
        </thead>
        <tbody>
            <tr>
                <tr>
                    <td>DÍZIMOS</td>
                    <td align="right"><?= $titheTotal ?></td>
                    <td></td>
                </tr>
                <tr>
                    <td>OFERTAS</td>
                    <td align="right"><?= $offerTotal ?></td>
                    <td></td>
                </tr>
                <?php if(!empty($outputDescription)):
                        foreach($outputDescription as $row): ?>
                            <tr>
                                <td><?= $row[0] ?></td>
                                <td></td>
                                <td align="right">- <?= $row[1] ?></td>
                            </tr>
                <?php  endforeach;
                    endif ?>
            </tr>
        </tbody>
        <tfoot style="font-weight: bolder">
            <tr style="border: 1px solid white">
                <td align="right" style="color: white; background: var(--cor-primary)">TOTAIS</td>
                <td align="right" style="color: white; background: var(--cor-primary)"><?= ($depositTotal ?? null) ?></td>
                <td align="right" style="color: white; background: var(--cor-primary)">- <?= ($outputTotal ?? null) ?></td>
            </tr>
            <tr>
                <td align="right" colspan="2" style="color: white; background: var(--cor-primary)">SALDO ACUMULADO</td>
                <td align="right" style="color: white; background: var(--cor-primary)">R$ <?= ($totalBalance ?? null) ?></td>
            </tr>
        </tfoot>
    </table>
    <div class="signature">
        <div style="text-align: center; float: left">
            <span><img src="<?= theme("assets/img/RMon.png") ?>" alt="" width="50px" height="50px" style="margin-bottom: -10px" /></span><br>
            <span>Mônica Cristina Peixoto Quintino<br>
            1a Tesoureira</span>
        </div>

        <div style="text-align: center">
            <span><img src="<?= theme("assets/img/REddy.png") ?>" alt="" width="50px" height="50px" style="margin-bottom: -10px" /></span><br>
            <span">Edmilson Messias Quintino<br>
            Pastor Presidente</span>
        </div>
    </div>

    <div class="foot" style="text-aligm: center">Rua da Paz, 11 - Parque Uniao - Bonsucesso / RJ - CEP 21044-430<br>CNPJ 20061.890/0001-59</div>
</div>
