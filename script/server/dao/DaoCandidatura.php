<?php

    require_once(__DIR__.'/../model/Conexao.php');

    class DaoCandidatura{

        public static function listar($idUsuario){

            $conexao = Conexao::conectar();
            $select = 'SELECT idCandidatura, tbcandidatura.idUsuario, status, tbcandidatura.idVaga AS idVaga, nomeVaga, descVaga, cargoVaga, cargaHorariaVaga, salarioVaga, tipoVaga, modeloVaga, formacaoVaga, tbvaga.idEmpresa, nomeEmpresa, cepEmpresa, cidadeEmpresa, ufEmpresa, bairroEmpresa, logradouroEmpresa, numeroEmpresa, complementoEmpresa FROM tbcandidatura
            INNER JOIN tbvaga ON tbcandidatura.idVaga = tbvaga.idVaga 
            INNER JOIN tbempresa ON tbvaga.idEmpresa = tbempresa.idEmpresa WHERE tbcandidatura.idUsuario = ?';
            $prepare = $conexao->prepare($select);
            $prepare->bindValue(1, $idUsuario);

            try{
                $prepare->execute();
                $lista = $prepare->fetchAll(PDO::FETCH_ASSOC);
                return $lista;
            }catch(Exception $e){
                return $e;
            }

        }

        public static function criar($idUsuario, $idVaga){

            $conexao = Conexao::conectar();
            $insert = 'INSERT INTO tbcandidatura(idUsuario, idVaga, status) VALUES(?,?,'. 1 .')';
            $prepare = $conexao->prepare($insert);
            $prepare->bindValue(1, $idUsuario);
            $prepare->bindValue(2, $idVaga);

            try{
                $prepare->execute();
                return true;
            } catch(Exception $e){
                return false;
            }

        }

        public static function recusar($id){

            $conexao = Conexao::conectar();
            $insert = 'UPDATE tbcandidatura SET status = 0 WHERE idCandidatura = ?';
            $prepare = $conexao->prepare($insert);
            $prepare->bindValue(1, $id);
            try{
                $prepare->execute();
                return true;
            } catch(Exception $e){
                return false;
            }

        }

        public static function aceitar($id){

            $conexao = Conexao::conectar();
            $insert = 'UPDATE tbcandidatura SET status = 2 WHERE idCandidatura = ?';
            $prepare = $conexao->prepare($insert);
            $prepare->bindValue(1, $id);
            try{
                $prepare->execute();
                return true;
            } catch(Exception $e){
                return false;
            }

        }

        public static function check($idUsuario, $idVaga){

            $conexao = Conexao::conectar();
            $select = 'SELECT COUNT(idCandidatura) AS count FROM tbcandidatura WHERE idUsuario = ? AND idVaga = ?';
            $prepare = $conexao->prepare($select);
            $prepare->bindValue(1, $idUsuario);
            $prepare->bindValue(2, $idVaga);
            try{
                $prepare->execute();
                $fetch = $prepare->fetch(PDO::FETCH_ASSOC);
                $cont = $fetch['count'];
                if($cont==0){
                    return true;
                } else {
                    return false;
                }
            } catch(Exception $e){
                return false;
            }

        }

    }

?>