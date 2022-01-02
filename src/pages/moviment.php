<div id="moviment" class="center">
   <?php if(!empty($params[0])):
   foreach($params[0] as $balance):
      $titleYear = 'ANO DE ' . $balance->year;
      $year = $balance->year;
      if($year === @$yearOld): ?>
         <a href="#" data-year="<?= $balance->year ?>" data-month="<?= $balance->month ?>" ><span class=month ><?= ucfirst(substr($balance->month, 0 , 3)) ?></span></a>
      <?php else:
         echo (!isset($yearOld) ? '<br>' : '<hr style="border: 1px solid gray" >'); ?>
         <span class=titleYear><?= $titleYear ?></span><br>
         <a href="#" data-year="<?= $balance->year ?>" data-month="<?= $balance->month ?>" ><sapn class=month><?= ucfirst(substr($balance->month, 0, 3)) ?></span></a>
         <?php $yearOld=$year;
      endif;
   endforeach;
   endif ?>
   <hr style="border: 1px solid gray" />
   <button data-name="preview" class="mr-2" style="padding: 0 5px; border-radius: 20px"><<</button>
   <span id="current-page" data-limit="<?= (!empty($params[0]) ? count($params[0]) < $limit : 0) ?>"><?= $pageNumber ?></span>
   <button data-name="next" style="padding: 0 5px; border-radius: 20px" >>></button>
</div>
