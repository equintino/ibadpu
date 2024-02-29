<?php

namespace _App;

use Core\Connect;

class Config extends Controller
{
    protected $page = " config";
    private $config;

    public function __construct()
    {
        parent::__construct();
        $this->config = new \Config\Config();
    }

    public function list(): void
    {
        $config = (object) $this->config;
        $activeConnection = Connect::getConfConnection();
        $this->view->render("config", [ compact("config","activeConnection") ]);
    }

    public function add(): void
    {
        $act = "add";
        $types = $this->config->types;
        ($this->view->setPath("Modals")->render("config", [ compact("act", "types") ]));
    }

    public function edit(array $data): void
    {
        $types = $this->config->types;
        $connectionName = $data["connectionName"];
        $config = $this->config;
        $config->local = $connectionName;

        ($this->view->setPath("Modals")->render("config", [ compact("config", "types") ]));
    }

    public function save(): string
    {
        $params = $this->getPost($_POST);
        $this->config->save($params);
        return print $this->config->message();
    }

    public function update(): string
    {
        $params = $this->getPost($_POST);
        $this->config->update($params);
        return print $this->config->message();
    }

    public function delete(array $data): void
    {
        $this->config->delete($data["connectionName"]);
        echo json_encode($this->config->message());
    }
}
