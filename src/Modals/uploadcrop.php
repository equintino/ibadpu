<style>
   body {
      background-color: green;
      text-align: center;
      color: white;
   }

   #tudo {
      margin: auto;
      width: 1000px;
   }

   #thumbnail {
      float: left;
      margin-left: 200px;
      margin-right: 10px;
   }

   #preview {
      position: relative;
   }
</style>
<?php
   // error_reporting (E_ALL ^ E_NOTICE);
   // session_start(); //Do not remove this
   // //only assign a new timestamp if the session variable is empty
   // if (!isset($_SESSION['random_key']) || strlen($_SESSION['random_key'])==0){
   //    $_SESSION['random_key'] = strtotime(date('Y-m-d H:i:s')); //assign the timestamp to the session variable
   //    $_SESSION['user_file_ext']= "";
   // }
   // if($_GET['raca']==null){
   //    $raca=null;
   //    $classe=null;
   //    $sexo=null;
   //    $personagem=null;
   // }else{
   //    $raca=$_GET['raca'];
   //    $classe=$_GET['classe'];
   //    $sexo=$_GET['sexo'];
   //    $personagem=$_GET['personagem'];
   // }
   $upload_dir = __DIR__ . "../public/upload";//"../web/imagens/personagens/$raca/$classe/$sexo";
   $upload_path = $upload_dir."/";
   $quantArquivos = glob("$upload_path*.*", GLOB_BRACE);
   $large_image_prefix = "resize_";
   $thumb_image_prefix = "thumbnail_";
   $large_image_name = count($quantArquivos)+1;//$large_image_prefix.$_FILES['avatarMestre']['name'];//$_SESSION['random_key'];
   $thumb_image_name = count($quantArquivos)+1;//$thumb_image_prefix.$_FILES['avatarMestre']['name'];//$_SESSION['random_key'];
   if(!isset($act)){
      $large_image_name=$large_image_name-1;
      $thumb_image_name=$thumb_image_name-1;
   }
   $max_file = "3";// Maximum file size in MB
   $max_width = "400";// Max width allowed for the large image
   $thumb_width = "230";// Width of thumbnail image
   $thumb_height = "265";// Height of thumbnail image
   $allowed_image_types = array('image/pjpeg'=>"jpg",'image/jpeg'=>"jpg",'image/jpg'=>"jpg",'image/png'=>"png",'image/x-png'=>"png",'image/gif'=>"gif");
   $allowed_image_ext = array_unique($allowed_image_types); // do not change this
   $image_ext = "";// initialise variable, do not change this.
   foreach ($allowed_image_ext as $mime_type => $ext) {
      $image_ext.= strtoupper($ext)." ";
   }

   function resizeImage($image,$width,$height,$scale) {
      list($imagewidth, $imageheight, $imageType) = getimagesize($image);
      $imageType = image_type_to_mime_type($imageType);
      $newImageWidth = ceil($width * $scale);
      $newImageHeight = ceil($height * $scale);
      $newImage = imagecreatetruecolor($newImageWidth,$newImageHeight);
      imagealphablending($newImage, false);
      imagesavealpha($newImage,true);
      $transparent = imagecolorallocatealpha($newImage, 255, 255, 255, 127);
      imagefilledrectangle($newImage, 0, 0, $newImageWidth, $newImageHeight, $transparent);
      switch($imageType) {
         case "image/gif":
            $source=imagecreatefromgif($image);
            break;
         case "image/pjpeg":
         case "image/jpeg":
         case "image/jpg":
            $source=imagecreatefromjpeg($image);
            break;
         case "image/png":
         case "image/x-png":
            $source=imagecreatefrompng($image);
            break;
      }
      imagecopyresampled($newImage,$source,0,0,0,0,$newImageWidth,$newImageHeight,$width,$height);

      switch($imageType) {
         case "image/gif":
            imagegif($newImage,$image);
            break;
         case "image/pjpeg":
         case "image/jpeg":
         case "image/jpg":
            imagejpeg($newImage,$image,90);
            break;
         case "image/png":
         case "image/x-png":
            imagepng($newImage,$image);
            break;
      }

      chmod($image, 0777);
      return $image;
   }

   //You do not need to alter these functions
   function resizeThumbnailImage($thumb_image_name, $image, $width, $height, $start_width, $start_height, $scale){
      list($imagewidth, $imageheight, $imageType) = getimagesize($image);
      $imageType = image_type_to_mime_type($imageType);

      $newImageWidth = ceil($width * $scale);
      $newImageHeight = ceil($height * $scale);
      $newImage = imagecreatetruecolor($newImageWidth,$newImageHeight);

      imagealphablending($newImage, false);
      imagesavealpha($newImage,true);
      $transparent = imagecolorallocatealpha($newImage, 255, 255, 255, 127);
      imagefilledrectangle($newImage, 0, 0, $newImageWidth, $newImageHeight, $transparent);


      switch($imageType) {
         case "image/gif":
            $source=imagecreatefromgif($image);
            break;
         case "image/pjpeg":
         case "image/jpeg":
         case "image/jpg":
            $source=imagecreatefromjpeg($image);
            break;
         case "image/png":
         case "image/x-png":
            $source=imagecreatefrompng($image);
            break;
      }



      //imagefilledrectangle($newImage, 0, 0, $nWidth, $nHeight, $transparent);
      //imagecopyresampled($newImage, $im, 0, 0, 0, 0, $nWidth, $nHeight, $imgInfo[0], $imgInfo[1]);
      //imagecopyresampled($newImage, $source, 0, 0, 0, 0, $start_width, $start_height, $newImageWidth, $newImageHeight);


      imagecopyresampled($newImage,$source,0,0,$start_width,$start_height,$newImageWidth,$newImageHeight,$width,$height);
      switch($imageType) {
         case "image/gif":
            imagegif($newImage,$thumb_image_name);
            break;
         case "image/pjpeg":
         case "image/jpeg":
         case "image/jpg":
            imagejpeg($newImage,$thumb_image_name,90);
            break;
         case "image/png":
         case "image/x-png":
            imagepng($newImage,$thumb_image_name);
            break;
      }
      chmod($thumb_image_name, 0777);
      return $thumb_image_name;
   }

   //You do not need to alter these functions
   function getHeight($image) {
      $size = getimagesize($image);
      $height = $size[1];
      return $height;
   }

   //You do not need to alter these functions
   function getWidth($image) {
      $size = getimagesize($image);
      $width = $size[0];
      return $width;
   }

   //Image Locations
   $large_image_location = $upload_path.$large_image_name.$_SESSION['user_file_ext'];
   $thumb_image_location = $upload_path.'/foto/'.$thumb_image_name.$_SESSION['user_file_ext'];
   //Create the upload directory with the right permissions if it doesn't exist
   //print_r([$large_image_location,$thumb_image_location]);die;

   // if(!is_dir($upload_dir)){
   //    mkdir($upload_dir, 0777);
   //    chmod($upload_dir, 0777);
   // }
   // if(!is_dir($upload_dir.'/foto')){
   //    mkdir($upload_dir.'/foto', 0777);
   //    chmod($upload_dir.'/foto', 0777);
   // }

   //print_r([$large_image_location,$thumb_image_location,$_POST]);die;
   if (isset($_POST["upload"])) {
      //Get the file information
      $userfile_name = $_FILES['avatarMestre']['name'];
      $userfile_tmp = $_FILES['avatarMestre']['tmp_name'];
      $userfile_size = $_FILES['avatarMestre']['size'];
      $userfile_type = $_FILES['avatarMestre']['type'];
      $filename = basename($_FILES['avatarMestre']['name']);
      $file_ext = strtolower(substr($filename, strrpos($filename, '.') + 1));

      //Only process if the file is a JPG, PNG or GIF and below the allowed limit
      if((!empty($_FILES["avatarMestre"])) && ($_FILES['avatarMestre']['error'] == 0)) {

         foreach ($allowed_image_types as $mime_type => $ext) {
            //loop through the specified image types and if they match the extension then break out
            //everything is ok so go and check file size
            if($file_ext==$ext && $userfile_type==$mime_type){
               $error = "";
               break;
            }else{
               $error = "Somente imagens <strong>".$image_ext."</strong> são aceitas<br />";
            }
         }
         //check if the file size is above the allowed limit
         if ($userfile_size > ($max_file*1048576)) {
            $error.= "Tamanho de imagem acima de ".$max_file."MB";
         }

      }else{
         $error= "Selecione uma imagem";
      }
      //Everything is ok, so we can upload the image.
      if (strlen($error)==0){
         if (isset($_FILES['avatarMestre']['name'])){
            //this file could now has an unknown file extension (we hope it's one of the ones set above!)
            //$large_image_location = $large_image_location.'.'.$file_ext;
            //$thumb_image_location = $thumb_image_location.'.'.$file_ext;
            //put the file ext in the session so we know what file to look for once its uploaded
            //print_r([$_FILES,$large_image_location,$userfile_tmp]);echo '<br>';die;
            $_SESSION['user_file_ext']=".".$file_ext;

            move_uploaded_file($userfile_tmp, $large_image_location);
            chmod($large_image_location, 0777);
            //print_r($large_image_location);

            $width = getWidth($large_image_location);
            $height = getHeight($large_image_location);
            //Scale the image if it is greater than the width set above
            if ($width > $max_width){
               $scale = $max_width/$width;
               $uploaded = resizeImage($large_image_location,$width,$height,$scale);
            }else{
               $scale = 1;
               $uploaded = resizeImage($large_image_location,$width,$height,$scale);
            }
         //Delete the thumbnail file so the user can create a new one
            if (file_exists($thumb_image_location)) {
               //unlink($thumb_image_location);
            }
         }
         //Refresh the page to show the new uploaded image
         //header("location:".$_SERVER["PHP_SELF"]);
         //exit();
      }
   }

   //Check to see if any images with the same name already exist
   //print_r([$large_image_location,$thumb_image_location]);
   if (file_exists($large_image_location)){
      if(file_exists($thumb_image_location)){
         $thumb_photo_exists = "<img src=\"".$thumb_image_location."\" alt=\"Thumbnail Image\"/>";
      }else{
         $thumb_photo_exists = "";
      }
      $large_photo_exists = "<img src=\"".$large_image_location."\" alt=\"Large Image\"/>";
         //print_r([$large_photo_exists,$large_image_location,$thumb_photo_exists]);die;
      //print_r($thumb_image_location);die;
   } else {
      $large_photo_exists = "";
      $thumb_photo_exists = "";
   }

   //print_r($large_photo_exists);die;
   //print_r([$large_image_location,$_POST,$large_photo_exists,$thumb_photo_exists,$_FILES]);

   if (isset($_POST["upload_thumbnail"])) {// && strlen($large_photo_exists)>0
      //Get the new coordinates to crop the image.
      $x1 = $_POST["x1"];
      $y1 = $_POST["y1"];
      $x2 = $_POST["x2"];
      $y2 = $_POST["y2"];
      $w = $_POST["w"];
      $h = $_POST["h"];
      //Scale the image to the thumb_width set above
      $scale = $thumb_width/$w;
      $cropped = resizeThumbnailImage($thumb_image_location, $large_image_location,$w,$h,$x1,$y1,$scale);
      //Reload the page again to view the thumbnail
      header("location:../web/index.php?pagina=cadastro&act=cad2&raca=$raca&classe=$classe&personagem=$personagem");
      exit();
   }


   if (!empty($_GET['a']) && $_GET['a']=="delete" && strlen($_GET['t'])>0){
   //get the file locations
      $large_image_location = $upload_path.$large_image_prefix.$_GET['t'];
      $thumb_image_location = $upload_path.$thumb_image_prefix.$_GET['t'];
      if (file_exists($large_image_location)) {
            unlink($large_image_location);
      }
      if (file_exists($thumb_image_location)) {
            unlink($thumb_image_location);
      }
      header("location:".$_SERVER["PHP_SELF"]);
      exit();
   }
   // $model->setavatar($large_image_location);
   // $model->setfoto($thumb_image_location);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
         <meta name="generator" content="WebMotionUK" />
         <title>D20</title>
         <!-- <script type="text/javascript" src="../web/js/js.js"></script>
         <script type="text/javascript" src="../web/js/missao.js"></script>
         <script type="text/javascript" src="../web/js/cadastro.js"></script>
         <script type="text/javascript" src="../web/js/upload.js"></script>
         <script type="text/javascript" src="../web/js/jquery-3.2.1.min.js"></script>

         <script type="text/javascript" src="../web/js/jquery-pack.js"></script>
         <script type="text/javascript" src="../web/js/jquery.imgareaselect.min.js"></script> -->
      </head>
   <body>
      <?php
         //Only display the javacript if an image has been uploaded
         //if(strlen($large_photo_exists)>0){
         $current_large_image_width = getWidth($large_image_location);
         $current_large_image_height = getHeight($large_image_location);
         //print_r($large_image_location);die;
      ?>
      <script type="text/javascript">
      function preview(img, selection) {
         var scaleX = <?php echo $thumb_width;?> / selection.width;
         var scaleY = <?php echo $thumb_height;?> / selection.height;

         $('#thumbnail + div > img').css({
            width: Math.round(scaleX * <?php echo $current_large_image_width;?>) + 'px',
            height: Math.round(scaleY * <?php echo $current_large_image_height;?>) + 'px',
            marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
            marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
         });
         $('#x1').val(selection.x1);
         $('#y1').val(selection.y1);
         $('#x2').val(selection.x2);
         $('#y2').val(selection.y2);
         $('#w').val(selection.width);
         $('#h').val(selection.height);
      }

      $(document).ready(function () {
         $('#save_thumb').click(function() {
            var x1 = $('#x1').val();
            var y1 = $('#y1').val();
            var x2 = $('#x2').val();
            var y2 = $('#y2').val();
            var w = $('#w').val();
            var h = $('#h').val();
            if(x1=="" || y1=="" || x2=="" || y2=="" || w=="" || h==""){
               alert("Selecione primeiro uma área para a foto");
               return false;
            }else{
               return true;
            }
         });
      });

      $(window).load(function () {
         $('#thumbnail').imgAreaSelect({
            aspectRatio: '1:<?php echo $thumb_height/$thumb_width;?>',
            onSelectChange: preview
         });
      });

   </script>
   <?php //}?>
   <h1>Edição de Foto</h1>
   <?php
      //Display error message if there are any
      if(strlen($error)>0){
         echo "<ul><li><strong>Error!</strong></li><li>".$error."</li></ul>";
      }
      if(strlen($large_photo_exists)>0 && strlen($thumb_photo_exists)>0){
         echo $large_photo_exists."&nbsp;".$thumb_photo_exists;
         echo "<p><a href=\"".$_SERVER["PHP_SELF"]."?a=delete&t=".$_SESSION['random_key'].$_SESSION['user_file_ext']."\">Exclui Imagem</a></p>";
         echo "<p><a href=\"".$_SERVER["PHP_SELF"]."\">Enviar outra foto</a></p>";
            //Clear the time stamp session and user file extension
            $_SESSION['random_key']= "";
            $_SESSION['user_file_ext']= "";
      }else{
         if(strlen($large_photo_exists)>0){?>
         <h2>Selecione área para foto da ficha</h2>
         <div id="tudo" align="center">
            <img src="<?php echo $upload_path.$large_image_name.'.'.$file_ext;?>" id="thumbnail" alt="Create Thumbnail" />
            <div style="border:1px #e5e5e5 solid; float:left; position:relative; overflow:hidden; width:<?php echo $thumb_width;?>px; height:<?php echo $thumb_height;?>px;">
               <img src="<?php echo $upload_path.$large_image_name.'.'.$file_ext;?>" id="preview" alt="Thumbnail Preview" />
            </div>
            <br style="clear:both;"/>
            <form name="thumbnail" action="<?php echo "uploadcrop.php?raca=$raca&classe=$classe&sexo=$sexo&personagem=$personagem";?>" method="post">
               <input type="hidden" name="x1" value="" id="x1" />
               <input type="hidden" name="y1" value="" id="y1" />
               <input type="hidden" name="x2" value="" id="x2" />
               <input type="hidden" name="y2" value="" id="y2" />
               <input type="hidden" name="w" value="" id="w" />
               <input type="hidden" name="h" value="" id="h" />
               <input type="submit" name="upload_thumbnail" value="Salvar Foto" id="save_thumb" />
            </form>
         </div>
         <hr />
         <?php 	} ?>
      <?php } ?>
   </body>
</html>
