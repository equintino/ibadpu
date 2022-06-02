<?php

namespace _App;

class Photo extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function crop(): void
    {
        $this->view->setPath("Modals")->render("crop");
    }

    public function cropped(array $data)
    {
        if (isset($_FILES['image']) &&
            isset($data['x']) &&
            isset($data['y']) &&
            isset($data['w']) &&
            isset($data['h'])) {
            $targ_w = $data['w'];
            $targ_h = $data['h'];
            $jpeg_quality = 100;

            $fileName = $_FILES['image']['tmp_name'];
            $img_r = $this->imageCreateFromAny($fileName);
            $dst_r = ImageCreateTrueColor( $targ_w, $targ_h );
            imagecopyresampled($dst_r,$img_r,0,0,$data['x'],$data['y'],$targ_w,$targ_h,$data['w'],$data['h']);

            $type = $this->getMime($fileName);
            header('Content-type: ' . $type);
            imagejpeg($dst_r,null,$jpeg_quality);

            unset($data["x"],$data["y"],$data["w"],$data["h"]);
            $photo = new \Models\Photo();
            $data["name"] = $_FILES["image"]["name"];
            $data["type"] = $photo->indType($_FILES["image"]["type"]);
            $data["size"] = $_FILES["image"]["size"];
            $data["photo"] = ob_get_contents();
            $photo->bootstrap($data);
            $photo->save();
        } else {
            echo 'error';
        }

        // $this->view->setPath("Modals")->render("recorte");
    }

    public function showImage($data): void
    {
        if(isset($data["id"])) {
            $photo = (new \Models\Photo())->load($data["id"]);
            header("Content-Type: {$photo->type}");
            echo $photo->photo;
        } else {
            alertLatch("No file found","var(--cor-warning)");
        }
    }

    public function delete(array $data)
    {
        $photo = new \Models\Photo();
        $file = $photo->load($data["id"]);
        $file->destroy();
        return print(json_encode($file->message()));
    }

    private function imageCreateFromAny($filepath) {
        // $type = exif_imagetype($filepath); // [] if you don't have exif you could use getImageSize()
        // $allowedTypes = array(
        //     1,  // [] gif
        //     2,  // [] jpg
        //     3,  // [] png
        //     6   // [] bmp
        // );
        // if (!in_array($type, $allowedTypes)) {
        //     return false;
        // }
        $type = $this->getMime($filepath);
        switch ($type) {
            case "image/gif" :
                return imageCreateFromGif($filepath);
            case "image/png" :
                return imageCreateFromPng($filepath);
            case "image/bmp" :
                return imageCreateFromBmp($filepath);
            default:
                return imageCreateFromJpeg($filepath);
        }
    }

    // private function showImageType()
    // {
    //     switch ($details['mime']) {
    //         case 'image/jpeg':
    //             return imagejpeg($image_p, null, $quality);
    //             break;
    //         case 'image/gif':
    //             return imagegif($image_p, null, $quality);
    //             break;
    //         case 'image/png':
    //             return imagepng($image_p, null, $quality);
    //             break;
    //         case 'image/webp':
    //             return imagewebp($image_p, null, $quality);
    //             break;
    //     }
    // }

    private function getMime($fileName): string
    {
        list($w, $h, $t, $attr) = getimagesize($fileName);
        switch($t) {
            case 1:
                return "image/gif";
            case 3:
                return "image/png";
            case 6:
                return "image/bmp";
            default:
                return "image/jpeg";
        }
    }

//     function image_resize($path, $width = 200, $height = 200, $save = null, $quality = 100)
// {
//         $details = getimagesize($path);

//         if (!$details) {
//             trigger_error('Imagem inválida');
//             return false;
//         }

//         $width_orig = $details[0];
//         $height_orig = $details[1];

//         // Calculando a proporção
//         $ratio_orig = $width_orig / $height_orig;

//         if ($width / $height > $ratio_orig) {
//             $width = $height * $ratio_orig;
//         } else {
//             $height = $width / $ratio_orig;
//         }

//         if (is_string($save) === false) {
//             $save = null;
//             header('Content-Type: ' . $details['mime']);
//         }

//         $image_p = imagecreatetruecolor($width, $height);

//         switch ($details['mime']) {
//             case 'image/jpeg':
//                 $image = imagecreatefromjpeg($path);
//                 break;
//             case 'image/gif':
//                 $image = imagecreatefromgif($path);
//                 break;
//             case 'image/png':
//                 $image = imageCreateFromPng($path);
//                 break;
//             case 'image/webp':
//                 $image = imagecreatefromwebp($path);
//                 break;
//             default:
//                 trigger_error('Formato não suportado');
//                 $image_p = null;
//                 return false;
//         }

//         imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);

//         if ( in_array($details['mime'], array('image/png', 'image/webp')) ) {
//             imagealphablending($image_p, true);
//             imagesavealpha($image_p, true);
//         }

//         switch ($details['mime']) {
//             case 'image/jpeg':
//                 imagejpeg($image_p, $save, $quality);
//                 break;
//             case 'image/gif':
//                 imagegif($image_p, $save);
//                 break;
//             case 'image/png':
//                 imagepng($image_p, $save, $quality);
//                 break;
//             case 'image/webp':
//                 imagewebp($image_p, $save, $quality);
//                 break;
//         }
//     }

}
