<?php

class Empresa {
    private $id;
    private $nome;
    private $cnpj;
    private $localSede;
    private $areaAtuacao;
    private $telefone;
    private $idUsuario;

    // Getter para $cnpj
    public function getCnpj(){
        return $this->cnpj;
    }

    // Setter para $cnpj
    public function setCnpj($cnpj){
        $this->cnpj = $cnpj;
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

    // Getter para $localSede
    public function getLocalSede() {
        return $this->localSede;
    }

    // Setter para $localSede
    public function setLocalSede($localSede) {
        $this->localSede = $localSede;
    }

    // Getter para $areaAtuacao
    public function getAreaAtuacao() {
        return $this->areaAtuacao;
    }

    // Setter para $areaAtuacao
    public function setAreaAtuacao($areaAtuacao) {
        $this->areaAtuacao = $areaAtuacao;
    }

    // Getter para $telefone
    public function getTelefone() {
        return $this->telefone;
    }

    // Setter para $telefone
    public function setTelefone($telefone) {
        $this->telefone = $telefone;
    }

    // Getter para $idUsuario
    public function getIdUsuario() {
        return $this->idUsuario;
    }

    // Setter para $idUsuario
    public function setIdUsuario($idUsuario) {
        $this->idUsuario = $idUsuario;
    }
}

?>