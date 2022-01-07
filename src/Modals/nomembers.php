<div id="nomembers">
	<section id="tab-nomembers" style="hight: 500px">
	    <?php if(!empty($noMembers)):
			foreach($noMembers as $noMember): ?>
			<table id="<?= mb_strToUpper($noMember->name, "UTF-8") ?>" cellspacing=0 border=1 class="table-compact table-responsive" widht="100%">
				<tr class="end"><td colspan=7 class="division">&nbsp</td></tr>
				<tr>
					<td align="right" width="85">Nome:</td>
					<td class="data" colspan=3> <?= $noMember->name ?> </td>
					<td align="right">Nascimento:</td>
					<td class="data"><?= dateFormat($noMember->birth_date) ?></td>
					<td width="135" height="152" rowspan="5">
						<div align="center" class="" style="background: #dcdcdc">
							<span class="photo" data-id="<?= $noMember->id ?>" data-name="<?= $noMember->name ?>">
								<img title="<?= $noMember->name ?>" src="<?= ($noMember->photo_id ? url("image/id/{$noMember->photo_id}") : theme("assets/img/photo.jpg")) ?>" width="135" height=152 />
							</span>
							<button class="button btn-danger mt-2 mb-1" data-action="edit" data-id='<?= $noMember->id ?>' data-name="<?= $noMember->name ?>" title="Editar dados do membro">EDITAR</button>
						</div>
					</td>
				</tr>
				<?php $colspan = ($noMember->email != '' ? 2 : 5); ?>
				<tr>
					<?= ($noMember->phone ? "<td align='right' >Tel:</td><td class='data' colspan={$colspan}>{$noMember->phone}" : null) ?>
					<?= ($noMember->phone && $noMember->cellphone ? " / {$noMember->cellphone}" : null) ?>
					<?= (!$noMember->phone && $noMember->cellphone ? "<td align='right' >Cel:</td><td class='data' colspan={$colspan}>{$noMember->cellphone}" : null) ?>
					</td>
					<?= $temEmail = ($noMember->email != '' ) ? '<td align="right" width=10px>Email:</td><td  colspan=2 class="data" style="text-transform: lowercase">&nbsp' . $noMember->email . '</td>':null; ?>
				</tr>
				<?php if($noMember->marital_status):  ?>
					<tr>
						<td align="right">Est. Civil:</td>
						<td colspan='<?= ($noMember->spouse ? 1 : 5) ?>' class="data"><?= $noMember->marital_status ?></td>
						<?= ($noMember->spouse ? '<td align="right">Cônjuge:</td><td colspan=3 class="data">&nbsp' . $noMember->spouse . '</td>' : null) ?>
					</tr>
				<?php endif; ?>
				<tr>
					<td align="right">Endereço:</td>
					<td colspan=5 class="data" width="595px";>
						<?= ($noMember->address != '' ? $noMember->type . ' ' . $noMember->address . ', ' . $noMember->number : null) . ($noMember->complement != '' ? ' - ' . $noMember->complement : null) . ($noMember->neighborhood != '' ? ' - ' . $noMember->neighborhood : null) . ($noMember->municipality != '' ? ' / ' . $noMember->municipality : null) . ($noMember->cep != '' ? ' - CEP ' . $noMember->cep : null) ?>
					</td>
				</tr>
				<tr>
					<td class="col1" align="right" >Batismo:</td>
					<td title="Clique para ver o certificado." class="data col2" data-id="<?= $noMember->id ?>" name="<?= $noMember->id ?>" width="100px" style="text-align:center"><?= dateFormat($noMember->baptism) ?></td>
					<td class="col3" width="80px" align="right">Igr. Bat.:</td>
					<td class="data col4" ><?= $noMember->church_baptism ?></td>
					<td class="col5" width="100px" align="right">Membro desde:</td>
					<td class="data col6" width="80px"><?= dateFormat($noMember->entrance) ?></td>
				</tr>
				</table>
	    	<?php endforeach;
		endif ?>
	</section>
</div>
<script>
	$(document).ready(function() {
		$("#nomembers #tab-nomembers button[data-action]").on("click", function() {
			// loading.show({});
			let idMember = $(this).attr("data-id");
			let way = $(this).attr("data-name");
			modal.open({
				title: way,
				content: "membership/register/" + idMember
			})
			.styles({
				element: "#boxe_main #content",
				css: {
					height: "450px"
				}
			})
			.complete({
				buttons: "<button  class='button btn-danger'>Save</button>",
				callback: function() {
					$("#boxe_main button").on("click", function() {
						if($(this).text() === "Save") {
							let form = $("#boxe_main form");
							let required = form.find("[required]");
							let name = required.attr("name");
							if(typeof required !== "undefined" && required.val() == "0") {
								required.trigger("focus").css("background","pink");
								name = (name === "occupation_id" ? "Função" : name);
								return alertLatch("O campo \"" + name + "\" requerido", "var(--cor-warning)");
							}
							let formData = new FormData(form[0]);

							/** pick up attached files */
							let file = $("#boxe_main form [type=file]")[0].files[0];
							if(file !== "undefined") {
								formData.append("file", file);
							}
							if(saveData("membership/update", formData)) {
								modal.close();
							}
						}
					});
					// loading.hide();
				}
			});
		});
	});
</script>
