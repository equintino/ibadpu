<?php

namespace _App;

class Occupation extends Controller
{
    protected $page = "occupation";

    public function init(?array $data): void
    {
        $occupations = (new \Models\Occupation())->all('*', 'name');
        if (!is_array($occupations) &&  preg_match("/doesn't exist/", $occupations)) {
            if ((new \Models\Occupation())->createThisTable()) {
                alertLatch("Created new table, try again");
            }
        } else {
            $this->view->render($this->page, [ compact("occupations") ]);
        }
    }

    public function register(array $data): void
    {
        $id = ($data["id"] ?? null);
        $name = ($data["name"] ?? null);
        $active = ($data["active"] ?? null);
        $this->view->setPath("Modals")->render("occupation", [ compact("id","name","active") ] );
    }

    public function edit(array $data)
    {
        $id = null;
        $name = null;
        $active = null;
        if (!empty($data["id"])) {
            $occupationDb = (new \Models\Occupation())->load($data["id"]);
            $id = $occupationDb->id;
            $name = $occupationDb->name;
            $active = $occupationDb->active;
        }
        $this->view->setPath("Modals")->render("occupation", [ compact("id","name","active") ] );
    }

    public function list()
    {
        $occupations = (new \Models\Occupation())->activeAll(0);
        $act = "list";
        $this->view->setPath("Modals")->render("occupation", [ compact("occupations", "act") ] );
    }

    public function save(array $data): string
    {
        $occupation = new \Models\Occupation();
        $occupation->bootstrap($data);
        $occupation->save();
        return print $occupation->message();
    }

    public function delete(array $data): ?string
    {
        $occupation = (new \Models\Occupation())->load($data["id"])->destroy();
        return print $occupation->message();
    }
}
