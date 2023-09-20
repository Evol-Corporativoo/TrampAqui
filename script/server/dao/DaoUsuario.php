<?php

    require_once('../model/Conexao.php');
    require_once('../model/Usuario.php');

    class DaoUsuario{

        public static function cadastrar(Usuario $usuario){

            $conexao = Conexao::conectar();
            $insert = 'INSERT INTO tbUsuario(nomeUsuario, cpfUsuario, dataNascUsuario, senhaUsuario, emailUsuario, telefoneUsuario)
                       VALUES (?,?,?,?,?,?)';
            $prepare = $conexao->prepare($insert);
            $prepare->bindValue(1, $usuario->getNome());
            $prepare->bindValue(2, $usuario->getCpf());
            $prepare->bindValue(3, $usuario->getDataNasc());
            $prepare->bindValue(4, $usuario->getSenha());
            $prepare->bindValue(5, $usuario->getEmail());
            $prepare->bindValue(6, $usuario->getTelefone());

            $prepare->execute();

            return json_encode('true');

        }

        public static function logar(Usuario $usuario){

            $conexao = Conexao::conectar();
            if($usuario->getEmail()==null && $usuario->getCpf()!=null){
                $select = 'SELECT (cpfUsuario, senhaUsuario) FROM tbUsuario WHERE cpfUsuario LIKE ? AND senhaUsuario LIKE ?';
                $prepare = $conexao->prepare($select);
                $prepare->bindValue(1,$usuario->getCpf());
                $prepare->bindValue(2,$usuario->getSenha());
            } else {
                $select = 'SELECT (emailUsuario, senhaUsuario) FROM tbUsuario WHERE emailUsuario LIKE ? AND senhaUsuario LIKE ?';
                $prepare = $conexao->prepare($select);
                $prepare->bindValue(1,$usuario->getEmail());
                $prepare->bindValue(2,$usuario->getSenha());
            }

            $prepare->execute();
            $lista = $prepare->fetch(PDO::FETCH_ASSOC);

            return [true, $lista];

        }

    }

?>