<?php

namespace Models;

interface Models
{
    public function load(int $id, string $columns = "*");
    public function find(string $busca, string $columns = "*");
    public function all(string $columns = "*", string $order = "id", bool $msg = false);
    public function save();
    public function destroy();
    public function required(): bool;
    public function createThisTable();
    public function dropThisTable();
}
