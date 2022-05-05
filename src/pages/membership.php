<div id="membership">
	<section class="buttons">
		<div class="col">
			<button class="button button-primary add" data-name = "add" >NOVO MEMBRO</button>
			<button class="button button-primary cart" data-name = "cart" >
				CARTEIRINHA <span id="selected">0</span>/<?= count($membership) ?>
			</button>
			<button class="button btn-warning add" data-name = "markOff" >DESMARCAR</button>
			<button class="button btn-secondary no_members" data-name = "no_members" >NÃO MEMBROS</button>
		</div>
		<div class="col-2">
			<input style="padding-left: 8px" type="text" name="search" placeholder="pesquisa de membros" autofocus />
		</div>
	</section>
	<section id="tab-membership">
	    <?php if(!empty($membership)):
			foreach($membership as $member): ?>
			<table id="<?= mb_strToUpper($member->name, "UTF-8") ?>" cellspacing=0 border=1 class="table-compact table-responsive" widht="100%">
				<tr class="end"><td colspan=7 class="division">&nbsp</td></tr>
				<tr>
					<td align="right" width="85">Nome:</td>
					<td class="data" colspan=3> <?= $member->name ?> </td>
					<td align="right">Nascimento:</td>
					<td class="data"><?= dateFormat($member->birth_date) ?></td>
					<td width="135" height="152" rowspan="5">
						<div align="center" class="" style="background: #dcdcdc">
							<span class="photo" data-id="<?= $member->id ?>" data-name="<?= $member->name ?>">
								<img title="<?= $member->name ?>" src="<?= ($member->photo_id ? url("image/id/{$member->photo_id}") : theme("assets/img/photo.jpg")) ?>" width="135" height=152 />
							</span>
							<button class="button btn-danger mt-2 mb-1" data-action="edit" data-id='<?= $member->id ?>' data-name="<?= $member->name ?>" title="Editar dados do membro">EDITAR</button>
							<span class="badge" title="Marque para emitir carteirinha"><img src="<?= theme("assets/img/off.png") ?>" alt="off" height="15px" /></span>
						</div>
					</td>
				</tr>
				<?php $colspan = ($member->email != '' ? 2 : 5); ?>
				<tr>
					<?= ($member->phone ? "<td align='right' >Tel:</td><td class='data' colspan={$colspan}>{$member->phone}" : null) ?>
					<?= ($member->phone && $member->cellphone ? " / {$member->cellphone}" : null) ?>
					<?= (!$member->phone && $member->cellphone ? "<td align='right' >Cel:</td><td class='data' colspan={$colspan}>{$member->cellphone}" : null) ?>
					</td>
					<?= $temEmail = ($member->email != '' ) ? '<td align="right" width=10px>Email:</td><td  colspan=2 class="data" style="text-transform: lowercase">&nbsp' . $member->email . '</td>':null; ?>
				</tr>
				<?php if($member->marital_status):  ?>
					<tr>
						<td align="right">Est. Civil:</td>
						<td colspan='<?= ($member->spouse ? 1 : 5) ?>' class="data"><?= $member->marital_status ?></td>
						<?= ($member->spouse ? '<td align="right">Cônjuge:</td><td colspan=3 class="data">&nbsp' . $member->spouse . '</td>' : null) ?>
					</tr>
				<?php endif; ?>
				<tr>
					<td align="right">Endereço:</td>
					<td colspan=5 class="data" width="595px";>
						<?= ($member->address != '' ? $member->type . ' ' . $member->address . ', ' . $member->number : null) . ($member->complement != '' ? ' - ' . $member->complement : null) . ($member->neighborhood != '' ? ' - ' . $member->neighborhood : null) . ($member->municipality != '' ? ' / ' . $member->municipality : null) . ($member->cep != '' ? ' - CEP ' . $member->cep : null) ?>
					</td>
				</tr>
				<tr>
					<td class="col1" align="right" >Batismo:</td>
					<td title="Clique para ver o certificado." class="data col2" data-id="<?= $member->id ?>" name="<?= $member->id ?>" width="100px" style="text-align:center"><?= dateFormat($member->baptism) ?><button class="button btn-info certificate" <?= $certificate->validateCertificate($member->church_baptism, $member->id) ?> >CERTIFICADO</button></td>
					<td class="col3" width="80px" align="right">Igr. Bat.:</td>
					<td class="data col4" ><?= $member->church_baptism ?></td>
					<td class="col5" width="100px" align="right">Membro desde:</td>
					<td class="data col6" width="80px"><?= dateFormat($member->entrance) ?></td>
				</tr>
				</table>
	    	<?php endforeach;
		endif ?>
	</section>
</div>
