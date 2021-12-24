<div id="proof" class="container mt-4">
    <fieldset class="fieldset">
        <form id="form-proof" method="POST" action="#" enctype="multipart/form-data" >
            <legend>INSERIR COMPROVANTES</legend>
            <label>Selecione o ano:</label>
            <select name="year">
                <option value=""></option>
                <?php foreach($years as $year): ?>
                <option value="<?= $year ?>"><?= $year ?></option>
                <?php endforeach ?>
            </select>
            <label>mês:</label>
            <select name="month"></select>
            <table class="my-table"></table>
            <button class="button btn-danger" disabled style="float: right">Salvar</button>
        </form>
    </fieldset>
</div>
