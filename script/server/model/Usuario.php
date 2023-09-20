<?php

class Usuario {
    private $id;
    private $nome;
    private $dataNasc;
    private $cpf;
    private $email;
    private $senha;
    private $telefone;
    private $acesso;

    public function getCpf(){
        return $this->cpf;
    }

    public function setCpf($cpf){
        $this->cpf = $cpf;
    }

    public function getTelefone(){
        return $this->telefone;
    }

    public function setTelefone($telefone){
        $this->telefone = $telefone;
    }

    // Getter para $id
    public function getId() {
        return $this->id;
    }

    // Setter para $id
    public function setId($id) {
        $this->id = $id;
    }

    // Getter para $nome
    public function getNome() {
        return $this->nome;
    }

    // Setter para $nome
    public function setNome($nome) {
        $this->nome = $nome;
    }

    // Getter para $dataNasc
    public function getDataNasc() {
        return $this->dataNasc;
    }

    // Setter para $dataNasc
    public function setDataNasc($dataNasc) {
        $this->dataNasc = $dataNasc;
    }

    // Getter para $email
    public function getEmail() {
        return $this->email;
    }

    // Setter para $email
    public function setEmail($email) {
        $this->email = $email;
    }

    // Getter para $senha
    public function getSenha() {
        return $this->senha;
    }

    // Setter para $senha
    public function setSenha($senha) {
        $this->senha = $senha;
    }

    // Getter para $acesso
    public function getAcesso() {
        return $this->acesso;
    }

    // Setter para $acesso
    public function setAcesso($acesso) {
        $this->acesso = $acesso;
    }
}

?>