<?php

    require_once('../model/Usuario.php');
    require_once('../dao/DaoUsuario.php');

    $json = file_get_contents('php://input');
    $data = json_decode($json);
    
    $usuario = new Usuario();
    $usuario->setNome($data['nome']);
    $usuario->setCpf($data['cpf']);
    $usuario->setDataNasc($data['dataNasc']);
    $usuario->setEmail($data['email']);
    $usuario->setSenha($data['senha']);

    $result = DaoUsuario::cadastrar($usuario);
    return $result;

?>