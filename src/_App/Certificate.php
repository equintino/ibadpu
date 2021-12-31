<?php

namespace _App;

use Models\Membership;

class Certificate extends Controller
{
    protected $page = "certificate";

    public function __construct()
    {
        parent::__construct();
    }

    public function init(?array $data): void
    {
        $memberships = (new Membership())->loads($data["ids"]);
        $side = $data["side"];

        $this->view->setPath("Modals")->render("certificate", [ compact("memberships","side") ]);
    }

    public function showImage($data): void
    {
        if(isset($data["id"])) {
            $certificate = (new \Models\Certificate())->load($data["id"]);
            header("Content-Type: {$certificate->type}");
            echo $certificate->image;
        } else {
            alertLatch("No file found","var(--cor-warning)");
        }
    }

    public function validate(array $data)
    {
        $membership = (new Membership())->load($data["id"]);
        $patern = "/^i.{1,5} b.{1,6} do amor de deus$/";
        return print(json_encode(preg_match($patern , mb_strtolower($membership->church_baptism, "UTF-8"))));
    }

    /** disabled button */
    public function validateCertificate($church_baptism, $membershipId = null): ?string
    {
        $patern = "/^i.{1,5} b.{1,6} do amor de deus$/";
        $church_baptism = mb_strtolower($church_baptism, "UTF-8");
        $membership = (new Membership())->load($membershipId);
        if(!preg_match($patern, $church_baptism) && !$membership->certificate_id) {
            $disabled = "disabled";
        } elseif($membership->certificate_id) {
            $disabled = "data-id={$membership->certificate_id}";
        } else {
            $disabled = null;
        }
        return $disabled;
    }

    public function baptizedHere(int $id): bool
    {
        $patern = "/^i.{1,5} b.{1,6} do amor de deus$/";
        $church_baptism = ((new Membership())->load($id)->church_baptism ?? null);
        return preg_match($patern, mb_strtolower($church_baptism, "UTF-8"));
    }

    public function fileSave(array $data, ?int $id)
    {
        return (new \Models\Certificate())->fileSave($data, $id);
    }
}
