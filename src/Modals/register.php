<div  id="register">
	<form enctype="multipart/form-data" id="cadastro" action="#" method="POST" >
		<input type="hidden" name="id" value="<?= ($membership->id ?? null) ?>" />
		<input type="hidden" name="photo_id" value="<?= ($membership->photo_id ?? null) ?>" />
		<div class="photo">
  			<img id="thumb_image" src="<?= url("image/id/" . ($membership->photo_id ?? 0)) ?>" alt="" />
			<input accept="image/*" type='file' id="imgInp"/>
		</div>

		<fieldset><legend>Dados Pessoais <span style="float: right">Registro: <strong><?= ($membership->register ?? $newRegister) ?></strong></span></legend>
			<label>Nome: </label>
			<input type="text" name="name" value="<?= ($membership->name ?? null) ?>" />
			<label>Nascimento:</label>
			<input type="date" name="birth_date" value="<?= ($membership->birth_date ?? null) ?>" />
			<label>Sexo:</label>
			<select name="sex">
				<option value="Masculino" <?= (!empty($membership) && $membership->sex === "Masculino" ? "selected" : null) ?> >Masculino</option>
				<option value="Feminino" <?= (!empty($membership) && $membership->sex === "Feminino" ? "selected" : null) ?> >Feminino</option>
			</select>
			<label>Naturalidade:</label>
			<input type="text" name="naturality" value="<?= ($membership->naturality ?? null) ?>" />
			<label>Email:</label>
			<input type="text" name="email" value="<?= ($membership->email ?? null) ?>" />
			<label>Tel:</label>
			<input type="text" name="phone" value="<?= ($membership->phone ?? null) ?>" />
			<label>Cel:</label>
			<input type="text" name="cellphone" value="<?= ($membership->cellphone ?? null) ?>" />
			<label>Escolaridade:</label>
			<input type="text" name="schooling" value="<?= ($membership->schooling ?? null) ?>" />
			<label>Profissão:</label>
			<input type="text" name="profession" value="<?= ($membership->profession ?? null) ?>" />
			<label>CPF:</label>
			<input type="text" name="cpf" value="<?= ($membership->cpf ?? null) ?>" />
			<label>RG:</label>
			<input type="text" name="rg" value="<?= ($membership->rg ?? null) ?>" />
			<label>Título de Eleitor:</label>
			<input type="text" name="voter_registration" value="<?= ($membership->voter_registration ?? null) ?>" />
			<label>Nome do Pai:</label>
			<input type="text" name="father" value="<?= ($membership->father ?? null) ?>" />
			<label>Nome da Mãe:</label>
			<input type="text" name="mother" value="<?= ($membership->mother ?? null) ?>" />
		</fieldset>
		<fieldset><legend>Endereço</legend>
			<label>Tipo:</label>
			<select name="type">
				<option value="R." <?= (!empty($membership) && $membership->type === "R." ? "selected" : null) ?>>R.</option>
				<option value="Av." <?= (!empty($membership) && $membership->type === "Av." ? "selected" : null) ?>>Av.</option>
				<option value="Tv." <?= (!empty($membership) && $membership->type === "Tv." ? "selected" : null) ?>>Tv.</option>
				<option value="Bc." <?= (!empty($membership) && $membership->type === "Bc." ? "selected" : null) ?>>Bc.</option>
				<option value="Estr." <?= (!empty($membership) && $membership->type === "Estr." ? "selected" : null) ?>>Estr</option>
				<option value="Jd." <?= (!empty($membership) && $membership->type === "Jd." ? "selected" : null) ?>>Jd.</option>
				<option value="Lg." <?= (!empty($membership) && $membership->type === "Lg." ? "selected" : null) ?>>Lg.</option>
				<option value="Pc." <?= (!empty($membership) && $membership->type === "Pc." ? "selected" : null) ?>>Pc.</option>
				<option value="Qd." <?= (!empty($membership) && $membership->type === "Qd." ? "selected" : null) ?>>Qd.</option>
				<option value="Vl" <?= (!empty($membership) && $membership->type === "Vl" ? "selected" : null) ?>>Vl</option>
			</select>
			<label>Endereço:</label>
			<input type="text" name="address" value="<?= ($membership->address ?? null) ?>" />
			<label>Número:</label>
			<input type="text" name="number" value="<?= ($membership->number ?? null) ?>" />
			<label>Complemento:</label>
			<input type="text" name="complement" value="<?= ($membership->complement ?? null) ?>" />
			<label>Município:</label>
			<input type="text" name="municipality" value="<?= ($membership->municipality ?? null) ?>" />
			<label>Bairro:</label>
			<input type="text" name="neighborhood" value="<?= ($membership->neighborhood ?? null) ?>" />
			<label>UF:</label>
			<input type="text" name="UF" value="<?= ($membership->UF ?? null) ?>" />
			<label>Cep:</label>
			<input type="text" name="cep" value="<?= ($membership->cep ?? null) ?>" />
		</fieldset>
		<fieldset><legend>Estado Civil</legend>
			<label>Estado Civil:</label>
			<input type="text" name="marital_status" value="<?= ($membership->marital_status ?? null) ?>" />
			<label>Data de Casamento:</label>
			<input type="date" name="wedding" value="<?= ($membership->wedding ?? null) ?>" />
			<label>Cônjuge:</label>
			<input type="text" name="spouse" value="<?= ($membership->spouse ?? null) ?>" />
		</fieldset>
		<fieldset><legend>Dados Eclesiásticos</legend>
			<label>Data do Batismo:</label>
			<input type="date" name="baptism" value="<?= ($membership->baptism ?? null) ?>" />
			<label>Membro desde:</label>
			<input type="date" name="entrance" value="<?= ($membership->entrance ?? null) ?>" />
			<label>Igreja do Batismo:</label>
			<input type="text" name="church_baptism" value="<?= ($membership->church_baptism ?? null) ?>" />
			<label>Igreja de Origem:</label>
			<input type="text" name="origin_church" value="<?= ($membership->origin_church ?? null) ?>" />
			<label>Função:</label>
			<select name="occupation_id" required>
				<option value="0"></option>
				<?php
				if(!empty($occupations)):
					foreach($occupations as $occupation): ?>
						<option value="<?= $occupation->id ?>" <?= (!empty($membership) && $occupation->id === $membership->occupation_id ? "selected" : null) ?>><?= $occupation->name ?></option>
				<?php endforeach;
				endif ?>
			</select>
			<?php if(!$certificate->baptizedHere($membership->id ?? 0)): ?>
			<div id="certificate" class="mt-3 pt-2" style="border-top: 2px dashed gray">
				<label>Inserir o Certificado de Batismo de outra Igreja:</label><br>
				<img src="<?= url("certificate/id/" . ($membership->certificate_id ?? 0)) ?>" alt="" height="200px" id="thumb_cert"/>
				<input type="hidden" name="certificate_id" value="<?= ($membership->certificate_id ?? null) ?>" />
				<input id="imgCert" type="file" name="certificate" value="<?= ($membership->certificate_id ?? null) ?>" />
			</div>
			<?php endif ?>
		</fieldset>
		<fieldset><legend>Situação do Membro</legend>
			<div class="form-group">
			<label>Ativo:</label>
			<select name="active">
				<option value="1" <?= (!empty($membership) && $membership->active == 1 ? 'selected' : null) ?> >Sim</option>
				<option value="0" <?= (!empty($membership) && $membership->active == 0 ? 'selected' : null) ?> >Não</option>
			</select>
		</fieldset>
    </form>
</div>
<script>
    /** Register Member */
	imgInp.onchange = evt => {
		thumbImage(imgInp, thumb_image)
	}
	if(typeof imgCert !== "undefined") {
		imgCert.onchange = evt => {
			thumbImage(imgCert, thumb_cert)
		}
	}
</script>
