<?php

namespace _App;

class Impression extends Controller
{
    protected $page = "imprression";

    public function init(?array $data): void
    {
        $depositTotal = 0;
        $outputTotal = 0;
        $titheTotal = 0;
        $offerTotal = 0;
        $totalBalance = 0;
        $outputDescription = [];
        $previousMonthBalance = (new Moviment())->previousMonthBalance($data);

        $movimentDb = new \Models\Moviment();
        $search = [
            "month" => monthToNumber($data["month"]),
            "year" => $data["year"]
        ];

        foreach ($movimentDb->search($search) as $row) {
            $output = $row->output;
            $depositTotal += $row->deposit;
            $outputTotal += $output;
            if ($output > 0) {
                $outputDescription[] = [ $row->description, formatCurrency($row->output) ];
            }

            $titheTotal += ($row->tithe_offer === "diz" ? $row->deposit : 0);
            $offerTotal += ($row->tithe_offer === "ofe" ? $row->deposit : 0);
        }

        $totalBalance = formatCurrency($depositTotal - $outputTotal + $previousMonthBalance);
        $month = $data["month"];
        $year = $data["year"];
        $titles = [ "DESCRIÇÃO","ENTRADA","SAÍDA" ];
        $titheTotal = formatCurrency($titheTotal);
        $offerTotal = formatCurrency($offerTotal);
        $depositTotal = formatCurrency($depositTotal);
        $outputTotal = formatCurrency($outputTotal);
        $this->view->setPath("Modals")->render("impression", [
            compact("depositTotal","titheTotal", "offerTotal",
            "outputTotal", "titles", "outputDescription", "totalBalance",
            "month","year")
        ]);
    }

    public function previousPrint(array $data): void
    {
        $this->view->setPath("Modals")->render("impression", [ $data ]);
    }

    private function numberMonth(string $name, bool $key=false)
    {
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
        return $key ? array_search($name, $months) : (int) $months[$name];
    }
}
