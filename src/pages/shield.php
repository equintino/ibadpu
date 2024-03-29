<div id="shield" class="row">
    <div class="group col">
        <fieldset class="fieldset">
            <legend>GRUPOS</legend>
            <?php foreach($groups as $group): ?>
                <p class="btnAction <?= ($group->id === $group_id ? "active" : null) ?>"><?= $group->name ?></p>
            <?php endforeach ?>
        </fieldset>
        <button class="button save" style="float: right" value="add">Adicionar Grupo</button>
        <button class="button cancel mr-1" style="float: right; cursor: pointer" value="delete">Excluir Grupo</button>
    </div>
    <div class="middle col-1"></div>
    <div class="screen col">
        <fieldset class="fieldset">
            <legend>TELAS<span></span></legend>
            <?php foreach($screens as $screen): ?>
                <span class="mr-2"><i class="fa fa-times" style="color: red"></i> <?= $screen ?></span>
            <?php endforeach ?>
        </fieldset>
        <button class="button save" style="float: right" value="save">Gravar</button>
    </div>
</div>
