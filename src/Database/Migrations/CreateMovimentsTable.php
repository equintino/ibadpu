<?php

namespace Database\Migrations;

use Config\Config;
use Database\CreateTable;
use Database\Schema;
use Database\Blueprint;

class CreateMovimentsTable implements CreateTable
{
    private $type;

    public function __construct()
    {
        $this->type = (new Config())->type();
    }

    public function up(string $entity)
    {
        $schema = Schema::create($entity, $this->type, function(Blueprint $table) {
            $table->increment("id");
            $table->int("year")->nullable();
            $table->int("month")->nullable();
            $table->date("date")->nullable();
            $table->string("description")->nullable();
            $table->decimal("deposit", 18,2)->nullable();
            $table->decimal("output", 18,2)->nullable();
            $table->enum("tithe_offer",["diz","ofe"])->nullable();
            $table->int("documentation_id")->nullable()->unique();
            $table->bool("active")->default(1);
            $table->timestamps();
            return $table->run();
        });
        return $schema;
    }

    public function down(string $entity)
    {
        return Schema::dropIfExists($entity, $this->type);
    }
}
