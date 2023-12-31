<?php
require_once('../model/Conexao.php');
require_once('../model/Vaga.php');
require_once('../model/Empresa.php');

class DaoVaga {

    public static function cadastrar(Vaga $vaga){

        $conexao = Conexao::conectar();

        $queryInsert = 'INSERT INTO tbvaga(nomeVaga, descVaga, cargoVaga, cargaHorariaVaga, sobreVaga, idEmpresa)
                   VALUES (?,?,?,?,?,?)';
                   
        $prepare = $conexao->prepare($queryInsert);
        $prepare->bindValue(1, $vaga->getNome());
        $prepare->bindValue(2, $vaga->getDescricao());
        $prepare->bindValue(3, $vaga->getCargo());
        $prepare->bindValue(4, $vaga->getCargaHoraria());
        $prepare->bindValue(5, $vaga->getSobreVaga());
        $prepare->bindValue(6, $vaga->getIdEmpresa());

        $prepare->execute();

        return true;

    }

    public static function listarPorEmpresa(Empresa $empresa){
        $conexao = Conexao::conectar();
        $select = 'SELECT * from tbVaga WHERE idEmpresa = ?';
        $prepare = $conexao->prepare($select);
        $prepare->bindValue(1, $empresa->getId());
        $prepare->execute();
        $lista = $prepare->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($lista);
    }

    public static function buscar($query){
        $conexao = Conexao::conectar();
        $select = "SELECT idVaga, nomeVaga, descVaga, cargoVaga, cargaHorariaVaga, salarioVaga, tipoVaga, modeloVaga, formacaoVaga, tbvaga.idEmpresa, logradouroEmpresa, numeroEmpresa, complementoEmpresa, bairroEmpresa, cidadeEmpresa, ufEmpresa, cepEmpresa, nomeEmpresa FROM tbVaga
        INNER JOIN tbempresa ON tbvaga.idEmpresa = tbempresa.idEmpresa
        WHERE nomeVaga LIKE ? OR descVaga LIKE ? OR cargoVaga LIKE ?";
        $prepare = $conexao->prepare($select);
        $prepare->bindValue(1, '%'.$query.'%');
        $prepare->bindValue(2, '%'.$query.'%');
        $prepare->bindValue(3, '%'.$query.'%');
        $prepare->execute();
        $lista = $prepare->fetchAll(PDO::FETCH_ASSOC);
        
        return json_encode($lista);
    }

    public static function listar(){

        $conexao = Conexao::conectar();
        $select = "SELECT idVaga, nomeVaga, descVaga, cargoVaga, cargaHorariaVaga, salarioVaga, tipoVaga, modeloVaga, formacaoVaga, tbvaga.idEmpresa, logradouroEmpresa, numeroEmpresa, complementoEmpresa, bairroEmpresa, cidadeEmpresa, ufEmpresa, cepEmpresa, nomeEmpresa FROM tbVaga
        INNER JOIN tbempresa ON tbvaga.idEmpresa = tbempresa.idEmpresa ORDER BY idVaga DESC";
        $prepare = $conexao->prepare($select);
        $prepare->execute();
        $lista = $prepare->fetchAll(PDO::FETCH_ASSOC);
        
        return json_encode($lista);

    }

}


?>