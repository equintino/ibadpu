<div  id="registerOccupation">
    <header class="header row mr-0 form-inline">
        <div class="col"></div>
        <div class="col-2 buttons">
            <button class="button btnAction mt-1 mr-1" style="float: right" id="add">Adicionar</button>
        </div>
    </header>
    <main id="exhibition" >
    <fieldset class="fieldset p-3" >
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
    </main>
</div>
