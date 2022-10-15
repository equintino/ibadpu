<?php

namespace Traits;

trait CropTrait
{
    private $cut = 0;
    private $x = 0;
    private $y = 0;
    private $width;
    private $height;
    private $type;
    private $resize_width;
    private $resize_height;
    private $im;
    private $dstimg;

    public function newimg()
    {
        if(!empty($this->resize_height)) {
            // $this->imageProcess();

            $resize_ratio = $this->resize_width / $this->resize_height;
            $ratio = $this->width / $this->height;
            if ($this->cut == "1") {
                if ($ratio >= $resize_ratio) {
                    $newimg = imagecreatetruecolor($this->resize_width, $this->resize_height);
                    imagecopyresampled($newimg, $this->im, 0, 0, $this->x, $this->y, $this->resize_width, $this->resize_height, $this->height * $resize_ratio, $this->height);
                    ImageJpeg($newimg, $this->dstimg);
                }
                if ($ratio < $resize_ratio) {
                    $newimg = imagecreatetruecolor($this->resize_width, $this->resize_height);
                    imagecopyresampled($newimg, $this->im, 0, 0, $this->x, $this->y, $this->resize_width, $this->resize_height, $this->width, $this->width / $resize_ratio);
                    ImageJpeg($newimg, $this->dstimg);
                }
            } else {
                if ($ratio >= $resize_ratio) {
                    $newimg = imagecreatetruecolor($this->resize_width, $this->resize_width / $ratio);
                    imagecopyresampled($newimg, $this->im, 0, 0, $this->x, $this->y, $this->resize_width, $this->resize_width / $ratio, $this->width, $this->height);
                    ImageJpeg($newimg, $this->dstimg);
                }
                if ($ratio < $resize_ratio) {
                    $newimg = imagecreatetruecolor($this->resize_height * $ratio, $this->resize_height);
                    imagecopyresampled($newimg, $this->im, 0, 0, $this->x, $this->y, $this->resize_width, $this->resize_height * $ratio, $this->width, $this->height);
                    ImageJpeg($newimg, $this->dstimg);
                }
            }
        } else {
            $newimg = imagecreatetruecolor($this->width, $this->height);
            imagecopyresampled($newimg, $this->im, 0, 0, $this->x, $this->y, $this->width, $this->height, $this->width, $this->height);
            ImageJpeg($newimg, $this->dstimg);
        }
    }

    private function imageProcess(): void
    {
        $resize_ratio = $this->resize_width / $this->resize_height;
        $ratio = $this->width / $this->height;
        if ($this->cut == "1") {
            if ($ratio >= $resize_ratio) {
                $newimg = imagecreatetruecolor($this->resize_width, $this->resize_height);
                imagecopyresampled($newimg, $this->im, 0, 0, $this->x, $this->y, $this->resize_width, $this->resize_height, $this->height * $resize_ratio, $this->height);
                ImageJpeg($newimg, $this->dstimg);
            }
            if ($ratio < $resize_ratio) {
                $newimg = imagecreatetruecolor($this->resize_width, $this->resize_height);
                imagecopyresampled($newimg, $this->im, 0, 0, $this->x, $this->y, $this->resize_width, $this->resize_height, $this->width, $this->width / $resize_ratio);
                ImageJpeg($newimg, $this->dstimg);
            }
        } else {
            if ($ratio >= $resize_ratio) {
                $newimg = imagecreatetruecolor($this->resize_width, $this->resize_width / $ratio);
                imagecopyresampled($newimg, $this->im, 0, 0, $this->x, $this->y, $this->resize_width, $this->resize_width / $ratio, $this->width, $this->height);
                ImageJpeg($newimg, $this->dstimg);
            }
            if ($ratio < $resize_ratio) {
                $newimg = imagecreatetruecolor($this->resize_height * $ratio, $this->resize_height);
                imagecopyresampled($newimg, $this->im, 0, 0, $this->x, $this->y, $this->resize_width, $this->resize_height * $ratio, $this->width, $this->height);
                ImageJpeg($newimg, $this->dstimg);
            }
        }
    }

    public function getMime($fileName): string
    {
        list($w, $h, $t, $attr) = getimagesize($fileName);
        switch($t) {
            case 1:
                return "image/gif";
            case 2:
                return "image/jpeg";
            case 3:
                return "image/png";
            case 6:
                return "image/bmp";
            default:
                return "application/pdf";
        }
    }

    private function imageCreateFromAny($filepath)
    {
        $type = $this->getMime($filepath);
        switch ($type) {
            case "image/gif" :
                return imageCreateFromGif($filepath);
            case "image/jpeg":
                return imageCreateFromJpeg($filepath);
            case "image/png" :
                return imageCreateFromPng($filepath);
            case "image/bmp" :
                return imageCreateFromBmp($filepath);
            default:
                return null;//imageCreateFromString($filepath);
        }
    }

    private function default()
    {
        list($this->width, $this->height, $this->type) = getimagesize($this->file["tmp_name"]);
    }
}
