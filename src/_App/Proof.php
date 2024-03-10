<?php

namespace _App;

class Proof extends Controller
{
    protected $page = "proof";

    public function init (?array $data): void
    {
        $movimentDb = new \Models\Moviment();
        $moviments = $movimentDb->activeAll(0, 0, "year", "year desc");
        if (!is_array($moviments) && preg_match("/doesn't exist/", $moviments)) {
            $movimentDb->createThisTable();
        } else {
            if (!empty($moviments)) {
                foreach ($moviments as $moviment) {
                    $years[] = $moviment->year;
                }
            }
        }
        $years = (!empty($years) ? array_unique($years) : null);
        $this->view->render($this->page, [ compact("years") ]);
    }

    public function edit (array $data)
    {
        $moviment = (new \Models\Moviment())->load($data['id']);
        if ($data['proof_id'] != 'null') {
            $proof = (new \Models\Proof())->load($data['proof_id']);
        }
        $this->view->setPath('Modals')->render($this->page, [ compact('moviment', 'proof') ]);
    }

    public function show (array $data): void
    {
        $id = $data["id"];
        $link = "proof/show/id/{$id}";
        $this->view->setPath("Modals")->render("image", [ compact("link") ]);
    }

    public function showImage (array $data): void
    {
        $id = $data["id"];
        $proof = (new \Models\Proof())->load($id);
        $type = $proof->type;
        header("Content-Type: {$type}");
        echo $proof->image;
    }

    public function month (array $data): ?string
    {
        $months = [];
        $where = [ "year" => $data["year"] ];
        $moviments = (new \Models\Moviment())->search($where);
        foreach ($moviments as $moviment) {
            $months[] = $moviment->month;
        }
        $unique = array_unique($months);
        sort($unique);
        return print !empty($unique) ? json_encode($unique) : null;
    }

    public function proof (array $data): ?string
    {
        $year = $data["year"];
        $month = $data["month"];
        $where = [ "year" => $year, "month" => $month ];
        $moviments = (new \Models\Moviment())->search($where);
        foreach ($moviments as $moviment) {
            if ($moviment->output > 0 && $moviment->proof_id === null) {
                $proofs[] = [
                    "description" => $moviment->description,
                    "output" => $moviment->output,
                    "id" => $moviment->id
                ];
            }
        }
        return print json_encode($proofs);
    }

    public function saveProof (array $data): string
    {
        $proof = new \Models\Proof();
        if ($data['proof_id']) {
            $proof->fileSave($_FILES['proofs'], $data['proof_id']);
        } else {
            $proof_id = $proof->fileSave($_FILES['proofs']);
            if (!empty($data['id'])) {
                $moviment = (new \Models\Moviment())->load($data['id']);
            }
            $moviment->proof_id = $proof_id;
            $moviment->save();
        }
        return print $proof->message();
    }

    public function save (array $data)
    {
        $files = $_FILES["proofs"];
        $ids = json_decode($data["data"]);
        $keys = array_keys(array_filter($files["name"]));
        $proofs = new \Models\Proof();
        $moviments = new \Models\Moviment();

        foreach ($keys as $key) {
            $file["name"] = $files["name"][$key];
            $file["type"] = $files["type"][$key];
            $file["size"] = $files["size"][$key];
            $file["tmp_name"] = $files["tmp_name"][$key];
            $proof_id = $proofs->fileSave($file);
            foreach ($ids as $id) {
                if ($id->name === $files['name'][$key]) {
                    $moviment = $moviments->load($id->id);
                }
            }
            $moviment->proof_id = $proof_id;
            $moviment->tithe_offer = null;
            $moviment->save();
        }

        return print json_encode($moviment->message());
    }

    public function delete (array $data): ?string
    {
        $proof = (new \Models\Proof())->load($data['id']);
        if ($proof) {
            return $proof->destroy();
        }
    }
}
