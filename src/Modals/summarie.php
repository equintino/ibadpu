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
            <?php foreach($outputDescription as $row): ?>
                <tr>
                    <td><?= $row[0] ?></td>
                    <td></td>
                    <td align="right">- <?= $row[1] ?></td>
                </tr>
            <?php endforeach ?>
        </tr>
    </tbody>
    <tfoot style="font-weight: bolder">
        <tr style="border: 1px solid white">
            <td align="right" style="color: white; background: var(--cor-primary)">TOTAIS</td>
            <td align="right" style="color: white; background: var(--cor-primary)"><?= $depositTotal ?></td>
            <td align="right" style="color: white; background: var(--cor-primary)">- <?= $outputTotal ?></td>
        </tr>
        <tr>
            <td align="right" colspan="2" style="color: white; background: var(--cor-primary)">SALDO ACUMULADO</td>
            <td align="right" style="color: white; background: var(--cor-primary)">R$ <?= $totalBalance ?></td>
        </tr>
    </tfoot>
</table>
