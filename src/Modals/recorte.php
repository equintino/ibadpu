<?php
function LoadJpeg($imgname)
{
    /* Attempt to open */
    $im = imagecreatefromjpeg($imgname);
    // var_dump(
    //     $im,
    //     $imgname
    // );

    /* See if it failed */
    if(!$im)
    {
        /* Create a black image */
        $im  = imagecreatetruecolor(150, 30);
        $bgc = imagecolorallocate($im, 255, 255, 255);
        $tc  = imagecolorallocate($im, 0, 0, 0);

        imagefilledrectangle($im, 0, 0, 150, 30, $bgc);

        /* Output an error message */
        imagestring($im, 1, 5, 5, 'Error loading ' . $imgname, $tc);
    }

    return $im;
}

function imagecreatefromjpegexif($filename)
    {
        $img = imagecreatefromjpeg($filename);
        $exif = exif_read_data($filename);
        if ($img && $exif && isset($exif['Orientation']))
        {
            $ort = $exif['Orientation'];

            if ($ort == 6 || $ort == 5)
                $img = imagerotate($img, 270, null);
            if ($ort == 3 || $ort == 4)
                $img = imagerotate($img, 180, null);
            if ($ort == 8 || $ort == 7)
                $img = imagerotate($img, 90, null);

            if ($ort == 5 || $ort == 4 || $ort == 7)
                imageflip($img, IMG_FLIP_HORIZONTAL);
        }
        return $img;
    }

    function imageCreateFromAny($filepath) {
        $type = exif_imagetype($filepath); // [] if you don't have exif you could use getImageSize()
        $allowedTypes = array(
            1,  // [] gif
            2,  // [] jpg
            3,  // [] png
            6   // [] bmp
        );
        if (!in_array($type, $allowedTypes)) {
            return false;
        }
        switch ($type) {
            case 1 :
                $im = imageCreateFromGif($filepath);
            break;
            case 2 :
                $im = imageCreateFromJpeg($filepath);
            break;
            case 3 :
                $im = imageCreateFromPng($filepath);
            break;
            case 6 :
                $im = imageCreateFromBmp($filepath);
            break;
        }
        return $im;
    }


// The file
// $filename = $_FILES["image"]["tmp_name"];
// $filename = 'test.jpg';


// header('Content-Type: image/jpeg');

// $img = imageCreateFromAny($filename);

// imagejpeg($img);
// imagedestroy($img);
// return;


// Get new dimensions
// list($width_orig, $height_orig) = getimagesize($filename);

// $ratio_orig = $width_orig/$height_orig;
// $width = 138;
// $height = 152;

// if ($width/$height > $ratio_orig) {
//    $width = $height*$ratio_orig;
// } else {
//    $height = $width/$ratio_orig;
// }

// // Resample
// $image_p = imagecreatetruecolor($width, $height);
// $image = imagecreatefromjpeg($filename);
// imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);

// // Output
// imagejpeg($image_p, null, 100);
// return;



    if (isset($_FILES['image']) &&
        isset($_POST['x']) &&
        isset($_POST['y']) &&
        isset($_POST['w']) &&
        isset($_POST['h']))
    {
        $targ_w = $_POST['w'];
        $targ_h = $_POST['h'];
        $jpeg_quality = 90;

        $src = $_FILES['image']['tmp_name'];
        // $img_r = imagecreatefromjpeg($src);
        $img_r = imageCreateFromAny($src);
        $dst_r = ImageCreateTrueColor( $targ_w, $targ_h );

        imagecopyresampled($dst_r,$img_r,0,0,$_POST['x'],$_POST['y'],
        $targ_w,$targ_h,$_POST['w'],$_POST['h']);

        header('Content-type: image/jpeg');
        imagejpeg($dst_r,null,$jpeg_quality);
    } else {
        echo 'error';
    }
