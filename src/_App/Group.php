<?php

namespace _App;

use Models\User;
use Core\Safety;

class Group extends Controller
{
    public function list(): void
    {
        $groups = (new \Models\Group())->activeAll() ?? [];
        if ($groups[0]->name === 'Administrador') {
            unset($groups[0]);
        }

        $screens = Safety::screens("/pages");
        $group_id = ((new User())->find($_SESSION["login"]->login)->group_id ?? null);

        $this->view->render("shield", [ compact("groups", "screens", "group_id") ]);
    }

    public function load(array $data): string
    {
        $group = (new \Models\Group())->find($data["name"]);
        if ($group) {
            $security["access"] = [];
            foreach (explode(",", $group->access) as $screen) {
                array_push($security["access"], Safety::renameScreen($screen));
            }
            return print json_encode($security);
        }
    }

    public function add(): void
    {
        ($this->view->setPath("Modals")->render("group"));
    }

    public function save(): string
    {
        $params = $this->getPost($_POST);
        $group = new \Models\Group();

        $group->bootstrap($params);
        $group->save();
        return print $group->message();
    }

    public function update(): string
    {
        $params = $this->getPost($_POST);
        $group = (new \Models\Group())->find($params["name"]);

        foreach($params as $key => $value) {
            $value = ($key === "access" ? " home, error," . $value : $value);
            $group->$key = $value;
        }

        $group->save(true);
        return print $group->message();
    }

    public function delete(array $data): string
    {
        $group = (new \Models\Group())->find($data["name"]);
        $group->destroy();
        return print $group->message();
    }
}
