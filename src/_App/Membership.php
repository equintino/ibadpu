<?php

namespace _App;

use Models\Photo;

class Membership extends Controller
{
    protected $page = "membership";
    private $certificate;

    public function __construct()
    {
        parent::__construct();
        $this->certificate = new Certificate();
    }

    public function init(?array $data): void
    {
        $membership = (new \Models\Membership())->all(0);
        if(!is_array($membership) &&  preg_match("/doesn't exist/", $membership)) {
            if((new \Models\Membership())->createThisTable()) {
                alertLatch("Created new table, try again");
            }
        } else {
            $certificate = $this->certificate;
            $this->view->render($this->page, [ compact("membership","certificate") ]);
        }
    }

    public function show()
    {
        $list = $this->list();
        if(!is_array($list) &&  preg_match("/doesn't exist/", $list)) {
            if((new \Models\Membership())->createThisTable()) {
                alertLatch("Created new table, try again");
            }
        } else {
            $this->view->setPath("Modals")->render("membership", [ compact("list") ]);
        }
    }

    public function register(array $data): void
    {
        $id = $data["id"];
        $certificate = $this->certificate;
        $membership = (new \Models\Membership())->load($id);
        $newRegister = $this->newRegister();
        $occupations = (new \Models\Occupation())->activeAll(0);
        $act = "cad";
        $this->view->setPath("Modals")->render("register", [ compact("act","membership","occupations","newRegister","certificate") ]);
    }

    public function list()
    {
        $membership = (new \Models\Membership())->all(0,0,"id,name");
        foreach($membership as $member) {
            $list[] = $member->name;
        }
        return print(json_encode($list));
    }

    public function update(array $data): ?string
    {
        $membership = new \Models\Membership();
        if(!empty($_FILES["file"])) {
            $id = (empty($data["photo_id"]) ? 0 : $data["photo_id"]);
            $photo_id = $this->updatePhoto($id);
            if(!empty($photo_id) && is_numeric($photo_id)) {
                $data["photo_id"] = $photo_id;
            } else {
                alertLatch("Could not save the photo", "var(--car-danger)");
                return null;
            }
        }
        if($_FILES["certificate"]["error"] === 0) {
            $id = (!empty($data["certificate_id"]) ? $data["certificate_id"] : null);
            $certificate_id = $this->updateCertificate($id);
            if(!empty($certificate_id) && is_numeric($certificate_id)) {
                $data["certificate_id"] = $certificate_id;
            } else {
                alertLatch("Could not save the certificate", "var(--car-danger)");
                return null;
            }
        } else {
            unset($data["certificate_id"]);
        }
        unset($data["file"]);
        $membership->bootstrap($this->validate($data));
        $membership->save();
        return print(json_encode($membership->message()));
    }

    public function validate(array $data)
    {
        $field = [
            "photo_id" => 0,
            "birth_date" => null,
            "wedding" => null,
            "baptism" => null,
            "entrance" => null
        ];
        foreach($data as $k => $v) {
            if(array_key_exists($k, $field) && $v === "") {
                $data[$k] = $field[$k];
            }
        }
        return $data;
    }

    private function updatePhoto(int $photo_id)
    {
        $photo = new Photo();
        return $photo->fileSave($_FILES["file"], $photo_id);
    }

    private function updateCertificate(?int $certificate_id)
    {
        return $this->certificate->fileSave($_FILES["certificate"], $certificate_id);
    }

    private function newRegister(): int
    {
        $membership = (new \Models\Membership())->all(0,0,"id,register","register desc")[0]->register;
        return date("Y") . str_pad(substr($membership,4)+1, "3", "0", STR_PAD_LEFT);
    }
}
