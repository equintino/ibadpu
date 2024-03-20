<?php

namespace Models;

use Core\Model;
use Database\Migrations\CreateDocumentationsTable;
use Traits\CropTrait;

class Documentation extends Model implements Models
{
    use CropTrait;
    public static $entity = "documentations";
    public $file;

    /** @var array */
    private $required = [];

    public function load(int $id, string $columns = "*")
    {
        $load = $this->read("SELECT {$columns} FROM " . self::$entity . " WHERE id=:id", "id={$id}");

        if ($this->fail || !$load->rowCount()) {
            $this->message = "File not found";
            return null;
        }
        return $load->fetchObject(__CLASS__);
    }

    public function find(string $name, string $columns = "*")
    {
        if (filter_var($name, FILTER_UNSAFE_RAW)) {
            $find = $this->read("SELECT {$columns} FROM " . self::$entity . " WHERE name=:name ", "name={$name}");
        }

        if ($this->fail || empty($find)) {
            $this->message = "File not found";
            return null;
        }

        return $find->fetchAll(\PDO::FETCH_CLASS, __CLASS__);
    }

    public function search(array $where)
    {
        $terms = "";
        $params = "";
        foreach ($where as $k => $v) {
            $terms .= " {$k}=:{$k} AND";
            $params .= "{$k}={$v}&";
        }
        $terms = substr($terms, 0, -3);
        $params = substr($params, 0, -1);
        $data = $this->read("SELECT * FROM " . self::$entity . " WHERE {$terms} ", $params);
        return $data->fetchAll(\PDO::FETCH_CLASS, __CLASS__);
    }

    public function activeAll(int $limit=30, int $offset=0, string $columns = "*", string $order = "id"): ?array
    {
        $sql = "SELECT {$columns} FROM  " . self::$entity . " WHERE " . $this->order($order);
        if ($limit !== 0) {
            $all = $this->read($sql . $this->limit(), "limit={$limit}&offset={$offset}");
        } else {
            $all = $this->read($sql);
        }

        if ($this->fail || !$all->rowCount()) {
            $this->message = "Your query has not returned any registrations";
            return null;
        }

        return $all->fetchAll(\PDO::FETCH_CLASS, __CLASS__);
    }

    public function readDataTable(string $sql, ?array $where)
    {
        if (empty($where)) {
            return $this->activeAll();
        }
    }

    public function fileSave(array $file, int $documentation_id = null)
    {
        $this->file = $file;
        $dataDb = ($documentation_id ? $this->load($documentation_id) : null);
        if ($dataDb) {
            $data["id"] = $dataDb->id;
        }
        $data["name"] = $this->file["name"];
        $data["description"] = $this->file["description"];
        $data["type"] = $this->indType($this->file["type"]);
        $data["size"] = $this->file["size"];

        $data["image"] = file_get_contents($this->file["tmp_name"]);
        $this->bootstrap($data);
        return $this->save() ?? $this->message();
    }

    private function is_pdf ( $file ) {
        $file_content = file_get_contents( $file );

        if ( preg_match( "/^%PDF-[0-1]\.[\d]+/", $file_content ) ) {
            return true;
        }
        return false;
    }

    private function create_preview ( $file ) {
        $output_format = "jpeg";
        $antialiasing = "4";
        $preview_page = "1";
        $resolution = "300";
        $output_file = "src/public/preview/preview.jpg";

        $exec_command  = "gs -dSAFER -dBATCH -dNOPAUSE -sDEVICE=" . $output_format . " ";
        $exec_command .= "-dTextAlphaBits=". $antialiasing . " -dGraphicsAlphaBits=" . $antialiasing . " ";
        $exec_command .= "-dFirstPage=" . $preview_page . " -dLastPage=" . $preview_page . " ";
        $exec_command .= "-r" . $resolution . " ";
        $exec_command .= "-sOutputFile=" . $output_file . " '" . $file . "'";

        /** Executing command */
        exec( $exec_command, $command_output, $return_val );

        foreach ( $command_output as $line ) {
            // echo $line . "\n";
        }

        if ( !$return_val ) {
            return true;
        }
        return false;
    }

    private function resize($fileName, int $percent=null)
    {
        // header('Content-type: ' . $this->getMime($fileName));
        list($width, $height) = getimagesize($fileName);
        $p = ($percent ?? 60000/$width);
        $this->resize_width = $width * ($p/100);
        $this->resize_height = $height * ($p/100);
        $this->cut = 1;
        $this->default();
        $this->dstimg = $this->file["tmp_name"];
        $this->newimg();
    }

    public function save()
    {
        static::$safe = ["id","created_at","updated_at"];
        if (!$this->required()) {
            return null;
        }

        $this->validateFields();

        /** Update */
        if ($this->id) {
            return $this->update_();
        }

        /** Create */
        if (empty($this->id)) {
            return $this->create_();
        }
    }

