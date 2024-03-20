<?php

namespace _App;

use Models\Balance;

class Moviment extends Controller
{
    protected $page = "moviment";

    public function init (?array $data): void
    {
        $params = [];
        $limit = 30;
        $totalPage = $this->totalPage($limit);
        $pageNumber = ($data["page"] ?? $totalPage);
        $offset = ($pageNumber - 1) * $limit;
        $balance = (new Balance())->activeAll($limit, $offset, "*", "year asc, id asc");
        $pattern = "/doesn't exist/";
        if (!is_array($balance) &&  preg_match($pattern, $balance)) {
            (new Balance())->createThisTable();
        }
        $params = [ $balance, compact("pageNumber", "limit", 'totalPage') ];
        $this->view->render($this->page, $params);
    }

    private function totalPage (int $limit): int
    {
        $num = (new Balance())->rows() / $limit;
        return ceil($num);
    }

    public function new (): void
    {
        $act = "new";
        $balanceDb = new \Models\Balance();
        $data = $balanceDb->activeAll();
        if (is_string($data) && preg_match("/doesn't exist/", $data)) {
            $balanceDb->createThisTable();
        }
        $balance = $balanceDb->lastMonth();
        $date = (
            $balance ? explode("-",(new \DateTime("{$balance->year}-"
            . monthToNumber($balance->month)))->modify("+1 month")->format("m-Y")) : null
        );
        $month = (
            is_array($date) ?
                mb_strtoupper($this->numberMonth($date[0]))
                : mb_strtoupper($this->numberMonth(date("m"))));
        $year = ($date[1] ?? date("Y"));

        $this->view->render("moviment", [ compact("month", "year", "act") ]);
    }

    public function add (array $data)
    {
        $moviment = new \Models\Moviment();

        $value = formatReal($data["value"]);
        $data["month"] = monthToNumber($data["month"]);
        $data["date"] = $data["year"] . "-" . $data["month"] . "-" . $data["day"];
        $data["deposit"] = ($data["in_out"] === "deposit" ? $value : "0.0");
        if ($data["in_out"] === "output") {
            $data["output"] = $value;
            $data["tithe_offer"] = "";
            if (!empty($_FILES['proofs']['name'])) {
                $proof_id = (new \Models\Proof())->fileSave($_FILES['proofs']);
                $data['proof_id'] = $proof_id;
            }
        } else {
            $data["output"] = "0.0";
        }
        foreach ($data as $k => $v) {
            if (preg_match("/^description-/", $k)) {
                unset($data[$k]);
                $data['description'] = $v;
            }
        }
        unset($data["day"], $data["in_out"], $data["value"]);
        $moviment->bootstrap($data);
        $moviment->save();

        return print $moviment->message();
    }

    public function load (array $data): string
    {
        $moviments = (new \Models\Moviment())->load($data['id']);
        $moviment = [
            'id' => $moviments->id,
            'proof_id' => $moviments->proof_id,
            'description' => $moviments->description,
            'output' => $moviments->output
        ];
        return print json_encode($moviment);
    }

    public function save(array $data)
    {
        $data = json_decode($data['data']);
        $search = [
            "month" => monthToNumber(strToLower($data->month)),
            "year" => $data->year
        ];
        $previousMonthBalance = $this->previousMonthBalance($search);
        $moviments = (new \Models\Moviment())->search($search);

        $depositTotal = $previousMonthBalance;
        $outputTotal = 0;

        if (empty($moviments)) {
            return print json_encode("No movement was made for the month");
        }
        foreach ($moviments as $moviment) {
            $deposit = ($moviment->deposit ?? "0");
            $output = ($moviment->output ?? "0");
            $depositTotal += $deposit;
            $outputTotal += $output;
        }
        $totalBalance = $depositTotal - $outputTotal;
        $balance = new Balance();
        $dataBalance = [
            "year" => $data->year,
            "month" => strToLower($data->month),
            "balance" => $totalBalance
        ];
        $balance->bootstrap($dataBalance);
        $balance->save();

        return print $balance->message();
    }

    public function update(array $data): string
    {
        $movimentDb = new \Models\Moviment();
        $changes = json_decode($data["changes"]);
        foreach ($changes as $change) {
            $name = explode('-', $change->name)[0];
            $datas[$change->id][$name] = $change->value;
        }
        $ids = array_keys($datas);
        for ($x = 0; $x < count($ids); $x++) {
            $moviment = $movimentDb->load($ids[$x]);
            foreach ($datas[$ids[$x]] as $k => $v) {
                if ($k === "day") {
                    $date = explode("-", $moviment->date);
                    $moviment->date = "{$date[0]}-{$date[1]}-{$v}";
                } elseif ($k === "deposit" || $k === "output") {
                    $moviment->$k = formatReal($v);
                } else {
                    $moviment->$k = $v;
                }
            }
            $moviment->save();
            $resp[] = $moviment->message();
        }

        return print $moviment->message();
    }

