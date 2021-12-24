<?php

namespace _App;

use Core\View;
use Support\AjaxTransaction;
use Models\Company;
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
        $companyId = ($data["companyId"] ?? null);
        $this->view->render("user", $params);
    }

    public function list(?array $data): void
    {
        $data["act"] = "list";
        $login = $_SESSION["login"]->Logon;
        if($data["companyId"] !== "undefined") {
            $users = (new \Models\User())->find(["IDEmpresa" => $data["companyId"]]);
        } else {
            $users = (new \Models\User())->all();
        }

        $user = (new \Models\User())->find($login);
        $groups = (new Group())->all();
        $params = [ $data, compact("login", "users", "user", "groups") ];

        echo "<script>var companyId = '" . $data["companyId"] . "' </script>";
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
        $data["USUARIO"] = &$data["Logon"];
        $data["IDEmpresa"] = ($data["IDEmpresa"] !== "undefined" ? $data["IDEmpresa"] : 1);
        $data = $this->confSenha($data);
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
        $user = (new \Models\User())->find($data["Logon"]);
        $user->token($data["Logon"]);
        echo json_encode($user->message());
    }

    public function delete(array $data): void
    {
        $user = (new \Models\User())->find($data["Logon"]);
        $user->destroy();
        echo json_encode($user->message());
    }

    private function confSenha(array $params): ?array
    {
        $passwd = $params["Senha"];
        $confPasswd = $params["confSenha"];
        if($passwd !== $confPasswd) {
            print(json_encode("<span class='warning'>A senha não foi confirmada</span>"));
            die;
        }
        else {
            unset($params["confSenha"]);
        }
        return $params;
    }
}
