<style>
    #wallet fieldset {
        background: url("<?= theme('assets/img/logo_marcadagua.png') ?>") no-repeat center;
    }
    @media print {
        body * {
            visibility: hidden;
        }

        #wallet {
            position: fixed;
            top: 0;
            left: 0;
        }

        .noprint {
            visibility: hidden;
        }

        .printable * {
            visibility: visible;
        }
    }

    @page {
        size: 21.0cm 29.7cm portrait; /* a4 paper. */
    }
</style>
<div id="wallet" class="printable">
    <?php
        $memberships = ($memberships ?? []);
        foreach($memberships as $membership): ?>
    <fieldset class="mb-1">
        <table border="0" id="tab-wallet" width="100%">
            <tr>
                <td rowspan="3" class="photo"><img src="<?= url("image/id/{$membership->photo_id}") ?>" alt="" /></td>
                <td rowspan="1" colspan="3" valign="bottom" class="nameLogo" ><img src="<?= theme("assets/img/nomeLogo.png") ?>" alt=""/></td>
                <td style="padding-left: 2px" rowspan="12"></td>
                <td class="divisor-right" rowspan="12"></td>
                <td class="label" align="right" colspan="2" rowspan="2" >Endereço: </td>
                <td class="dataAddress" colspan="4" rowspan="2" ><div><?= "{$membership->type} {$membership->address}, {$membership->number} " . ($membership->complement ? "({$membership->complement})" : null) . " - {$membership->municipality} - {$membership->neighborhood}/{$membership->UF}" ?></div></td>
                <td rowspan="12"></td>
            </tr>
            <tr>
                <td colspan="3" class="address" valign="top">Rua da Paz, 11 - Parque União - Bonsucesso</td>
            </tr>
            <tr>
                <td class="label" align="right" colspan="2">Registro:</td>
                <td class="data" rowspan="1" colspan="1" align="center"><div><?= $membership->register ?></div></td>
                <td class="label" rowspan="2" colspan="6" align="center" valign="bottom" >Só será válida com o visto do pastor presidente</td>
            </tr>
            <tr></tr>
            <tr>
                <td class="label" align="right">Nome: </td>
                <td class="data" colspan="3"><div><?= $membership->name ?></div></td>
                <td class="data" rowspan="2"></td>
                <td class="data edge" rowspan="2"></td>
                <td class="data edge" rowspan="2"></td>
                <td class="data edge" rowspan="2"></td>
                <td class="data edge" rowspan="2"></td>
                <td></td>
            </tr>
            <tr>
                <td class="label" align="right">Filiação: </td>
                <td class="data" colspan="1"><div><?= abbreviationName($membership->father, "wallet") ?></div></td>
                <td class="data" colspan="2"><div><?= abbreviationName($membership->mother, "wallet") ?></div></td>
            </tr>
            <tr>
                <td></td>
                <td valign="bottom" align="center" class="label" colspan="1">Nascimento: </td>
                <td valign="bottom" align="center" class="label" colspan="2">Estado Civel: </td>
                <td style="width: 0px"></td>
                <td class="label year" valign="top" align="center" width=""><?= $year1 ?></td>
                <td class="label year" valign="top" align="center" width="50%"><?= $year2 ?></td>
                <td class="label year" valign="top" align="center"><?= $year3 ?></td>
                <td class="label year" valign="top" align="center"><?= $year4 ?></td>
                <td style="width: 0px"></td>
            </tr>
            <tr>
                <td></td>
                <td colspan="1" class="data"><div><?= dateFormat($membership->birth_date) ?></div></td>
                <td colspan="2" class="data"><div><?= $membership->marital_status ?></div></td>
                <td class="label text" colspan="6" rowspan="2" align="center" >"Se o exemplo dos fiéis, na palavra, no trato, no amor, no espírito, na fé na pureza." I Tm 4.12</td>
            </tr>
            <tr>
                <td></td>
                <td valign="bottom" align="center" class="label" colspan="1">Admissão: </td>
                <td valign="bottom" align="center" class="label" colspan="2">Batismo: </td>
            </tr>
            <tr>
                <td></td>
                <td colspan="1" class="data"><div><?= dateFormat($membership->entrance) ?></div></td>
                <td colspan="2" class="data"><div><?= dateFormat($membership->baptism) ?></div></td>
                <td class="signature" colspan="3" valign="bottom"></td>
                <td class="signature" colspan="3" valign="bottom"></td>
            </tr>
            <tr>
                <td class="label" align="right">Função: </td>
                <td class="data" colspan="1"><div><?= ($membership->occupation_id ? $occupation->load($membership->occupation_id)->name : null) ?></div></td>
                <td class="label" align="right">RG: </td>
                <td class="data" colspan="1"><div><?= $membership->rg ?></div></td>
                <td class="label" colspan="3" valign="top" align="center">_____________________<br>Portador</td>
                <td class="label" colspan="3" valign="top" align="center" style="width: 100px">______________________<br>Pr. Presidente</td>
            </tr>
        </table>
    </fieldset>
    <?php endforeach ?>
</div>
