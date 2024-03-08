<div id="proof-edit" class="container mt-4">
    <form id="form-proof" method="POST" action="#" enctype="multipart/form-data" >
        <input type="hidden" name="id" value="<?= $moviment->id ?>"/>
        <input type="hidden" name="proof_id" value="<?= $moviment->proof_id ?>"/>
        <table class="my-table">
            <thead>
                <tr><th>Descrição</th><th>Arquivo</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" name="description" value="<?= $moviment->description ?>"  required/></td>
                    <td><input type="file" name="proofs" required id="proofFile"/></td>
                    <td>
                        <img src="proof/show/id/<?= $moviment->proof_id ?? 0 ?>"
                            alt="" height="150px" id="preview"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</div>
