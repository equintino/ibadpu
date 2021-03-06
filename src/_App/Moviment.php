<?php

namespace _App;

use Models\Balance;

class Moviment extends Controller
{
    protected $page = "moviment";

    public function __construct()
    {
        parent::__construct();
    }

    public function init(?array $data): void
    {
        //$this->prepareSql();
        $params = [];
        $limit = 30;
        $pageNumber = ($data["page"] ?? 1);
        $offset = ($pageNumber - 1) * $limit;
        $balance = (new Balance())->all($limit, $offset, "*", "year desc, id asc");
        if(!is_array($balance) &&  preg_match("/doesn't exist/", $balance)) {
            (new Balance())->createThisTable();
        }
        $params = [ $balance, compact("pageNumber", "limit") ];
        $this->view->render($this->page, $params);
    }

    public function new(): void
    {
        $act = "new";
        $balanceDb = new \Models\Balance();
        if(preg_match("/doesn't exist/", ($balanceDb->all(0)))) {
            $balanceDb->createThisTable();
        }
        $balance = $balanceDb->lastMonth();
        $date = ($balance ? explode("-",(new \DateTime("{$balance->year}-" . monthToNumber($balance->month)))->modify("+1 month")->format("m-Y")) : null);
        $month = (is_array($date) ? mb_strtoupper($this->numberMonth($date[0])) : mb_strtoupper($this->numberMonth(date("m"))));
        $year = ($date[1] ?? date("Y"));

        $this->view->render("moviment", [ compact("month", "year", "act") ]);
    }

    public function add(array $data)
    {
        $moviment = new \Models\Moviment();

        $value = formatReal($data["value"]);
        $data["month"] = monthToNumber($data["month"]);
        $data["date"] = $data["year"] . "-" . $data["month"] . "-" . $data["day"];
        $data["deposit"] = ($data["in_out"] === "deposit" ? $value : "0.0");
        if($data["in_out"] === "output") {
            $data["output"] = $value;
            $data["tithe_offer"] = "";
        } else {
            $data["output"] = "0.0";
        }
        unset($data["day"], $data["in_out"], $data["value"]);
        $moviment->bootstrap($data);
        $moviment->save();

        return print(json_encode($moviment->message()));
    }

    public function save(array $data)
    {
        $search = [
            "month" => monthToNumber(strToLower($data["month"])),
            "year" => $data["year"]
        ];
        $previousMonthBalance = $this->previousMonthBalance($search);
        $moviments = (new \Models\Moviment())->search($search);

        $depositTotal = $previousMonthBalance;
        $outputTotal = 0;

        if(empty($moviments)) {
            return print(json_encode("No movement was made for the month"));
        }
        foreach($moviments as $moviment) {
            $deposit = ($moviment->deposit ?? "0");
            $output = ($moviment->output ?? "0");
            $depositTotal += $deposit;
            $outputTotal += $output;
        }
        $totalBalance = $depositTotal - $outputTotal;
        $balance = new Balance();
        $dataBalance = [
            "year" => $data["year"],
            "month" => strToLower($data["month"]),
            "balance" => $totalBalance
        ];
        $balance->bootstrap($dataBalance);
        $balance->save();

        return print(json_encode($balance->message()));
    }

    public function update(array $data)
    {
        $movimentDb = new \Models\Moviment();
        $changes = $data["changes"];
        foreach($changes as $change) {
            $datas[$change["id"]][$change["name"]] = $change["value"];
        }
        $ids = array_keys($datas);
        for($x = 0; $x < count($ids); $x++) {
            $moviment = $movimentDb->load($ids[$x]);
            foreach($datas[$ids[$x]] as $k => $v) {
                if($k === "day") {
                    $date = explode("-", $moviment->date);
                    $moviment->date = "{$date[0]}-{$date[1]}-{$v}";
                } elseif($k === "deposit" || $k === "output") {
                    $moviment->$k = formatReal($v);
                } else {
                    $moviment->$k = $v;
                }
            }
            $moviment->save();
            $resp[] = $moviment->message();
        }
        // return print(json_encode($resp));
        return print(json_encode($moviment->message()));
    }

