<div id="new-moviment">
    <section class="side-left" >
        <button class="button btn-info" type="button" value="preview">Pré-visualizar</button>
        <button class="button btn-success" type="button" value="conclude" >Concluir</button>
    </section>
    <section class="midle">
        <form enctype="multipart/form-data" id="cadastro" action="#" method="POST" >
        <table id="tab-form-moviment">
            <caption>MÊS DE <?= ($month ?? null) ?> DE <?= ($year ?? null) ?><caption>
            <tr>
                <td align="right" >DIA: </td><td><input autofocus required type="text" name="day" size="1" maxlength="2"/></td>
            </tr>
            <tr>
                <td align="right" class="pl-4">MOVIMENTAÇÃO: </td>
                <td>
                    <select required name="in_out" >
                        <option></option>
                        <option value="deposit">ENTRADA</option>
                        <option value="output">SAÍDA</option>
                    </select>
                </td>
                <td>
                    <input type="hidden" name="month" value="<?= $month ?? null ?>" />
                    <input type="hidden" name="year" value="<?= $year ?? null ?>" />
                    <span id="type" >
                        <input type="radio" name="tithe_offer" value="diz"/>Dízimo
                        <input type="radio" name="tithe_offer" value="ofe"/>Oferta
                    </span>
                    <span id="proof">
                        <input multiple="multiple" type="file" name="proof" />
                    </span>
                </td>
            </tr>
            <tr>
                <td align="right">DESCRIÇÃO: </td>
                <td id="description" colspan="2"  class="pr-4"><input required type="text" name="description" size="50" /></td>
            </tr>
            <tr>
                <td align="right">VALOR: </td>
                <td><input required type="text" name="value" size="15" /></td>
            </tr>
        </table>
            <div class="buttons">
                <button class="button btn-default" type="reset" value="limpa">Limpar</button>
                <button class="button btn-danger" type="submit" value="salva">Adcionar</button>
            </div>
        </form>
    </section>
    <section class="side"></section>
</div>
