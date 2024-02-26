<?php

namespace _App;

use Models\Group;

class User extends Controller
{
    protected $page = " user";

    public function __construct()
    {
        parent::__construct();
    }

    public function init(?array $data): void
    {
        $params = [];
        $this->view->render("user", $params);
    }

    public function list(?array $data): void
    {
        $data["act"] = "list";
        $login = $_SESSION["login"]->login;
        if(!empty($data["company_id"])) {
            $users = (new \Models\User())->find(["company_id" => $data["company_id"]]);
        } else {
            $users = (new \Models\User())->activeAll();
        }

        $user = (new \Models\User())->find($login);
        $groups = (new Group())->all();
        $params = [ $data, compact("login", "users", "user", "groups") ];

        // $this->view->setPath("Modals")->render("user", $params);
        $this->view->render("user", $params);
    }

    public function add(): void
    {
        $data["act"] = "edit";
        $groups = (new Group())->all();
        $params = [ $data, compact("groups") ];

        $this->view->setPath("Modals")->render("user", $params);
    }

    public function edit(array $data): void
    {
        $data["act"] = "edit";
        $login = $data["user"];
        $user = (new \Models\User())->find(($login));
        $groups = (new Group())->all();
        $params = [ $data, compact("user", "groups") ];

        $this->view->setPath("Modals")->render("user", $params);
    }

    public function save(array $data): string
    {
        $data["user"] = &$data["login"];
        $data["company_id"] = ($data["company_id"] !== "undefined" ? $data["company_id"] : 1);
        $data = $this->confPassword($data);
        $user = new \Models\User();

        $user->bootstrap($data);
        $user->save(true);
        return print $user->message();
    }

    public function update(array $data): string
    {
        $user = (new \Models\User())->load($data["id"]);
        foreach($data as $key => $value) {
            $user->$key = $value;
        }

        $user->save(true);
        return print $user->message();
    }

    public function reset(array $data): string
    {
        $user = (new \Models\User())->find($data["login"]);
        $user->token($data["login"]);
        return print $user->message();
    }

    public function delete(array $data): string
    {
        $id = $data['user'];
        $user = (new \Models\User())->load($id);
        $user->destroy();
        return print $user->message();
    }

    private function confPassword(array $params): ?array
    {
        $passwd = $params["password"];
        $confPasswd = $params["confPassword"];
        if($passwd !== $confPasswd) {
            die("<span class='warning'>The password was not confirmed</span>");
        } else {
            unset($params["confPassword"]);
        }
        return $params;
    }
}
