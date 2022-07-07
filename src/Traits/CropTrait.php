<?php

namespace Traits;

trait CropTrait
{
    public $cut = 0;
    public $x = 0;
    public $y = 0;
    public $width;
    public $height;
    public $resize_width;
    public $resize_height;
    public $im;
    public $dstimg;

    public function __construct()
    {

    }

    public function newimg()
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
}