    private function update_()
    {
        $this->update(self::$entity, $this->safe(), "id=:id", "id={$this->id}");

        if ($this->fail()) {
            $this->message = "<span class='danger'>Error updating, check the data</span>";
            return null;
        }
        return $this->id;
    }

    private function create_()
    {
        if (!empty($this->id) && $this->find($this->id)) {
            $this->message = "<span class='warning'>Informed file is already registered</span>";
        } else {
            $id = $this->create(self::$entity, $this->safe());
            if ($this->fail()) {
                $this->message = "<span class='danger'>Error to Register, Check the data</span>";
                return null;
            }
            $this->message = "<span class='success'>Successful file</span>";
        }
        return $id;
    }

    protected function create(string $entity, array $data, bool $msgDb = false)
    {
        try {
            $columns = implode(", ", array_keys($data));
            $values = ":" . implode(", :", array_keys(removeAccentArray($data)));
            $stmt = \Core\Connect::getInstance($msgDb)->prepare("INSERT INTO {$entity} ({$columns}) VALUES ({$values})");

            foreach ($data as $key => $value) {
                $$key = $value;
                $params[":{$key}"] = $value;
            }

            // $stmt->bindParam(":image", $image, \PDO::PARAM_LOB, 0, \PDO::SQLSRV_ENCODING_BINARY);
            $stmt->bindParam(":image", $image, \PDO::PARAM_LOB);
            $stmt->bindParam(':size', $size, \PDO::PARAM_INT);
            $stmt->bindParam(':name', $name, \PDO::PARAM_STR);
            $stmt->bindParam(':description', $description, \PDO::PARAM_STR);
            $stmt->bindParam(':type', $type, \PDO::PARAM_STR);

            if ($stmt->execute()) {
                return \Core\Connect::getInstance($msgDb)->lastInsertId();
            }
        } catch (\PDOException $exception) {
            $this->fail = $exception;
            return null;
        }
    }

    protected function update(string $entity, array $data, string $terms, string $params, bool $msgDb = false): ?int
    {
        $data["updated_at"] = ($this->connectionDetails->type() === "sqlsrv" ? (new \DateTime())->format("d/m/Y H:i:s") : (new \DateTime())->format("Y-m-d H:i:s"));

        parse_str($params, $params);
        foreach ($data as $bind => $value) {
            $dataSet[] = $bind . "= :" . $bind;
            $params[$bind] = $value;
        }
        $dataSet = implode(", ", $dataSet);
        $sql = "UPDATE {$entity} SET {$dataSet} WHERE {$terms}";

        $this->execute($sql, $params);
        return $this->id;
    }

    protected function execute(string $sql, array $params = []): \PDOStatement
    {
        $stmt = \Core\Connect::getInstance()->prepare($sql);
        try {
            if ($params) {
                //$params = $this->filter(removeAccentArray($params));
                foreach ($params as $key => $value) {
                    $type = \PDO::PARAM_STR;
                    if (is_numeric($value)) {
                        $value = (float) $value;
                    } elseif ($value == null) {
                        $type = \PDO::PARAM_NULL;
                    }

                    if ($key === "image") {
                        $stmt->bindValue(":image", $value, \PDO::PARAM_LOB);
                        //$stmt->bindParam(":photo", $value, \PDO::PARAM_LOB, 0, \PDO::SQLSRV_ENCODING_BINARY);
                    } else {
                        $stmt->bindValue(":{$key}", $value, $type);
                    }
                }
            }
            $stmt->execute();
        } catch (\PDOException $exception) {
            $this->fail = $exception;
            return null;
        }
        return $stmt;
    }

    public function destroy()
    {
        if (!empty($this->id)) {
            $this->delete(self::$entity, "id=:id", "id={$this->id}");
        }

        if ($this->fail()) {
            $this->message = "<div class=danger>Could not remove file</div>";
            return null;
        }
        $this->message = "<div class=success>File successfully</div>";
        $this->data = null;

        return $this;
    }

    private function indType($type): int
    {
        if (strpos($type, "/")) {
            $t = explode("/", $type)[1];
            switch ($t) {
                case "png":
                    return 1;
                case "jpg": case "jpeg":
                    return 2;
                case "pdf":
                    return 5;
                default:
                    return 2;
            }
        }
    }

    /** Last id more one */
    private function lastId()
    {
        $lastData = $this->all(1, 0, "id", "id DESC");
        return ($lastData ? $lastData[0]->id + 1 : 1);
    }

    private function validateFields()
    {
        return null;
    }

    public function required(): bool
    {
        foreach ($this->required as $field) {
            if (empty(trim($this->$field))) {
                $this->message = "The {$field} field is mandatory";
                return false;
            }
        }
        return true;
    }

    public function createThisTable()
    {
        $sql = (new CreateDocumentationsTable())->up(self::$entity);
        return $this->createTable($sql);
    }

    public function dropThisTable()
    {
        $sql = (new CreateDocumentationsTable())->down(self::$entity);
        return $this->dropTable($sql);
    }
}
