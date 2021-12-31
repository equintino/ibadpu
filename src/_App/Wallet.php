<?php

namespace _App;

class Wallet extends Controller
{
    protected $page = "wallet";

    public function __construct()
    {
        parent::__construct();
    }

    public function init(?array $data): void
    {
        $x = 0;
        $ids = ($data["members_ids"] ?? null);
        $memberships = [];
        $membershipDb = new \Models\Membership();
        $occupation = new \Models\Occupation();

        if(!empty($ids)) {
            foreach($ids as $id) {
                $memberships[] = $membershipDb->load($id);
            }
        }

        $date = new \DateTime("now");
        $year1 = $date->format("Y");
        $year2 = $date->modify("+1 year")->format("Y");
        $year3 = $date->modify("+1 year")->format("Y");
        $year4 = $date->modify("+1 year")->format("Y");
        $this->view->setPath("Modals")->render("wallet", [ compact("memberships","year1","year2","year3","year4","x","occupation") ]);
    }
}
