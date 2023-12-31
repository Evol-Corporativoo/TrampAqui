<?php
class Vaga {
    private $idVaga;
    private $nomeVaga;
    private $descVaga;
    private $cargoVaga;
    private $cargaHorariaVaga;
    private $sobreVaga;
    private $idEmpresa;

    // Getter para $idVaga
    public function getIdVaga() {
        return $this->idVaga;
    }

    // Setter para $idVaga
    public function setIdVaga($idVaga) {
        $this->idVaga = $idVaga;
    }

    public function getNome(){
        return $this->nomeVaga;
    }

    public function setNome($nome){
        $this->nomeVaga = $nome;
    }

    // Getter para $descVaga
    public function getDescricao() {
        return $this->descVaga;
    }

    // Setter para $descVaga
    public function setDescricao($descVaga) {
        $this->descVaga = $descVaga;
    }

    // Getter para $cargoVaga
    public function getCargo() {
        return $this->cargoVaga;
    }

    // Setter para $cargoVaga
    public function setCargo($cargoVaga) {
        $this->cargoVaga = $cargoVaga;
    }

    // Getter para $cargaHorariaVaga
    public function getCargaHoraria() {
        return $this->cargaHorariaVaga;
    }

    // Setter para $cargaHorariaVaga
    public function setCargaHoraria($cargaHorariaVaga) {
        $this->cargaHorariaVaga = $cargaHorariaVaga;
    }

    // Getter para $sobreVaga
    public function getSobreVaga() {
        return $this->sobreVaga;
    }

    // Setter para $sobreVaga
    public function setSobreVaga($sobreVaga) {
        $this->sobreVaga = $sobreVaga;
    }

    // Getter para $idEmpresa
    public function getIdEmpresa() {
        return $this->idEmpresa;
    }

    // Setter para $idEmpresa
    public function setIdEmpresa($idEmpresa) {
        $this->idEmpresa = $idEmpresa;
    }
}

?>