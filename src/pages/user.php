<div id="user">
    <header class="header row form-inline">
        <div class="buttons" style="width: 100%; text-align: right">
            <button class="button btnAction" value="add">Adicionar</button>
            <!-- <button class="button btnAction" style="margin-right: 5px" value="list">Listar</button> -->
        </div>
    </header>
    <main id="exhibition" >
        <fieldset class="fieldset p-3" >
            <legend>LISTA DE USUÁRIOS</legend>
            <table id="tabList" class="my-table" width="100%" >
                <thead>
                    <tr>
                        <th></th>
                        <th>NOME</th>
                        <th>LOGIN</th>
                        <th>GRUPO</th>
                        <th>ATIVO</th>
                        <th>EDITAR</th>
                        <th>EXCLUIR</th>
                        <th>RESETAR SENHA</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if(isset($users)):
                        $login = $_SESSION["login"]->login;
                        foreach($users as $user):
                                $arrow = ($login === $user->login ? "<i class='fa fa-arrow-right' aria-hidden='true' ></i>" : null);
                                if($user->login !== "admin"): ?>
                            <tr <?= ($login !== $user->login ?: "style='background: #c3d2dd'") ?> >
                                <td><?= (!empty($arrow) ? $arrow : null) ?></td>
                                <td><?= $user->name ?></td>
                                <td><?= $user->login ?></td>
                                <td><?= (!empty($user->getGroup()) ? $user->getGroup()->name : null) ?></td>
                                <td><?= $user->active == 1 ? "SIM" : "NÃO"; ?></td>
                                <td title="Edita" data-id="<?= $user->id ?>" data="<?= $user->login ?>" ><i class="fa fa-pencil" ></i></td>
                                <td title="Exclui" data-id="<?= $user->id ?>" data="<?= $user->login ?>" ><i class="fa fa-times"></i></td>
                                <td title="Reseta" data-id="<?= $user->id ?>" data="<?= $user->login ?>" ><i class="fa fa-key "></i></td>
                            </tr>
                    <?php endif; endforeach;
                        endif ?>
                </tbody>
            </table>
        </fieldset>
    </main>
</div>
