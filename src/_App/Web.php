<?php

namespace _App;

use Config\Config;
use Traits\AuthTrait;

class Web extends Controller
{
    use AuthTrait;

    public function start(): void
    {
        $route = filter_input(INPUT_GET, "route", FILTER_UNSAFE_RAW);
        $version = $this->version();
        $config = new Config();
        $connectionList = array_keys($config->getFile());
        $login = filter_input(INPUT_COOKIE, "login", FILTER_UNSAFE_RAW);
        $connectionName= filter_input(INPUT_COOKIE, "connectionName", FILTER_UNSAFE_RAW);
        $checked = filter_input(INPUT_COOKIE, "remember", FILTER_UNSAFE_RAW);

        if (empty($connectionList)) {
            $initializing = true;
            echo "<script>var initializing = {$initializing}</script>";
        }

        if ( (!empty($route) && (!empty($_SESSION["login"]) || empty($connectionList))) || $route === "/token" ) {
            $types = $config->types;
            $act = "add";
            $this->view->setPath("Modals")->render($route, [ compact("login", "types", "act") ]);
        } else {
            $this->view->setPath("public")->render("login", [
                compact("version","connectionList","login","connectionName","checked")
            ]);
        }
    }

    public function init()
    {
        $logged = ucfirst($_SESSION["login"]->login);
        $month = date("m");
        echo "<script>var logged='{$logged}'</script>";
        $this->view->insertTheme();
    }

    public function home(): void
    {
        $page = "home";
        $this->view->render("home", [ compact("page") ]);
    }

    public function error($data): void
    {
        $errcode = $data["errcode"];
        $this->view->render("error", [ compact("errcode") ]);
    }

    public function version(): string
    {
        $file = __DIR__ . "/../../version";
        if (file_exists($file)) {
            foreach (file($file) as $row) {
                if (!preg_match("/^#/", $row)) {
                    return $row;
                }
            }
        }
    }
}
