<?php if (!empty($act) && $act === "list"): ?>
<fieldset class="fieldset p-3" >
    <legend>FUNÇÕES</legend>
    <table id="tabList" class="my-table">
        <thead>
            <tr>
                <th>NOME</th>
                <th>ATIVO</th>
                <th>EDITAR</th>
                <th>EXCLUIR</th>
            </tr>
        </thead>
        <tbody>
            <?php if (is_array($occupations)):
                foreach ($occupations as $occupation): ?>
                        <tr>
                            <td><?= $occupation->name ?></td>
                            <td><?= $occupation->active == 1 ? "SIM" : "NÃO"; ?></td>
                            <td id="edit" title="Edita" data-id="<?= $occupation->id ?>" ><i class="fa fa-pencil" ></i></td>
                            <td id="delete" title="Exclui" data-id="<?= $occupation->id ?>" ><i class="fa fa-times"></i></td>
                        </tr>
                <?php endforeach;
            endif ?>
        </tbody>
    </table>
</fieldset>
<?php else: ?>
<div>
    <form id="occupation-register" action="#" method="POST" class="form-horizontal">
        <fieldset class="fieldset">
            <legend>FUNÇÃO</legend>
            <div class="form-row mb-2">
                <div class="col-md">
                    <input name="id" type="hidden" value="<?= ($id ?? null) ?>" />
                    <label class="label" for="nome">Nome: </label><br>
                    <input id="nome" name="name" class="form-input" type="text" required="required" value="<?= ($name ?? null) ?>"/></div>
                <div class="col-md">
                    <label for="active" class="label mb-3">Ativo: &nbsp&nbsp</label><br>
                    <label class="label">sim </label><input class="form-radio" type="radio" name="active" value=1 <?= (isset($active) && $active == 1 ? "checked" : null) ?> />
                    <label class="label"> não </label><input type="radio" name="active" value=0 <?= (isset($active) && $active == "0" ? "checked" : null) ?> />
                </div><!-- col -->
            </div>
        </fieldset>
        <button type="submit" class="button save mr-1" style="float: right;"><?= (isset($name) ? "Gravar Alteração" : "Salvar") ?></button>
        <?php if (!isset($name)): ?>
        <button type="reset" class="button cancel mr-1" style="float: right;">Limpar</button>
        <?php endif ?>
    </form>
</div><!-- edit -->
<?php endif ?>
