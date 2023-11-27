<?php

    require_once('../model/Usuario.php');
    require_once('../model/Conexao.php');

    class DaoUsuario{

        public static function cadastrar(Usuario $usuario){

            $conexao = Conexao::conectar();
            $insert = 'INSERT INTO tbUsuario(nomeUsuario, cpfUsuario, emailUsuario, telefoneUsuario, dataNascUsuario, senhaUsuario)
                       VALUES (?,?,?,?,?,?)';
            $prepare = $conexao->prepare($insert);
            $prepare->bindValue(1, $usuario->getNome());
            $prepare->bindValue(2, $usuario->getCpf());
            $prepare->bindValue(3, $usuario->getEmail());
            $prepare->bindValue(4, $usuario->getTelefone());
            $prepare->bindValue(5, $usuario->getDataNasc());
            $prepare->bindValue(6, password_hash($usuario->getSenha(),PASSWORD_DEFAULT));

            try{
                $prepare->execute();
                return true;
            } catch(Exception $e){
                return $e->getMessage();
            }

        }

        public static function logar(Usuario $usuario, $campo){

            $conexao = Conexao::conectar();

            $cpfNumerico = preg_replace('/[^0-9]/', '', $usuario->getCpf());

            // Adiciona pontos e traço ao CPF formatado
            $cpfFormatado = substr($cpfNumerico, 0, 3) . '.' . substr($cpfNumerico, 3, 3) . '.' . substr($cpfNumerico, 6, 3) . '-' . substr($cpfNumerico, 9, 2);
            $usuario->setCpf($cpfFormatado);
            if($campo == 0){
                $select = 'SELECT COUNT(idUsuario) AS contagem FROM tbUsuario
                       WHERE (emailUsuario = ?)';
                $prepare = $conexao->prepare($select);
                $prepare->bindValue(1, $usuario->getEmail());

                $data = 'SELECT * from tbUsuario WHERE emailUsuario = ?';
                $p = $conexao->prepare($data);
                $p->bindValue(1, $usuario->getEmail());

            } else {
                $select = 'SELECT COUNT(idUsuario) AS contagem FROM tbUsuario
                       WHERE (cpfUsuario = ?)';
                $prepare = $conexao->prepare($select);
                $prepare->bindValue(1, $usuario->getCpf());

                $data = 'SELECT * from tbUsuario WHERE cpfUsuario = ?';
                $p = $conexao->prepare($data);
                $p->bindValue(1, $usuario->getCpf());

            }

            $prepare->execute();

            $lista = $prepare->fetch(PDO::FETCH_ASSOC);
            $contagem = $lista['contagem'];

            if($contagem >= 1){
                $p->execute();
                $array_p = $p->fetch(PDO::FETCH_ASSOC);
                if(password_verify($usuario->getSenha(),$array_p['senhaUsuario'])){
                    return [true, $array_p];
                } else {
                    return [false];
                }
            } else {
                return [false];
            }

        }

        public static function buscar($usuario, $campo){

            $conexao = Conexao::conectar();
            if($campo == 0){
                $select = 'SELECT * FROM tbUsuario
                       WHERE (emailUsuario LIKE ? AND senhaUsuario LIKE ?)';
                $prepare = $conexao->prepare($select);
                $prepare->bindValue(1, $usuario->getEmail());
                $prepare->bindValue(2, $usuario->getSenha());
            } else {
                $select = 'SELECT * FROM tbUsuario
                       WHERE (cpfUsuario LIKE ? AND senhaUsuario LIKE ?)';
                $prepare = $conexao->prepare($select);
                $prepare->bindValue(1, $usuario->getCpf());
                $prepare->bindValue(2, $usuario->getSenha());
            }
            $prepare->execute();
            $lista = $prepare->fetch(PDO::FETCH_ASSOC);
            $novo = new Usuario();
            $novo->setId($lista['idUsuario']);
            $novo->setNome($lista['nomeUsuario']);
            $novo->setCpf($lista['cpfUsuario']);
            $novo->setTelefone($lista['telefoneUsuario']);
            $novo->setDataNasc($lista['dataNascUsuario']);
            $novo->setEmail($lista['emailUsuario']);
            $novo->setSenha($lista['senhaUsuario']);

            return $novo->emArray();

        }

        public function buscarCurriculo(Int $id){

            $conexao = Conexao::conectar();
            $select_usuario = 'SELECT nomeUsuario, cpfUsuario, emailUsuario, telefoneUsuario, dataNascUsuario FROM tbusuario WHERE idUsuario = ?';
            $select_curriculo = 'SELECT * FROM tbcurriculo WHERE idUsuario = ?';
            $p1 = $conexao->prepare($select_usuario);
            $p2 = $conexao->prepare($select_curriculo);
            $p1->bindValue(1, $id);
            $p2->bindValue(1, $id);

        }

        public function verificarCurriculo($id){

            $conexao = Conexao::conectar();
            $select = 'SELECT * FROM tbcurriculo WHERE idUsuario = ?';
            $prepare = $conexao->prepare($select);
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