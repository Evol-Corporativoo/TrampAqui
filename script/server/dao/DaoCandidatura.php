<?php

    require_once(__DIR__.'/../model/Conexao.php');

    class DaoCandidatura{

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

    }

?>