    public function delete(array $data)
    {
        $moviment = (new \Models\Moviment())->load($data["id"]);
        $moviment->destroy();
        return print(json_encode($moviment->message()));
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
        if(!is_object($moviment->load(1)) && preg_match("/doesn't exist/", $moviment->load(1))) {
            $moviment->createThisTable();
        }
        foreach($moviment->search($search) as $value) {
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

    public function summarie(array $data)
    {
        $params = $_POST["data"];
        $previousMonthBalance = (float) ($params[0]["previousMonthBalance"]);
        unset($params[0]);

        $vlrTotal = $this->sumValues($params);
        $totalBalance = $vlrTotal["depositTotal"] - $vlrTotal["outputTotal"] + $previousMonthBalance;
        $dateArr = explode("-",$params[1]["date"]);
        $month = strtoupper(monthToNumber($dateArr[1], true));
        $year = $dateArr[0];
        $titles = [ "DESCRI????O","ENTRADA","SA??DA" ];

        $titheTotal = formatCurrency($vlrTotal["titheTotal"]);
        $offerTotal = formatCurrency($vlrTotal["offerTotal"]);
        $depositTotal = formatCurrency($vlrTotal["depositTotal"]);
        $outputTotal = formatCurrency($vlrTotal["outputTotal"]);

        $totalBalance = formatCurrency($totalBalance);
        $outputDescription = $vlrTotal["outputDescription"];

        $this->view->setPath("Modals")->render("summarie", [ $params, compact("depositTotal","titheTotal", "offerTotal", "outputTotal", "titles", "outputDescription", "totalBalance","month","year") ]);
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
        foreach($vlr as $row) {
            $output = formatReal($row["output"]);
            $depositTotal += formatReal($row["deposit"]);
            $outputTotal += $output;
            if($output > 0) {
                $outputDescription[] = [$row["description"], $row["output"]];
            }

            $titheTotal += ($row["tithe_offer"] === "diz" ? formatReal($row["deposit"]) : 0);
            $offerTotal += ($row["tithe_offer"] === "ofe" ? formatReal($row["deposit"]) : 0);
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
        $name = strToLower($name);
        $months = [
            "janeiro" => "01",
            "fevereiro" => "02",
            "mar??o" => "03",
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

        return (is_numeric($name) ? array_search($name, $months) : (int) $months[$name]);
    }

    private function prepareSql()
    {
        $sql = "(1, 'Ana Carolina da Silva', '2011-11-20', '2011-11-20', '3069-2405', '0000-00-00', '', 'I. B. Eben??zer', 'Solteira', '', 'M??dio incompleto', '30.955.557-1', 'Daniel Jos?? da Silva', 'Bonsucesso', '98036-5035', 'Femenino', 'Maria da Luz da Silva', '21044-020', 'RJ', 'Rio de Janeiro', 'Estudante', 'Rio de Janeiro', '180.429.627-97', '1999-09-22', 'I. B. Eben??zer', 'Rua', 'Ant??nio de Assis', 4, '', '', '0', NULL, '1567870235', 'imagens/fotos/Ana Carolina.jpg', NULL),
        (2, 'Aventino Quintino da Silva', '1950-10-01', '1985-04-16', '2671-1401', '1963-03-07', 'Maria Jos?? Messias Quintino', 'I. B. do Itagua??', 'Casado', '', 'Fundamental completo', '020828671-6', 'Arlindo Quintino', 'Parque Felicidade', '99161-0009', 'Masculino', 'Concei????o Maria de Jesus', '2508-150', 'RJ', 'Esp??rito Santo', 'Reformado', 'Duque de Caxias', '074.916.037-34', '1935-07-27', 'I. B. Eben??zer', 'Rua', 'Candido Mendes', 348, 'Casa 2', '', '0', NULL, '1516142874', 'imagens/fotos/Pr Aventino.jpg', 'documentos/certificados/aventino.jpg'),
        (3, 'Bebiana Neves de Mello Farias', '2015-10-12', '2015-10-12', '2290-9334', '2000-01-29', 'Marcus Vin??cius Farias', 'I. B. do Amor de Deus', 'Casada', '', 'M??dio Completo', '12.245.129-7', 'Themistocles Jos?? de Mello', 'Bonsucesso', '98344-6167', 'Femenino', 'Marly Neves de Mello', '21044-465', 'RJ', 'Rio de Janeiro', 'Do lar', 'Rio de Janeiro', '086.201.737-82', '1980-01-22', 'I. B. do Amor de Deus', 'Rua', 'Rio Preto', 16, ' PU', '', '0', NULL, '1516535423', 'imagens/fotos/Bebiana.jpg', ''),
        (4, 'Bianca Ramos de Oliveira', '2015-10-12', '2015-10-12', '', '0000-00-00', '', 'I. B. do Amor de Deus', 'Divorciada', '1,00266E+11', 'Superior Incompleto', '11.952.804-0', 'N??o declarado', 'Bonsucesso', '99534-2433', NULL, 'Maria Luiza Ramos', '21044-230', 'RJ', 'Ninopoles', 'Aux. de Empalagem', 'Rio de Janeiro', '053.163.747-62', '1987-03-26', 'I. B. do Amor de Deus', 'Rua', 'Tiradentes', 26, ' apt 101 - PU', '', '0', NULL, '1514663621', 'imagens/fotos/Bianca.jpg', NULL),
        (5, 'Bianca Sabrina de Assis Quintino', '2004-05-20', '2004-04-20', '3868-0189', '2013-05-10', 'Natanael Peixoto Quintino', 'I. B. Eben??zer', 'Casada', '1508 8368 0345', 'Superior Incompleto', '22.390.961-5', 'Germano Pereira de Assis', 'Nova Campinas', '97404-9887', NULL, 'Joselha da Silva de Assis', '25268-220', 'RJ', 'Niter??i', 'Modelo', 'Duque de Caxias', '122.597.147-06', '1994-05-03', 'I. B. Eben??zer', 'Rua', 'A', 3, 'Area 4(ilha)', '', '0', NULL, '1514663669', 'imagens/fotos/Bianca Sabrina.jpg', NULL),
        (6, 'Daniel Jos?? da Silva', '1989-11-08', '1989-11-08', '3069-2405', '0000-00-00', '', 'I. B. Eben??zer', 'Solteiro', '314919808-76', 'Analfabeto', '1330537', 'Ant??nio Jos?? da Silva', 'Bonsucesso', '', 'Masculino', 'Severina Belarmina da Silva', '21044-020', 'RJ', 'Recife', 'Aut??nomo', 'Rio de Janeiro', '757.444.147-20', '1952-06-20', 'I. B. Eben??zer', 'Rua', 'Ant??nio de Assis', 4, '', '', '0', NULL, '1514664015', 'imagens/fotos/Daniel.jpg', NULL),
        (7, 'Edmilson Messias Quintino', '1980-03-30', '1980-03-30', '2671-3390', '1988-11-05', 'M??nica Cristina Peixoto Quintino', 'I. B. Eben??zer', 'Casado', '427603103-37', 'Superior completo', '07.487.904-0', 'Aventino Quintino da Silva', 'Parque Felicidade', '96887-5212', 'Masculino', 'Maria Jos?? Messias Quintino', '25080-150', 'RJ', 'Rio e Janeiro', 'Analista de rede', 'Duque de Caxias', '956.107.107-15', '1967-08-24', 'I. B. Eben??zer', 'Rua', 'Candido Mendes', 348, 'Casa 2', 'edmquintino@gmail.com', '0', NULL, '1514664062', 'imagens/fotos/Edmilson.jpg', NULL),
        (8, 'Jorge Machado da Silva', '2010-09-26', '2010-09-26', '', '2009-03-27', 'Rosane dos Reis da Silva', 'I. B. Eben??zer', 'Casado', '8051120370', 'Fundamental incompleto', '05621767-2', 'Orlando Machado da Silva', 'Encan', '', 'Masculino', 'Cyrene Machado da Silva', '20756-060', 'RJ', '', 'Vigia', 'Rio de Janeiro', '409.300.687-34', '1957-08-19', 'I. B. Eben??zer', 'Rua', 'Guilhermina', 366, 'Casa 366', '', '0', NULL, '1514664138', 'imagens/fotos/Jorge.jpg', NULL),
        (9, 'Jos?? Germano Pereira de Assis', '1993-10-31', '1993-10-31', '3868-0189', '1993-12-10', 'Joselha da Silva de Assis', 'I. B. Eben??zer', 'Casado', '', 'M??dio completo', '07364553-3', 'Jos?? Gon??alves de Assis', 'Nova Campinas', '98725-8140', 'Masculino', 'Odivalda Pereira de Oliveira', '25268-220', 'RJ', 'Jo??o Pessoa', 'Vendedor', 'Duque de Caxias', '871.400.637-53', '1967-05-17', 'I. B. Eben??zer', 'Av', 'A', 3, 'Area 4(ilha)', '', '0', NULL, '1514664167', 'imagens/fotos/Germano.jpg', NULL),
        (10, 'Joselha da Silva de Assis', '1990-12-31', '1990-12-31', '3868-0189', '1993-12-10', 'Jos?? Germano Pereira de Assis', 'I. B. Eben??zer', 'Casada', '8233340396', 'M??dio completo', '08849150-1', 'Reinaldo Maranh??o da Silva', 'Nova Campinas', '99414-3369', NULL, 'Esmeraldina Peixe da Silva', '25268-220', 'RJ', 'Rio de Janeiro', 'Diarista', 'Duque de Caxias', '910.652.167-34', '1966-04-10', 'I. B. Eben??zer', 'Av', 'A', 3, 'Area 4(ilha)', '', '0', NULL, '1514664199', 'imagens/fotos/Joselha.jpg', NULL),
        (11, 'Karen Carolina Quintino da Silva', '2005-12-04', '2005-12-04', '3069-2405', '0000-00-00', 'Lucas Jos?? da Silva', 'I. B. Eben??zer', 'Casada', '1,58896E+11', 'Superior completo', '28702427-7', 'Edmilson Messias Quintino', 'Bonsucesso', '97630-2776', 'Femenino', 'M??nica Cristina Peixoto Quintino', '21044-020', 'RJ', 'Duque de Caxias', 'Professora de dan??a', 'Rio de Janeiro', '158.699.727-01', '1996-02-07', 'I. B. Eben??zer', 'Rua', 'Ant??nio de Assis', 4, '', 'karen.carolina96@hotmail.com', '0', NULL, '1514664229', 'imagens/fotos/Karen.jpg', NULL),
        (12, 'Lilian Carolina do Nascimento Pereira', '2018-10-12', '2018-10-12', '3105-5515', '0000-00-00', '', 'I. B. do AMOR de DEUS', 'Solteira', '', 'M??dio Incompleto', '24.158.727-8', 'Jo??o Francisco Pereira', 'Bonsucesso', '21373370459', 'Femenino', 'Eliete Bento do Nascimento', '21044-360', 'RJ', 'Rio de Janeiro', 'Vendedora', 'Rio de Janeiro', '', '1989-03-20', 'I. B. do AMOR de DEUS', 'Rua', 'Conquista', 9, 'PU', '', '0', NULL, '1539903895', 'imagens/fotos/Lilian.jpg', NULL),
        (13, 'Lucas Jos?? da Silva', '2008-07-27', '2008-07-27', '3069-2405', '0000-00-00', 'Karen Carolina Quintino da Silva', 'I. B. Eben??zer', 'Casado', '96160302', 'M??dio Completo', '29.345.436-9', 'Daniel Jos?? da Silva', 'Bonsucesso', '96590-3940', 'Masculino', 'Maria da Luz da Silva', '21044-020', 'RJ', 'Rio de Janeiro', 'Jovem Aprendiz', 'Rio de Janeiro', '062.008.437-59', '1996-02-28', 'I. B. Eben??zer', 'Rua', 'Ant??nio de Assis', 4, '', 'jacks2kar@gmail.com', '0', NULL, '1514664343', 'imagens/fotos/Lucas Jose.jpg', NULL),
        (14, 'Luciene Rodrigues Rocha dos Santos', '2001-11-18', '0000-00-00', '3156-7780', '0000-00-00', '', 'Assembl??ia de Deus', 'Vi??va', '', 'M??dio Completo', '12.253.021-5', 'Alu??sio de Souza Rocha', 'Campo Grande', '99249-9532', NULL, 'S??nia Maria Rodrigues', '23085-550', 'RJ', 'Rio de Janeiro', 'Encarregada', 'Rio de Janeiro', '025.529.207-48', '1972-10-09', 'Assembl??ia de Deus', 'Rua', 'Senhora', 497, 'Fundos', '', '0', NULL, '1514664402', 'imagens/fotos/Luciene.jpg', NULL),
        (15, 'Maria da Luz da Silva', '1998-11-08', '1998-11-08', '3069-2405', '0000-00-00', '', 'I. B. Eben??zer', 'Solteira', '', 'Primeiro', '09.223.963-1', 'Pedro Valdevino da Silva', 'Bonsucesso', '', 'Femenino', 'Maria das Neves da Concei????o', '21044-020', 'RJ', 'Para??ba', 'Do lar', 'Rio de Janeiro', '014.190.547-67', '1964-03-22', 'I. B. Eben??zer', 'Rua', 'Ant??nio de Assis', 4, '', '', '0', NULL, '1514664460', 'imagens/fotos/Maria da Luz.jpg', NULL),
        (16, 'Maria do Socorro de Brito', '1998-11-08', '1998-11-08', '3105-3055', '0000-00-00', '', 'I. B. Eben??zer', 'Solteira', '140389012-01', '5a. S??rie', '1623435', 'Manuel Cosme de Brito', 'Bonsucesso', '97311-1994', 'Femenino', 'Maria Vieira da Silva', '21043-350', 'RJ', 'Para??ba', 'Do lar', 'Rio de janeiro', '770.453.604-44', '1959-04-07', 'C. Renovada', 'Rua', 'da Praia', 23, 'Casa 5', '', '0', NULL, '1514615677', 'imagens/fotos/Socorro.jpg', NULL),
        (17, 'Maria Jos?? Messias Quintino', '1959-02-22', '0000-00-00', '2671-1401', '1963-03-07', 'Aventino Quintino da Silva', 'I. B. Icara??', 'Casada', '', 'Fundamental incompleto', '020828670-8', 'Aloides Messias', 'Parque Felicidade', '', 'Femenino', 'Cordolina de Oliveira Messias', '25080-150', 'RJ', 'Aracaj??', 'Do lar', 'Duque de Caxias', '103.764.047-01', '1943-01-18', 'I. B. Eben??zer', 'Rua', 'Candido Mendes', 348, 'Casa 2', '', '0', NULL, '1517429046', 'imagens/fotos/Maria Quintino.jpg', ''),
        (18, 'Marlucy Neves de Mello', '2010-09-26', '2010-09-26', '3105-4063', '0000-00-00', '', 'I. B. Eben??zer', 'Divorciada', '7773730302', 'Fundamental Incompleto', '06.717.836-8', 'Themistocles Jos?? de Mello', 'Bonsucesso', '98409-8787', 'Femenino', 'Marly Neves de Mello', '21044-465', 'RJ', 'Rio de Janeiro', 'Manicure', 'Rio de Janeiro', '975.504.937-15', '1964-07-05', 'I. B. Eben??zer', 'Rua', 'Preto', 16, 'PU', '', '0', NULL, '1516535882', 'imagens/fotos/Marlucy.jpg', ''),
        (19, 'M??nica Cristina Peixoto Quintino', '1987-05-30', '1987-05-30', '2671-3390', '1988-11-05', 'Edmilson Messias Quintino', 'I. B. Eben??zer', 'Casada', '780497403-10', 'M??dio completo', '13.085.904-4', 'C??lio dos Santos Peixoto', 'Parque Felicidade', '96887-6221', NULL, 'Miriam da Gra??a Peixoto', '25080-150', 'RJ', 'Rio de Janeiro', 'Do lar', 'Duque de Caxias', '089.887.397-52', '1968-10-29', 'I. B. Eben??zer', 'Rua', 'Candido Mendes', 348, 'Casa 2', '', '0', NULL, '1514664811', 'imagens/fotos/Monica.jpg', NULL),
        (20, 'Natanael Peixoto Quintino', '2002-11-03', '2002-11-03', '3868-0189', '2013-05-10', 'Bianca Sabrina de Assis Quintino', 'I. B. Eben??zer', 'Casado', '1,41566E+11', 'Doutorado incompleto', '22.373.406-2', 'Edmilson Messias Quintino', 'Nova Campinas', '99374-1994', 'Masculino', 'M??nica Cristina Peixoto Quintino', '25268-220', 'RJ', 'Duque de Caxias', 'Matem??e1tico Pesquisador', 'Duque de Caxias', '122.606.137-05', '1990-11-13', 'I. B. Eben??zer', 'Av', 'A', 3, 'Area 4(ilha)', '', '0', NULL, '1514664846', 'imagens/fotos/Natanael.jpg', NULL),
        (21, 'Raphael Neves de Mello da Silva', '2015-10-12', '2015-10-12', '3105-5515', '0000-00-00', '', 'I. B. do Amor de Deus', 'Solteiro', '1,29703E+11', 'M??dio Completo', '12.399.566-4', 'C??sar Ronaldo da Silva', 'Bonsucesso', '', 'Masculino', 'Marlucy Neves de Mello', '21044-360', 'RJ', 'Rio de Janeiro', 'Topf3grafo', 'Rio de Janeiro', '117.105.077-13', '1987-03-24', 'I. B. do Amor de Deus', 'Rua', 'Conquista', 9, '', '', '0', NULL, '1514664986', 'imagens/fotos/Raphael.jpg', NULL),
        (22, 'Rosane dos Reis da Silva de Oliveira', '1980-05-26', '2007-05-27', '', '2009-03-27', 'Jorge Machado da Silva', 'I. B. de Campos', 'Casada', '81634803-02', 'Primeiro Incompleto', '08.199.874-2', 'N??o declarado', 'Encan', '', NULL, 'Z??lia dos Reis da Silva', '20756-060', 'RJ', 'Campos', 'Aux. Servi??os Gerais', 'Rio de Janeiro', '001.369.897-48', '1965-11-04', 'N.V. de Nova Holanda', 'Rua', 'Guilhermina', 366, 'Casa 366', '', '0', NULL, '1514665047', 'imagens/fotos/Rosane.jpg', NULL),
        (23, 'Rosilene Angela dos Reis da Silva', '0000-00-00', '0000-00-00', '3905-8595', '0000-00-00', '', '', 'Solteira', '634683503-29', 'M??dio Completo', '07.896.627-2', 'N??o delcarado', 'Encan', '96966-4228', NULL, 'Z??lia dos Reis da Silva', '20756-060', 'RJ', 'Campos', 'T??c. Enfermagem', 'Rio de Janeiro', '011.630.977-64', '1966-10-05', '', 'Rua', 'Guilhermina', 366, 'Casa 366', '', '0', NULL, '1514665087', 'imagens/fotos/Rose.jpg', NULL),
        (24, 'MIRIAM LIMA DE SOUZA', '2016-10-12', '2016-10-12', '', '1952-08-02', '', 'I. B. DO AMOR DE DEUS', 'VI??VA', '', '', '045688645', 'JOS?? ALVES LIMA', 'BONSUCESSO', '', 'Femenino', 'MARIA JOS?? DE LIMA', '', 'RJ', 'PERNABUCO', '', 'RIO DE JANEIRO', '59803444700', '1952-08-02', '', 'RUA', 'BRAS??LIA', 11, '', '', '0', NULL, '1514763622', 'imagens/fotos/Miriam.jpg', NULL),
        (25, 'Renata Karolaine Ferreira da Silva', '2015-10-12', '2015-10-12', '38679035', '0000-00-00', '', 'I. B. do AMOR de DEUS', 'SOLTEIRA', '', 'Ensino Fundamental Cur', '277859500', 'Valdeir Soares da Silva', 'BONSUCESSO', '', 'Femenino', 'Maria Auxiliadora Ferreira de Olveira', '21043150', 'RJ', 'RIO DE JANEIRO', 'ESTUDANTE', 'RIO DE JANEIRO', '14947815736', '2002-09-08', 'I. B. do AMOR de DEUS', 'RUA', 'da Praia', 825, 'Casa 2', '', '0', NULL, '1511909035', 'imagens/fotos/Renata Karolaine.jpg', NULL),
        (26, 'VAL??RIA CASTRO FARIAS DE MELLO', '2016-10-12', '2016-10-12', '25048672', '0000-00-00', 'EDSON VANDER NEVES DE MELLO', 'I. B. do AMOR de DEUS', 'Casada', '', 'N??VEL SUPERIOR', '100372572', 'JOS?? ARTEIRO FARIAS', 'BONSUCESSO', '979935098', 'Femenino', 'MARIA DA LAPA FARIAS', '21044340', 'RJ', 'RIO DE JANEIRO', 'ASSISTENTE ADMINISTRATIVO', 'RIO DE JANEIRO', '07381665700', '1975-09-03', 'I. B. do AMOR de DEUS', 'RUA', 'S??O PEDRO', 12, '', 'valeriafarias75@gmail.com', '0', NULL, '1567621657', 'imagens/fotos/VALERIA.jpg', ''),
        (27, 'ALEXANDRA SANTANA GOMES', '2000-06-25', '2016-12-14', '31053041', '2012-06-20', 'PEDRO ARTUR J. DA SILVA', '1a. I. B. de DUQUE DE CAXIAS', 'Casada', '', 'N??VEL M??DIO', '126249226', 'S??RGIO GOMES', 'BANSUCESSO', '964730219 / 98468418', 'Femenino', 'SILVANA SIQUEIRA SANTANA GOMES', '21044120', 'RJ', 'RIO DE JANEIRO', 'ASSISTENTE DE SUPRIMENTO', 'RIO DE JANEIRO', '09408478762', '1982-10-16', '1a. I. B. de DUQUE DE CAXIAS', 'RUA', 'MA??ARANDUBA', 298, 'CASA 5 FUNDOS', '', '0', NULL, '1531235060', 'imagens/fotos/alexandra.jpg', NULL),
        (28, 'IRACEMA DIOGO RIBEIRO', '2012-04-01', '0000-00-00', '', '1964-11-09', '', 'CONGRG. CRIST?? DO BRASIL', 'SOLTEIRA', '', 'SUPERIOR', '070992227', 'PEDRO RIBEIRO DO CARMO', 'CENTRAL', '88999660085', 'Femenino', 'MARIA ROMANA DIOGO', '62215000', 'CEAR??', 'NAVA RUSSAS', 'PROFESSORA', 'IPAPORANGA', '', '1964-11-09', '', 'RUA', 'FRANKLIN JOS??', 231, '', '', '0', NULL, '1502811562', 'imagens/suaFoto.jpg', NULL),
        (29, 'LUCAS SANTOS LOPES PINHEIRO', '2008-07-26', '0000-00-00', '997679817', '0000-00-00', 'ANDREZZA FRANCISCO PAULO', 'I. B. EBEN??ZER', 'SOLTEIRO', '159196150310', 'ENSINO M??DIO', '288387244', 'ALEXANDRE MARCOLINO PINHEIRO', 'BONSECESSO', '', 'Masculino', 'LILIANE SANTOS LOPES', '21044340', 'RJ', 'RIO DE JANEIRO', 'VENDEDOR', 'RIO DE JANEIRO', '15340928705', '1995-04-04', 'I. B. EBEN??ZER', 'RUA', 'S??O PEDRO', 38, '', '', '0', NULL, '1567869896', 'imagens/fotos/LUCAS SANTOS.jpg', NULL),
        (30, 'Maria Auxiliadora Ferreira de Oliveira', '2011-11-20', '2011-11-20', '38679035', '0000-00-00', '', 'I. B. Eben??zer', 'SOLTEIRA', '', 'Ensino Fundamental Inc', '209264340', 'Geraldo Gon??alo de Oliveira', 'BONSUCESSO', '', 'Femenino', 'Maria dos Mesc??s Ferreira de Oliveira', '21043750', 'RJ', 'Pernambuco', 'Do Lar', 'RIO DE JANEIRO', '10745839735', '1983-05-25', 'I. B. Eben??zer', 'RUA', 'da Praia', 825, 'Casa 2', '', '0', NULL, '1514764002', 'imagens/fotos/Dora.jpg', NULL),
        (31, 'CARLA MELLO DA SILVA ANTUNES', '2015-10-03', '0000-00-00', '31054063', '2010-03-04', 'AUGUSTO CESAR ANTUNES', 'COMUNIDADE EVANG??LICA', 'Casada', '129702490388', 'SUPERIOR INCOMPLETO', '12399564-9', 'CESAR RONALDO DA SILVA', 'MAR??', '964286964', 'Femenino', 'MARLUCY NEVES DE MELLO', '21044-465', 'RJ', 'RIO DE JANEIRO', 'PROFESSORA', 'RIO DE JANEIRO', '09938243746', '1985-03-06', 'COMUNIDADE EVANG??LICA', 'RUA', 'RIO PRETO', 16, 'P.U', '', '0', NULL, '1511908435', 'imagens/fotos/carla.jpg', NULL),
        (32, 'BRUNA NASCIMENTO DE MELLO', '2017-10-12', '2017-10-12', '31054063', '0000-00-00', '', 'I. B. do Amor de Deus', 'SOLTEIRA', '', 'SUPERIOR INCOMPLETO', '235731643', 'Themistocles Neves de Mello Filho', 'BONSUCESSO', '972870567', 'Femenino', 'MARIA JOS?? PRUD??NCIO DO NASCIMENTO', '21044465', 'RJ', 'RIO DE JANEIRO', 'AUXILIAR ADMINISTRATIVO', 'RIO DE JANEIRO', '11710505770', '1987-11-26', 'I. B. do Amor de Deus', 'RUA', 'RIO PRETO', 16, 'MAR??', '', '0', NULL, '1516535556', 'imagens/fotos/bruna.jpg', ''),
        (33, 'MARIA JOS?? PRUD??NCIO DO NASCIMENTO', '0000-00-00', '0000-00-00', '', '0000-00-00', 'Themistodes Jos?? de Mello Filho', '', 'SOLTEIRA', '', 'Fundamental Incompleto', '068532316', 'N??o Declarado', 'BONSUCESSO', '997197438', 'Femenino', 'ESTELITA PRUD??NCIO DO NASCIMENTO', '21044465', 'RJ', 'PARAIBA', 'DO LAR', 'RIO DE JANEIRO', '80722652704', '1963-08-08', '', 'RUA', 'RIO PRETO', 16, 'MAR??', '', '0', NULL, '1515100502', 'imagens/fotos/zeze.jpg', NULL),
        (34, 'SAMUEL SOARES DO NASCIMENTO', '0000-00-00', '0000-00-00', '31046920', '2003-09-02', '', '', 'SOLTEIRO', '', 'FUNDAMENTAL EM CURSO', '', 'ALEXANDRE', 'BONSECESSO', '', 'Masculino', 'JOTIRA SOARES DE OLIVEIRA', '', 'RJ', 'RIO DE JANEIRO', 'ESTUDANTE', 'RIO DE JANEIRO', '', '2003-09-02', '', 'RUA', 'ROBERTO DA SILVEIRA', 23, 'MAR??', '', '0', '1502837699', '1502837699', 'imagens/suaFoto.jpg', NULL),
        (35, 'CRISTIANO MAGALH??ES GUERRA', '2017-12-12', '2017-12-12', '31055916', '2010-06-12', 'FL??VIA LIMA DE MELLO GUERRA', 'I. B. do Amor de Deus', 'Casado', '', 'M??DIO COMPLETO', '235257482', 'FRANCISCO VALDI GUERRA', 'BONSECESSO', '981343917', 'Masculino', 'MARIA DE F??TIMA M. GUERRA', '21044020', 'RJ', 'RIO DE JANEIRO', 'TOP??GRAFO', 'RIO DE JANEIRO', '12857185774', '1980-06-26', 'I. B. do Amor de Deus', 'RUA', 'MANUEL PEREIRA DA SILVA', 0, '', '', '0', NULL, '1516139616', 'imagens/fotos/CRISTIANO.jpg', NULL),
        (36, 'FL??VIA LIMA DE MELLO GUERRA', '2017-12-12', '2017-12-12', '31055916', '2010-06-12', 'CRISTIANO MAGALHAES GUERRA', 'I. B. do Amor de Deus', 'Casada', '', 'ENSINO M??DIO', '114998115', 'WANDERLEY NEVES DE MELLO', 'BONSECESSO', '', 'Femenino', 'FRANCISCA SILVANIA BARBOSA LIMA', '21044020', 'RJ', 'RIO DE JANEIRO', 'SECRET??RIA', 'RIO DE JANEIRO', '12897185774', '1987-12-08', 'I. B. do Amor de Deus', 'RUA', 'MANOEL PEREIRA DA SILVA', 0, '', '', '0', NULL, '1516139681', 'imagens/fotos/flavia.jpg', NULL),
        (37, 'ANDREZZA FRANCISCO PAULO', '2016-10-11', '2016-10-11', '', '0000-00-00', 'LUCAS SANTOS LOPES PINHEIRO', 'I. B. do Amor de Deus', 'SOLTEIRA', '', 'SUPERIOR CURSANDO', '284639184', 'NATALINO DA SILVA PAULO', 'BONSUCESSO', '997679817', 'Femenino', 'ANA MARIA DE OLIVEIRA FRANCISCO', '21044340', 'RJ', 'RIO DE JANEIRO', '', 'RIO DE JANEIRO', '11498759769', '1993-04-23', 'I. B. do Amor de Deus', 'RUA', 'S??O PEDRO', 38, 'MAR??', '', '0', NULL, '1569975000', 'imagens/fotos/andrezza.jpg', ''),
        (38, 'Paulo S??rgio Ferreira dos Santos', '1995-06-10', '2003-12-05', '31051100', '0000-00-00', '', 'I. B. P. Nova Vida', 'SOLTEIRO', '85472830329', 'Ensino M??dio', '103986956', 'Jos?? Ferreira da Silva', 'Bonsucesso', '', 'Masculino', 'Tereza Pereira dos Santos', '21044075', 'RJ', 'Belo Horizonte', 'Aposentado', 'Rio de Janeiro', '00550703705', '1971-03-13', 'I. B. P. Nova Vida', 'Rua', 'Jo??o Araujo', 98, 'Casa 4', '', '0', NULL, '1511908984', 'imagens/fotos/Paulo.jpg', NULL),
        (39, 'Tha??s Mello da Silva Antunes', '2015-10-12', '2015-10-12', '31054063', '0000-00-00', '', 'I. B. do AMOR de DEUS', 'Solteira', '', 'Ensino Fundamental', '282896646', 'Augusto Cesar Antunes', 'Bonsucesso', '979113457', 'Femenino', 'Carla Mello da Silva Antunes', '21044465', 'RJ', 'Rio de Janeiro', 'Estudante', 'Rio de Janeiro', '15567685750', '2003-05-22', 'I. B. do AMOR de DEUS', 'Rua', 'Rio Preto', 16, 'Parque Uni??o', '', '0', NULL, '1511909105', 'imagens/fotos/Thais.jpg', NULL),
        (40, 'AUGUSTO C??SAR ANTUNES', '2018-10-12', '2018-10-12', '30816136', '2010-03-04', 'CARLA MELLO DA SILVA ANTUNES', 'I. B. do AMOR de DEUS', 'CASADO', '', 'FUNDAMENTAL', '13082591-2', 'N??O DECLARADO', 'RAMOS', '21964298274', 'Masculino', 'WANDA ANTUNES', '21040113', 'RJ', 'RIO DE JANEIRO', 'MOTORISTA', 'RIO DE JANEIRO', '09347376736', '1982-12-22', 'I. B. do AMOR de DEUS', 'AV', 'TEIXEIRA DE CASTRO', 555, '', '', '0', '1539963379', '1569606694', 'imagens/fotos/augusto.jpg', NULL),
        (41, 'CAMILLE VIT??RIA PEREIRA MELLO DA SILVA', '2018-10-12', '2018-10-12', '', '0000-00-00', '', 'I. B. do AMOR de DEUS', 'SOLTEIRA', '', '', '', 'RAPHAEL NEVES MELLO DA SILVA', 'MAR??', '21990931937', 'Femenino', 'LILIAN CAROLINA DO NASCIMENTO PEREIRA', '', 'RJ', 'RIO DE JANEIRO', '', 'RIO DE JANEIRO', '', '2008-08-28', 'I. B. do AMOR de DEUS', 'RUA', 'CONQUISTA', 9, '', '', '0', '1539993996', '1540000188', 'imagens/fotos/camille.jpg', NULL),
        (42, 'ERICK DA SILVA VIEIRA', '2018-10-12', '2018-10-12', '', '0000-00-00', '', 'I. B. do AMOR de DEUS', 'SOLTEIRO', '', '', '', 'ANDERSON VIEIRA DA CUNHA', '', '', 'Femenino', 'LEA JOAQUIM DA SILVA', '', '', '', '', '', '', '0000-00-00', 'I. B. do AMOR de DEUS', '', '', 0, '', '', '0', '1540090024', '1540090156', 'imagens/fotos/erick.jpg', NULL),
        (43, 'Jeniffer Gen??sio Melhorance', '2019-10-12', '2019-10-12', '', '0000-00-00', 'Francisco Rodrigues Pereira', 'I. B. do AMOR de DEUS', 'Casada', '', '1?? ano Ensino M??dio', '31634983-6', 'Leone Melhorance', 'Bonsucesso', '', 'Femenino', 'Danielle Gen??sio', '', 'Rio de Janeiro', 'Nova Friburgo', '', 'Rio de Janeiro', '', '1999-12-15', 'I. B. do AMOR de DEUS', 'Rua', 'B9, Rua K', 0, '', '', '0', '1572265610', '1572540781', 'imagens/fotos/Jeniffer.jpg', NULL),
        (44, 'DANIEL NOVO', '0000-00-00', '0000-00-00', '', '0000-00-00', '', '', '', '', '', '', '', '', '', 'Masculino', '', '', '', '', '', '', '', '0000-00-00', '', '', '', 0, '', '', '0', '1588618344', '1588618344', '', NULL),
        (45, 'JESSICA', '0000-00-00', '0000-00-00', '', '0000-00-00', '', '', '', '', '', '', '', '', '', 'Femenino', '', '', '', '', '', '', '', '0000-00-00', '', '', '', 0, '', '', '0', '1588618498', '1588618498', '', NULL),
        (46, 'B??RBARA', '0000-00-00', '0000-00-00', '', '0000-00-00', '', '', '', '', '', '', '', '', '', 'Femenino', '', '', '', '', '', '', '', '0000-00-00', '', '', '', 0, '', '', '0', '1630520219', '1630520219', '', NULL)";
        $sql = explode("),", $sql);
        //$arr = explode(",", $sql);
        foreach($sql as $row) {
            $row = explode(",", $row);
            array_pop($row);
            array_shift($row);
            $r = implode(",", $row);
            echo "({$r}),<br>";
        }
    }

    // public function list(?array $data): void
    // {
    //     $data["act"] = "list";
    //     $login = $_SESSION["login"]->Logon;
    //     if($data["companyId"] !== "undefined") {
    //         $users = (new \Models\User())->find(["IDEmpresa" => $data["companyId"]]);
    //     } else {
    //         $users = (new \Models\User())->all();
    //     }

    //     $user = (new \Models\User())->find($login);
    //     $groups = (new Group())->all();
    //     $params = [ $data, compact("login", "users", "user", "groups") ];

    //     echo "<script>var companyId = '" . $data["companyId"] . "' </script>";
    //     $this->view->setPath("Modals")->render("user", $params);
    // }


    // public function edit(array $data): void
    // {
    //     $data["act"] = "edit";
    //     $login = $data["user"];//filter_input(INPUT_POST, "user", FILTER_SANITIZE_STRIPPED);
    //     $user = (new \Models\User())->find(($login));
    //     $groups = (new Group())->all();
    //     $params = [ $data, compact("user", "groups") ];

    //     $this->view->setPath("Modals")->render("user", $params);
    // }

    // public function save(array $data): void
    // {
    //     $data["USUARIO"] = &$data["Logon"];
    //     $data = $this->confSenha($data);
    //     $user = new \Models\User();

    //     $user->bootstrap($data);
    //     $user->save(true);
    //     echo json_encode($user->message());
    // }

    // public function update(array $data): void
    // {
    //     $user = (new \Models\User())->load($data["id"]);
    //     foreach($data as $key => $value) {
    //         $user->$key = $value;
    //     }

    //     $user->save(true);
    //     echo json_encode($user->message());
    // }

    // public function reset(array $data): void
    // {
    //     $user = (new \Models\User())->find($data["Logon"]);
    //     $user->token($data["Logon"]);
    //     echo json_encode($user->message());
    // }

    // public function delete(array $data): void
    // {
    //     $user = (new \Models\User())->find($data["Logon"]);
    //     $user->destroy();
    //     echo json_encode($user->message());
    // }

}
