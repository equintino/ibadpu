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
        // $company_id = ($data["company_id"] ?? null);
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

        // echo "<script>var company_id = '" . ($data["company_id"] ?? 1) . "' </script>";
        $this->view->setPath("Modals")->render("user", $params);
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

    public function save(array $data): void
    {
        $data["user"] = &$data["login"];
        $data["company_id"] = ($data["company_id"] !== "undefined" ? $data["company_id"] : 1);
        $data = $this->confPassword($data);
        $user = new \Models\User();

        $user->bootstrap($data);
        $user->save(true);
        echo json_encode($user->message());
    }

    public function update(array $data): void
    {
        $user = (new \Models\User())->load($data["id"]);
        foreach($data as $key => $value) {
            $user->$key = $value;
        }

        $user->save(true);
        echo json_encode($user->message());
    }

    public function reset(array $data): void
    {
        $user = (new \Models\User())->find($data["login"]);
        $user->token($data["login"]);
        echo json_encode($user->message());
    }

    public function delete(array $data): void
    {
        $user = (new \Models\User())->find($data["login"]);
        $user->destroy();
        echo json_encode($user->message());
    }

    private function confPassword(array $params): ?array
    {
        $passwd = $params["password"];
        $confPasswd = $params["confPassword"];
        if($passwd !== $confPasswd) {
            print json_encode("<span class='warning'>The password was not confirmed</span>");
            die;
        } else {
            unset($params["confPassword"]);
        }
        return $params;
    }
}
