<?php

namespace Models;

use Core\Model;
use Database\Migrations\CreateMembershipsTable;

class Membership extends Model implements Models
{
    public static $entity = "memberships";

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
            $this->message = (
                $msgDb ? $this->fail->errorInfo[2] : "<span class='warning'>Not Found Informed id</span>"
            );
            return null;
        }

        return $load->fetchObject(__CLASS__);
    }

    public function loads(array $ids, string $columns = "*", bool $msgDb = false)
    {
        $where = "";
        foreach($ids as $id) {
            $where .= "id={$id} OR ";
        }
        $where = substr($where, 0, -3);
        $sql = "SELECT {$columns} FROM " . self::$entity . " WHERE {$where} ";
        $load = $this->read($sql, $msgDb);

        if($this->fail) {
            $this->message = "<span class='error'>" . $this->fail->errorInfo[2] . "</span>";
            return $this->message;
        }

        if(!$load->rowCount()) {
            $this->message = (
                $msgDb ? $this->fail->errorInfo[2] : "<span class='warning'>Not Found Informed id</span>"
            );
            return null;
        }

        return $load->fetchAll();
    }

    public function find(string $search, string $columns = "*")
    {
        if(filter_var($search, FILTER_UNSAFE_RAW)) {
            $find = $this->read("SELECT {$columns} FROM " . self::$entity . " WHERE name=:name ", "name={$search}");
        }

        if($this->fail || (isset($find) && !$find->rowCount()) || empty($find)) {
            $this->message = "<span class='warning'>Not found member</span>";
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

    public function activeAll(
        ?int $limit=null, int $offset=0, string $columns = "*", string $order = "name", bool $msg=false
    ): ?array
    {
        $sql = "SELECT {$columns} FROM  " . static::$entity . " WHERE active=1 " . $this->order($order);
        if($limit !== null && $limit !== 0) {
            $all = $this->read($sql . $this->limit(), "limit={$limit}&offset={$offset}");
        } else {
            $all = $this->read($sql);
        }

        if(!$all->rowCount()) {
            $this->message = "Your query has not returned any registrations";
            return null;
        }

        return $all->fetchAll(\PDO::FETCH_CLASS, __CLASS__);
    }

    public function save (): ?Membership
    {
        if (!$this->required()) {
            return null;
        }

        /** Update */
        if (!empty($this->id)) {
            $id = $this->id;
            $membership = $this->read(
                "SELECT id FROM " . self::$entity . " WHERE name = :name AND id != :id", "name={$this->name}&id={$id}"
            );
            if ($membership->rowCount()) {
                $this->message = "<span class='warning'>The Informed Member is already registered</span>";
                return null;
            }

            $this->update(self::$entity, $this->safe(), "id = :id", "id={$id}");
            if ($this->fail()) {
                $this->message = "<span class='danger'>Error updating, verify the data</span>";
                return null;
            }

            $this->message = "<span class='success'>Data updated successfully</span>";
        }

        /** Create */
        if (empty($this->id)) {
            if ($this->find($this->name)) {
                $this->message = "<span class='warning'>The Informed Member is already registered</span>";
                return null;
            }
            $id = $this->create(self::$entity, $this->safe());
            if ($this->fail()) {
                $this->message = "<span class='danger'>Error to Register, Check the data</span>";
                return null;
            }
            $this->message = "<span class='success'>Registration successfully</span>";
        }
        $this->data = $this->read("SELECT * FROM " . self::$entity . " WHERE id=:id", "id={$id}")->fetch();

        return $this;
    }

    public function destroy ()
    {
        if (!empty($this->id)) {
            $this->delete(self::$entity, "id=:id", "id={$this->id}");
        }

        if ($this->fail()) {
            $this->message = "<span class='danger'>Could not remove the member</span>";
            return null;
        }
        $this->message = "<span class='success'>Member was successfully removed</span>";
        $this->data = null;

        return $this;
    }

    public function required (): bool
    {
        foreach ($this->required as $field) {
            if (empty(trim($this->$field))) {
                $this->message = "<span class='warning'>The field {$field} is required</span>";
                return false;
            }
        }
        return true;
    }

    public function createThisTable ()
    {
        $sql = (new CreateMembershipsTable())->up(self::$entity);
        return $this->createTable($sql);
    }

    public function dropThisTable ()
    {
        $sql = (new CreateMembershipsTable())->down(self::$entity);
        return $this->dropTable($sql);
    }
}
