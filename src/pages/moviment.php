<div id="moviment" >
   <?php if(!empty($act) && $act === "new"): ?>
      <div class="new">
         <section>
            <button class="button btn-info" type="button" value="preview">Pré-visualizar</button>
            <button class="button btn-success" type="button" value="conclude" >Concluir</button>
         </section>
         <section class="midle">
            <form enctype="multipart/form-data" id="cadastro" action="#" method="POST" >
               <table id="tab-form-moviment" >
                     <caption>MÊS DE <?= ($month ?? null) ?> DE <?= ($year ?? null) ?><caption>
                     <tr>
                        <td align="right" >DIA: </td><td>
                           <input autofocus required type="text" name="day" size="1" maxlength="2" class='day'/>
                        </td>
                     </tr>
                     <tr>
                        <td align="right" >MOVIMENTAÇÃO: </td>
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
                                 <input multiple="multiple" type="file" name="proofs" />
                           </span>
                        </td>
                     </tr>
                     <tr>
                        <td align="right">DESCRIÇÃO: </td>
                        <td id="description" colspan="2"  class="pr-4" >
                           <input required type="text" name="description" />
                        </td>
                     </tr>
                     <tr>
                        <td align="right">VALOR: </td>
                        <td><input required type="text" name="value" size="15" class='money'/></td>
                     </tr>
               </table>
            </form>
         </section>
         <div class="buttons">
            <button class="button btn-default" type="reset" value="clear">Limpar</button>
            <button class="button btn-danger" type="submit" value="save">Adcionar</button>
         </div>
      </div>
   <?php elseif(!empty($params[0])): ?>
      <div class="list">
      <?php foreach($params[0] as $balance):
         $titleYear = 'ANO DE ' . $balance->year;
         $year = $balance->year;
         if($year === @$yearOld): ?>
            <a href="#" data-year="<?= $balance->year ?>"
            data-month="<?= $balance->month ?>" >
               <span class=month ><?= ucfirst(substr($balance->month, 0 , 3)) ?></span>
            </a>
         <?php else:
            echo (!isset($yearOld) ?'<br>' : '<hr style="border: 1px solid gray" >'); ?>
            <span class=titleYear><?= $titleYear ?></span><br>
            <a href="#" data-year="<?= $balance->year ?>"
               data-month="<?= $balance->month ?>" >
               <sapn class=month><?= ucfirst(substr($balance->month, 0, 3)) ?></span>
            </a>
            <?php $yearOld=$year;
         endif;
      endforeach;
   endif;
   if(empty($act)): ?>
      <hr style="border: 1px solid gray" />
      <button data-name="preview" class="mr-2"
         style="padding: 5px; border-radius: 20px"><i class="fa fa-arrow-left"></i>
      </button>
      <span id="current-page" data-limit="<?= $totalPage ?>"><?= $pageNumber ?></span>
      <button data-name="next" style="padding: 5px; border-radius: 20px" >
      <i class="fa fa-arrow-right"></i></button>
   <?php endif ?>
   </div>
</div>
