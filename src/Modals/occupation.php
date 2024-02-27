<div>
    <form id="occupation-register" action="#" method="POST" class="form-horizontal">
        <div class="form-row mb-2">
            <div class="col-md">
                <input name="id" type="hidden" value="<?= ($id ?? null) ?>" />
                <label class="label" for="nome">Nome: </label><br>
                <input id="nome" name="name" class="form-input"
                    type="text" required="required" value="<?= ($name ?? null) ?>"/></div>
            <div class="col-md">
                <label for="active" class="label mb-3">Ativo: &nbsp&nbsp</label><br>
                <label class="label" style="margin-top: -36px">sim </label>
                <input style="width: auto" type="radio" name="active" value=1
                    <?= (isset($active) && $active == 1 ? "checked" : null) ?> />
                <label class="label" style="margin: -27px 0 0 5px"> não </label>
                    <input style="width: auto" type="radio" name="active" value=0
                        <?= (isset($active) && $active == "0" ? "checked" : null) ?> />
            </div>
        </div>
    </form>
</div>
