<?php

namespace Database\Migrations;

use Config\Config;
use Database\CreateTable;
use Database\Schema;
use Database\Blueprint;

class CreateMembershipsTable implements CreateTable
{
    private $type;

    public function __construct()
    {
        $this->type = (new Config())->type();
    }

    public function up(string $entity)
    {
        return Schema::create($entity, $this->type, function(Blueprint $table) {
            $table->increment("id");
            $table->string("name", 50)->nullable();
            $table->date("baptism,entrance")->nullable();
            $table->string("phone,cellphone")->nullable();
            $table->date("wedding")->nullable();
            $table->string("spouse,church_baptism,marital_status")->nullable();
            $table->string("voter_registration", 14)->nullable();
            $table->string("schooling")->nullable();
            $table->string("rg", 12)->nullable();
            $table->string("cpf", 14)->nullable();
            $table->string("father,mother,email,naturality,profession,address,number,complement,municipality,neighborhood,UF,cep")->nullable();
            $table->enum("type",["R.","Av.","Tv.","Bc.","Estr","Jd.","Lg.","Pc.","Qd.","Vl"])->nullable();
            $table->enum("sex",["Masculino","Feminino"])->nullable();
            $table->date("birth_date")->nullable();
            $table->string("origin_church")->nullable();
            $table->int("register")->unique();
            $table->int("photo_id")->nullable();
            $table->int("occupation_id")->nullable();
            $table->int("certificate_id")->nullable();
            $table->bool("active")->default(1);
            $table->timestamps();
            return $table->run();
        });
    }

    public function down(string $entity)
    {
        return Schema::dropIfExists($entity, $this->type);
    }
}
