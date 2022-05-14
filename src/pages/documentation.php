<div id="documentation" class="container mt-4">
    <fieldset class="fieldset">
        <?php if($act !== "add"): ?>
        <legend>DOCUMENTOS CADASTRADOS</legend>
        <table class="my-table show">
            <thead>
                <tr><th>Nome</th><th>Descrição</th></tr>
            </thead>
            <tbody>
                <?php foreach($documentations as $documentation): ?>
                <tr id="<?= $documentation->id ?>"><td><?= $documentation->name ?></td><td><?= $documentation->description ?></td></tr>
                <?php endforeach ?>
            </tbody>
        </table>
        <?php else: ?>
        <legend>ADICIONAR DOCUMENTO</legend>
        <form id="form-documentation" method="POST" action="#" enctype="multipart/form-data" >
            <table class="my-table">
                <thead>
                    <tr><th>Nome</th><th>Descrição</th><th>Arquivo</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="names[]"  required/></td>
                        <td><input type="text" name="descriptions[]" required/></td>
                        <td><input type="file" name="files[]"  required/></td>
                    </tr>
                </tbody>
            </table>
        </form>
        <?php endif ?>
    </fieldset>
    <section>
        <button class="button btn-info" value="new" >Adicionar Novo</button>
        <button class="button btn-default" type="reset" value="reset" >Limpar</button>
        <button class="button btn-danger" disabled value="save" >Salvar</button>
    </section>
</div>
