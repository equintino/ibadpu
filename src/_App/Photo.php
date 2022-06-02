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

    private function imageCreateFromAny($filepath) {
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