    public function delete(array $data): string
    {
        $moviment = (new \Models\Moviment())->load($data["id"]);
        $moviment->destroy();
        return print $moviment->message();
    }

    public function balance(?array $data): void
    {
        $previousMonthBalance = $this->previousMonthBalance($data);
        $moviment = new \Models\Moviment();
        $search = [
            "month" => monthToNumber($data["month"]),
            "year" => $data["year"]
        ];
        $all[] = [ "previousMonthBalance" => $previousMonthBalance ];
        if (!is_object($moviment->load(1)) && preg_match("/doesn't exist/", $moviment->load(1))) {
            $moviment->createThisTable();
        }
        foreach ($moviment->search($search, 'date') as $value) {
            $dataDb["id"] = $value->id;
            $dataDb["year"] = $value->year;
            $dataDb["month"] = $value->month;
            $dataDb["description"] = $value->description;
            $dataDb["deposit"] = formatCurrency($value->deposit);
            $dataDb["output"] = formatCurrency($value->output);
            $dataDb["date"] = $value->date;
            $dataDb["tithe_offer"] = $value->tithe_offer;
            $dataDb["proof_id"] = $value->proof_id;
            $all[] = $dataDb;
        }
        echo json_encode($all);
    }

    public function summarie (array $data): void
    {
        $params = $_POST;
        $previousMonthBalance = (float) ($params["previousMonthBalance"]);
        unset($params[0]);

        $vlrTotal = $this->sumValues($params);
        $totalBalance = $vlrTotal["depositTotal"] - $vlrTotal["outputTotal"] + $previousMonthBalance;

        $titles = [ "DESCRIÇÃO","ENTRADA","SAÍDA" ];

        $titheTotal = formatCurrency($vlrTotal["titheTotal"]);
        $offerTotal = formatCurrency($vlrTotal["offerTotal"]);
        $depositTotal = formatCurrency($vlrTotal["depositTotal"]);
        $outputTotal = formatCurrency($vlrTotal["outputTotal"]);

        $totalBalance = formatCurrency($totalBalance);
        $outputDescription = $vlrTotal["outputDescription"];

        $this->view->setPath("Modals")->render("summarie", [
            $params,
            compact(
                "depositTotal","titheTotal", "offerTotal", "outputTotal",
                "titles", "outputDescription", "totalBalance","month","year"
            )
        ]);
    }

    public function previousMonthBalance(array $data): float
    {
        $month = (!is_numeric($data["month"]) ? $this->numberMonth($data["month"]) : $data["month"]);
        $dateCurrent = (new \DateTime($data["year"] . "-" . $month))->modify("-1 month");
        $search = [
            "month" => $this->numberMonth($dateCurrent->format("m"),true),
            "year" => $dateCurrent->format("Y")
        ];

        return (new \Models\Balance())->search($search)[0]->balance;
    }

    private function sumValues(array $vlr): ?array
    {
        $depositTotal = 0;
        $outputTotal = 0;
        $titheTotal = 0;
        $offerTotal = 0;
        foreach ($vlr as $k => $row) {
            $output = preg_match("/^output/", $k) ? formatReal($row) : 0;
            $depositTotal += preg_match("/^deposit/", $k) ? formatReal($row) : 0;
            $outputTotal += $output;
            if($output > 0) {
                $description  = $vlr['description-' . explode('-',$k)[1]];
                $outputDescription[] = [$description, formatCurrency($output)];
            }

            if (preg_match("/^tithe_offe/", $k) && $row === 'diz') {
                $titheTotal += formatReal($vlr['deposit-' . explode('-',$k)[1]]);
            }
            if (preg_match("/^tithe_offe/", $k) && $row === 'ofe') {
                $offerTotal += formatReal($vlr['deposit-' . explode('-',$k)[1]]);
            }
        }

        return [
            "depositTotal" => $depositTotal,
            "outputTotal" => $outputTotal,
            "outputDescription" => $outputDescription,
            "titheTotal" => $titheTotal,
            "offerTotal" => $offerTotal
        ];
    }

    private function numberMonth(string $name, bool $key=false)
    {
        $name = mb_strToLower($name);
        $months = [
            "janeiro" => "01",
            "fevereiro" => "02",
            "março" => "03",
            "abril" => "04",
            "maio" => "05",
            "junho" => "06",
            "julho" => "07",
            "agosto" => "08",
            "setembro" => "09",
            "outubro" => "10",
            "novembro" => "11",
            "dezembro" => "12"
        ];

        return is_numeric($name) ? array_search($name, $months) : (int) $months[$name];
    }
}
