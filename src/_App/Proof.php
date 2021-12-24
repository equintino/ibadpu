<?php

namespace _App;

use Core\View;

class Proof extends Controller
{
    protected $page = "proof";

    public function __construct()
    {
        parent::__construct();
    }

    public function init(?array $data): void
    {
        $moviments = (new \Models\Moviment())->all(0, 0, "year", "year desc");
        foreach($moviments as $moviment) {
            $years[] = $moviment->year;
        }
        $years = array_unique($years);
        $this->view->setPath("Modals")->render($this->page, [ compact("years") ]);
    }

    public function show(array $data): void
    {
        $id = $data["id"];
        $link = "proof/show/id/{$id}";
        $this->view->setPath("Modals")->render("image", [ compact("link") ]);
    }

    public function showImage(array $data): void
    {
        $id = $data["id"];
        $proof = (new \Models\Proof())->load($id);
        $type = $proof->type;
        header("Content-Type: {$type}");
        echo $proof->image;
    }

    public function month(array $data): ?string
    {
        $where = [ "year" => $data["year"] ];
        $moviments = (new \Models\Moviment())->search($where);
        foreach($moviments as $moviment) {
            $months[] = $moviment->month;
        }
        return print(json_encode(array_unique($months)));
    }

    public function proof(array $data): ?string
    {
        $year = $data["year"];
        $month = $data["month"];
        $where = [ "year" => $year, "month" => $month ];
        $moviments = (new \Models\Moviment())->search($where);
        foreach($moviments as $moviment) {
            if($moviment->output > 0 && $moviment->proof_id === null) {
                $proofs[] = [
                    "description" => $moviment->description,
                    "output" => $moviment->output,
                    "id" => $moviment->id
                ];
            }
        }
        return print(json_encode($proofs));
    }

    public function save(array $data)
    {
        $files = $_FILES["proofs"];
        $ids = $data["ids"];
        $keys = array_keys(array_filter($files["name"]));
        $proofs = new \Models\Proof();
        $moviments = new \Models\Moviment();
        $x=0;
        foreach($keys as $key) {
            $file["name"] = $files["name"][$key];
            $file["type"] = $files["type"][$key];
            $file["size"] = $files["size"][$key];
            $file["tmp_name"] = $files["tmp_name"][$key];
            $proof_id = $proofs->fileSave($file);
            $moviment = $moviments->load($ids[$x++]);
            $moviment->proof_id = $proof_id;
            $moviment->tithe_offer = null;
            $moviment->save();
        }
        return print(json_encode($moviment->message()));
    }
}
