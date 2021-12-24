<?php

namespace Models;

use Core\Model;
use Database\Migrations\CreateMovimentsTable;

class Moviment extends Model implements Models
{
    public static $entity = "moviments";

    /** @var array */
    private $required = [];

    public function load(int $id, string $columns = "*", bool $msgDb = false)
    {
        $load = $this->read("SELECT {$columns} FROM " . self::$entity . " WHERE id=:id", "id={$id}", $msgDb);

        if($this->fail) {
            $this->message = "<span class='error'>" . $this->fail->errorInfo[2] . "</span>";
            return $this->message;
        }

        if(!$load->rowCount()) {
            $this->message = ($msgDb ? $this->fail->errorInfo[2] : "<span class='warning'>Not Found Informed id</span>");
            return null;
        }

        return $load->fetchObject(__CLASS__);
    }

    public function find(string $search, string $columns = "*")
    {
        if(filter_var($search, FILTER_SANITIZE_STRIPPED)) {
            $find = $this->read("SELECT {$columns} FROM " . self::$entity . " WHERE name=:name ", "name={$search}");
        }

        if($this->fail || !$find->rowCount()) {
            $this->message = "<span class='warning'>Not found moviment</span>";
            return null;
        }

        return $find->fetchObject(__CLASS__);
    }

    public function search(array $where)
    {
        $terms = "";
        $params = "";
        foreach($where as $k => $v) {
            $terms .= " {$k}=:{$k} AND";
            $params .= "{$k}={$v}&";
        }
        $terms = substr($terms, 0, -3);
        $params = substr($params, 0, -1);
        $data = $this->read("SELECT * FROM " . self::$entity . " WHERE {$terms} ", $params);
        return $data->fetchAll(\PDO::FETCH_CLASS, __CLASS__);
    }

    public function all(int $limit=30, int $offset=0, string $columns = "*", string $order = "id", bool $msg=false): ?array
    {
        $all = $this->read("SELECT {$columns} FROM  " . self::$entity . " " . $this->order($order) . ($limit !== 0 ? $this->limit() : null), "limit={$limit}&offset={$offset}");

        if($this->fail) {
            $this->message = "<span class='error'>" . $this->fail->errorInfo[2] . "</span>";
            return $this->message;
        }

        if(!$all->rowCount()) {
            $this->message = "<span class='warning'>Your inquiry has not returned data</span>";
            return null;
        }

        return $all->fetchAll(\PDO::FETCH_CLASS, __CLASS__);
    }

    public function save(): ?Moviment
    {
        if(!$this->required()) {
            return null;
        }

        /** Update */
        if(!empty($this->id)) {
            $id = $this->id;
            $this->update(self::$entity, $this->safe(), "id = :id", "id={$id}");
            if($this->fail()) {
                $this->message = "<span class='danger'>Error updating, verify the data</span>";
                return null;
            }
            $this->message = "<span class='success'>Data updated successfully</span>";
        }

        /** Create */
        if(empty($this->id)) {
            $id = $this->create(self::$entity, $this->safe());
            if($this->fail()) {
                $this->message = "<span class='danger'>Error to Register, Check the data</span>";
                return null;
            }
            $this->message = "<span class='success'>Registration successfully</span>";
        }
        $this->data = $this->read("SELECT * FROM " . self::$entity . " WHERE id=:id", "id={$id}")->fetch();

        return $this;
    }

    public function destroy()
    {
        if(!empty($this->id)) {
            $this->delete(self::$entity, "id=:id", "id={$this->id}");
        }

        if($this->fail()) {
            $this->message = "<span class='danger'>Could not remove the moviment</span>";
            return null;
        }
        $this->message = "<span class='success'>Moviment was successfully removed</span>";
        $this->data = null;

        return $this;
    }

    public function required(): bool
    {
        foreach($this->required as $field) {
            if(empty(trim($this->$field))) {
                $this->message = "<span class='warning'>The field {$field} is required</span>";
                return false;
            }
        }
        return true;
    }

    public function createThisTable()
    {
        $sql = (new CreateMovimentsTable())->up(self::$entity);
        return $this->createTable($sql);
    }

    public function dropThisTable()
    {
        $sql = (new CreateMovimentsTable())->down(self::$entity);
        return $this->dropTable($sql);
    }

}
