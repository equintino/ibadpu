<style>
    .body {
        background: none;
    }

    #certificate table, #certificate #to {
        background: url("<?= theme('assets/img/logo_marcadagua.png') ?>") no-repeat center;
        background-size: 300px;
    }

    @media print {
        body * {
            visibility: hidden;
        }

        #certificate {
            position: fixed;
            top: 0;
            left: 0;
        }
    }
</style>
<div id="certificate" class="printable">
    <?php foreach($memberships  as $membership):
        $date = explode("-",$membership->baptism);
        $patern = "/^i.{1,5} b.{1,6} do amor de deus$/";
        if( preg_match($patern, mb_strtolower($membership->church_baptism, "UTF-8")) ): ?>
            <?php if($side != "false"): ?>
            <!-- Forehead -->
            <table data-id="<?= $membership->id ?>" widht="100%" border="0" cellspacing="0" title="Clique para ver o verso" data-side=true>
                <tr>
                    <td colspan="4" align="center" style="padding-top: 10px;"><img id="title-cert" src="<?= theme('assets/img/title.png') ?>" alt="" height="100px" /></td>
                </tr>
                <tr>
                    <td colspan="4" align="center" ><p style="margin-top: -10px">Certificamos Que</p></td>
                </tr>
                <tr>
                    <td colspan="4" align="center">
                        <p class="data"><?= abbreviationName(mb_strToLower($membership->name, "UTF-8")) ?></p>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" align="center">
                        <p>Filho(a) De</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" align="center">
                        <p><span class="data" ><?= abbreviationName(mb_strToLower($membership->father, "UTF-8"), "wallet") ?></span><span style="font-size: 1.3em; padding: 0 8px">&</span><span class="data"><?= abbreviationName(mb_strToLower($membership->mother, "UTF-8"), "wallet") ?></p>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" align="center">
                        <p class="base">Foi batizado em nome do Pai,do Filho e do Espírito Santo, conforme o mandamento do Senhor Jesus Cristto em Mateus 28.19</p>
                    </td>
                </tr>
                <tr>
                    <td width="43%" style="padding-left: 50px"><p>No Dia:</p></td>
                    <td></td>
                    <td></td>
                    <td align="center"><p>Foi Batizado(a) na:</p></td>
                </tr>
                <tr>
                    <td valign="top" style="padding-left: 50px"><span style="border: 3px solid #b20605; text-align: center; background: #d7bf9b; border-radius: 5px; padding: 4px; font-weight: bolder"> <?= $date[2] ?> / <?= $date[1] ?> / <?= $date[0] ?> </span></td>
                    <td></td>
                    <td></td>
                    <td style="padding-bottom: 20px" align="center"><img src="<?= theme("assets/img/nomeLogo.png") ?>" alt="" height="40px"/></td>
                </tr>
                <tr>
                    <td align="center" style="padding-bottom: 10px" ><p>__________________________<br>1° Secretário(a)</p></td>
                    <td width="30px"></td>
                    <td width="30px"></td>
                    <td align="center" style="padding-bottom: 10px" ><p>__________________________<br>Pr. Presidente</p></td>
                </tr>
            <table>
            <?php else: ?>
            <!-- towards -->
            <div id="to" title="Clique para ver a frente" data-id="<?= $membership->id ?>" data-side=false>
                <div>
                    <p><img src="<?= theme("assets/img/title_pacto.png") ?>" alt="" height="42px"/></p>
                    <p class="paragraph">Tendo sido levado, como cri, pelo Espírito de Deus a aceitar e confessar o Senhor Jesus Cristo, como meu único e suficiente Salvador, e tendo sido batizado sob a minha fé em nome do Pai, do Filho e do Espírito Santo, agora, na presença de Deus, dos anjos e desta congregação, muito solene e alegremente, comprometo-me buscar a minha caminhada cristã as seguintes virtudes:</p>
                    <p><img src="<?= theme("assets/img/virtudes.png") ?>" alt="" height="40px"/></p>
                </div>
            </div>
            <?php endif; ?>
        <?php else:
            // alertLatch("{$membership->name} foi batizado(a) na igreja {$membership->church_baptism}", "var(--cor-warning)") ?>
            <div data-id="<?= $membership->id ?>" class="pt-2 pb-2">
                <img src="<?= url("certificate/id/{$membership->certificate_id}") ?>" alt="" height="540px" />
            </div>
        <?php endif ?>
    <?php endforeach ?>
</div>
