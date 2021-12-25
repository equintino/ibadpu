<?php

require __DIR__ . "/../../vendor/autoload.php";

use Support\FileTransation;
use Support\Cookies;
use Core\Session;
use Models\User;

$login = filter_input(INPUT_POST, "login", FILTER_SANITIZE_STRIPPED);
$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRIPPED);
$remember = filter_input(INPUT_POST, "remember", FILTER_SANITIZE_STRIPPED);
$connectionName = filter_input(INPUT_POST, "connection-name", FILTER_SANITIZE_STRIPPED);

$confEnv = (new FileTransation(".env"))->setLocal($connectionName);

if($confEnv->getLocal()) {
    $search = ["login" => $login, "active" => 1];
    $user = (new User())->find($search, "*", true);
    if(is_array($user) && !empty($user)) {
        $user = $user[0];
        /** password reseted */
        if(!empty($user->token)) {
            return print(json_encode(2));
        }
        /** password validated */
        if($user->validate($password, $user->password)) {
            $names = [ "user", "login", "connectionName", "remember" ];
            $data = [ "id", "name", "login", "email" ];
            $cookie = (new Cookies($names, $data))->setCookies($remember, $user, $connectionName);
            (new Session())->setLogin($user);
            return print(json_encode(1));
        }
        return print(json_encode("The password entered does not confer", JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
    } else {
        $data = [
            "name" => "Administrador",
            "login" => "admin",
            "password" => "admin932",
            "email" => "admin@gmail.com",
            "company_id" => 1,
            "active" => 1,
            "user" => "admin",
            "group_id" => 1
        ];
        if(preg_match("/Registration/", (new Database\CreationProcess())->createTable(new User(), $data))
        ){
            echo json_encode("A new user table was created, return logging", JSON_UNESCAPED_UNICODE);
        } else {
            echo json_encode("No login was found informed", JSON_UNESCAPED_UNICODE);
        }
    }
} else {
    echo json_encode("Check the configuration file(.env)", JSON_UNESCAPED_UNICODE);
}
