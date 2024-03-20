<?php

namespace _App;

use Traits\CropTrait;

class Photo extends Controller
{
    use CropTrait;

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
            $x = $data["x"];
            $y = $data["y"];

            $fileName = $_FILES['image']['tmp_name'];

            $im = $this->imageCreateFromAny($fileName);
            $this->cut = 1;
            $this->x = $data["x"];
            $this->y = $data["y"];
            $this->width = $data["w"];
            $this->height = $data["h"];
            $this->resize_width = 138;
            $this->resize_height = 152;
            $this->im = $im;
            $this->dstimg = null;
            $this->newimg();

            header('Content-type: ' . $this->getMime($fileName));

            unset($data["x"],$data["y"],$data["w"],$data["h"]);
            $photo = new \Models\Photo();
            $data["name"] = $_FILES["image"]["name"];
            $data["type"] = $photo->indType($_FILES["image"]["type"]);
            $data["size"] = $_FILES["image"]["size"];
            $data["photo"] = ob_get_contents();
            $photo->bootstrap($data);
            $photo->save();
            return $this->resizeThumbnailImage($fileName, $data["w"], $data["h"], $x, $y);
        } else {
            echo 'error';
        }
    }

    private function resizeThumbnailImage($fileName, $width, $height, $start_width, $start_height)
    {
        $newWidth = ((15200 / $height) / 100) * $width;
        $newImage = imagecreatetruecolor(138, 152);
        $img_r = $this->imageCreateFromAny($fileName);
        imagecopyresampled($newImage,$img_r,0,0,$start_width,$start_height,$newWidth,152,$width,$height);

        return $this->imageType($fileName, $newImage);
    }

    private function show($dst_r, $quality)
    {
        return imagejpeg($dst_r,null,$quality);
    }

    public function lastid(): string
    {
        return print(json_encode((new \Models\Photo())->activeAll(1,0,"id","id desc")[0]->id));
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

    private function imageCreateFromAny($filepath)
    {
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

    private function imageType($filepath, $newImage)
    {
        $type = $this->getMime($filepath);
        switch ($type) {
            case "image/gif" :
                return imageGif($newImage, null);
            case "image/png" :
                return imagePng($newImage, null, 0);
            case "image/bmp" :
                return imageBmp($newImage, null, 100);
            default:
                return imageJpeg($newImage, null, 100);
        }
    }

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

}
