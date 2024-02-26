<div id="documentation-edit" class="container mt-4">
    <form id="form-documentation" method="POST" action="#" enctype="multipart/form-data" >
        <input type="hidden" name="id" value="<?= $documentation->id ?>"/>
        <table class="my-table">
            <thead>
                <tr><th>Nome</th><th>Descrição</th><th>Arquivo</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" name="name" value="<?= $documentation->name ?>"  required/></td>
                    <td><input type="text" name="description" value="<?= $documentation->description ?>" required/></td>
                    <td><input type="file" name="file" required/></td>
                </tr>
            </tbody>
        </table>
    </form>
</div>
