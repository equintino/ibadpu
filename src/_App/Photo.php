<?php

namespace _App;

class Photo extends Controller
{
    public function __construct()
    {
        parent::__construct();
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

}
