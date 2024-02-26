<div id="edit" >
    <form id="login-register" action="#" method="POST" class="form-horizontal">
        <div class="form-row mb-2">
            <div class="col-md">
                <input name="id" type="hidden" value="<?= (isset($user) ? $user->id : null) ?>" />
                <label class="label" for="name">Nome Completo: </label><br>
                <input id="name" name="name" class="form-input" type="text" required="required"
                    value="<?= (isset($user) ? $user->name : null) ?>"/></div>
            <div class="col-md">
                <label class="label" for="email">Email:</label><br>
                <input type="text" class="form-input" id="email"
                    name="email" required="required" style="text-transform: lowercase"
                    value="<?= (isset($user) ? $user->email : null) ?>"/>
            </div><!-- col -->
        </div><!-- row -->
        <?php if(!isset($user)): ?>
            <div class="form-row mb-2">
                <div class="col-md">
                    <label for="login" class="label">Login:</label><br>
                    <input type="text" class="form-input" id="login" name="login"
                        value="<?= ((isset($user) ? $user->login : null)) ?>" required="required"/></div><!-- col -->
                <div class="col-md">
                    <label for="password" class="label">Senha: </label><br>
                    <input type="password" class="form-input" id="password" name="password"
                    <?= (isset($user)  ? "disabled" : ("required='required'")) ?> /></div><!-- col -->
                <div class="col-md">
                    <label for="confPassword" class="label">Confirme: </label><br>
                    <input type="password" class="form-input" id="confPassword"
                        name="confPassword" <?= (isset($user) ?
                            "disabled" : ("required='required'")) ?>/></div><!-- col -->
            </div><!-- row -->
        <?php else: ?>
            <input type="hidden" name="login" value="<?= $user->login ?>" ?>
        <?php endif ?>
        <div class="row mr-4" >
            <div class="col">
                <label for="occupation" class="label">Cargo: </label><br>
                <input type="text" class="form-input" id="occupation" name="occupation"
                    value="<?= (isset($user) ? $user->occupation : null) ?>"/></div>
            <div class="col">
                <label for="grupo" class="label" >Grupo:</label><br>
                <select name="group_id" class="form-input" required="required" >
                    <option value=""></option>
                    <?php foreach($groups as $group): ?>
                        <option value="<?= $group->id ?>"
                            <?= (isset($user) && $user->group_id ==  $group->id) ?
                                "selected" : null ?>><?= $group->name ?></option>
                    <?php endforeach ?>
                </select>
            </div>
            <div class="col-md">
                <label for="visivel" class="label mb-3">Ativo: &nbsp&nbsp</label><br/>
                <label class="label" style="margin-top: -36px">Sim </label>
                <input style="width: auto" type="radio" name="active" value='1' <?= (
                    isset($user) && $user->active == 1 ? "checked" : '') ?> />
                <label class="label" style="margin: -27px 0 0 5px"> Não </label>
                <input style="width: auto" type="radio" name="active" value='0' <?= (
                    isset($user) && $user->active == "0" ? "checked" : '') ?> />
            </div>
        </div>
    </form>
</div>
