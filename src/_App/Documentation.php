<?php

namespace _App;

class Documentation extends Controller
{
    protected $page = "documentation";

    public function __construct()
    {
        parent::__construct();
    }

    public function init(?array $data): void
    {
        $act = "show";
        $documentations = ((new \Models\Documentation())->all() ?? []);
        $this->view->render($this->page, [ compact("act","documentations") ]);
    }

    public function add(?array $data)
    {
        $act = "add";
        $this->view->render($this->page, [ compact("act") ]);
    }

    public function show(array $data): void
    {
        $id = $data["id"];
        $link = "documentation/show/id/{$id}";
        $this->view->setPath("Modals")->render("image", [ compact("link") ]);
    }

    public function showImage(array $data): void
    {
        $id = $data["id"];
        $documentation = (new \Models\Documentation())->load($id);
        $type = $documentation->type;
        header("Content-Type: {$type}");
        echo $documentation->image;
    }

    public function save(array $data)
    {
        $files = $_FILES["files"];
        $names = $data["names"];
        $descriptions = $data["descriptions"];
        $keys = array_keys(array_filter($files["name"]));
        $documentation = new \Models\Documentation();
        foreach($keys as $key) {
            $file["name"] = $names[$key];
            $file["description"] = $descriptions[$key];
            $file["type"] = $files["type"][$key];
            $file["size"] = $files["size"][$key];
            $file["tmp_name"] = $files["tmp_name"][$key];
            $ids[] = $documentation->fileSave($file);
        }
        return print(json_encode($documentation->message()));
    }
}
