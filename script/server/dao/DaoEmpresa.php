<?php

    require_once('../model/Conexao.php');
    require_once('../model/Empresa.php');
    require_once('../model/Usuario.php');

    class DaoEmpresa{

        public static function cadastrar(Empresa $empresa){

            $conexao = Conexao::conectar();

            $queryInsert = 'INSERT INTO tbempresa(nomeEmpresa, cnpjEmpresa, cepEmpresa, telefoneEmpresa, descEmpresa, idUsuario)
                       VALUES (?,?,?,?,?,?)';
                       
            $prepare = $conexao->prepare($queryInsert);
            $prepare->bindValue(1, $empresa->getNome());
            $prepare->bindValue(2, $empresa->getCnpj());
            $prepare->bindValue(3, $empresa->getLocalSede());
            $prepare->bindValue(4, $empresa->getTelefone());
            $prepare->bindValue(5, $empresa->getAreaAtuacao());
            $prepare->bindValue(6, $empresa->getIdUsuario());

            $prepare->execute();

            return true;

        }

        public static function procurarCNPJ(Empresa $empresa){
            $conexao = Conexao::conectar();

            $querySelect = "SELECT * FROM tbempresa WHERE cnpjEmpresa = ?";

            $prepareStatement = $conexao->prepare($querySelect);
            $prepareStatement->bindValue(1, $empresa->getCnpj());
            $prepareStatement->execute();

            $resultado = $prepareStatement->fetch(PDO::FETCH_ASSOC);

            if($resultado != null){
                return $resultado;
            }
        }

        public static function procurarPorUsuario(Usuario $usuario){

            $conexao = Conexao::conectar();

            $querySelect = "SELECT * FROM tbempresa WHERE idUsuario = ?";

            $prepareStatement = $conexao->prepare($querySelect);
            $prepareStatement->bindValue(1, $usuario->getId());
            $prepareStatement->execute();

            $resultado = $prepareStatement->fetch(PDO::FETCH_ASSOC);

            if($resultado != null){
                return $resultado;
            }

        }

    }

?>