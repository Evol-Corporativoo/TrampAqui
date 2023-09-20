<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once('../model/Usuario.php');
    require_once('../dao/DaoUsuario.php');

    $json = file_get_contents('php://input');
    $data = json_decode($json);
    
    $usuario = new Usuario();

    if (filter_var($data[0], FILTER_VALIDATE_EMAIL)) {
        $usuario->setEmail($data[0]);
    } else {
        $usuario->setCpf($data[0]);
    }
    $usuario->setSenha($data[1]);
    
    $result = DaoUsuario::cadastrar($usuario);
    echo json_encode($result);

?>