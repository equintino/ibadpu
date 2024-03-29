<?php

require __DIR__ . "/../../vendor/autoload.php";

use Support\FileTransation;
use Support\Cookies;
use Config\Config;
use Core\Session;
use Models\User;

$login = filter_input(INPUT_POST, "login", FILTER_UNSAFE_RAW);
$password = filter_input(INPUT_POST, "password", FILTER_UNSAFE_RAW);
$remember = filter_input(INPUT_POST, "remember", FILTER_UNSAFE_RAW);
$connectionName = filter_input(INPUT_POST, "connection-name", FILTER_UNSAFE_RAW);

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
        if(empty($data)) {
            $config = new Config();
            $config->setFile("/.admin.ini");
            $data = $config->getFile()["admin"];
        }
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
