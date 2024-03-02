<div id="documentation" class="container mt-4">
    <fieldset class="fieldset">
        <?php if($act !== "add"): ?>
        <section id='list'>
            <table class="my-table show">
                <thead>
                    <tr><th>Nome</th><th>Descrição</th></tr>
                </thead>
                <tbody>
                    <?php foreach ($documentations as $documentation): ?>
                    <tr id="<?= $documentation->id ?>">
                        <td><?= $documentation->name ?></td>
                        <td><?= $documentation->description ?></td>
                        <td data-action="edit"><i class="fa fa-pencil" ></i></td>
                        <td data-action="delete"><i class="fa fa-times" ></i></td>
                    </tr>
                    <?php endforeach ?>
                </tbody>
            </table>
        </section>
        <?php else: ?>
        <section id='add'>
            <form id="form-documentation" method="POST" action="documentation/save" enctype="multipart/form-data" >
                <table class="my-table">
                    <thead>
                        <tr><th>Nome</th><th>Descrição</th><th>Arquivo</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" name="names[]"  required/></td>
                            <td><input type="text" name="descriptions[]" required/></td>
                            <td><input type="file" name="files[]" id="doc"  required/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        <section>
        <?php endif ?>
    </fieldset>
    <?php if($act === "add"): ?>
    <section>
        <button class="button btn-default" type="reset" value="reset" >Limpar</button>
        <button class="button btn-danger" disabled value="save" >Salvar</button>
    </section>
    <?php endif ?>
    <section style="text-align: center; margin-top: 10px">
        <img src="" alt="" id="preview" style="border-radius: 7px; width: 200px"/>
    </section>
</div>
