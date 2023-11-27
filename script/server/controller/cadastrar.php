<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once('../dao/DaoUsuario.php');
    require_once('../model/Usuario.php');

    $json = file_get_contents('php://input');
    $data = json_decode($json);
    
    $usuario = new Usuario();
    $usuario->setNome($data[0]);
    $numerosCpf = preg_replace('/[^0-9]/', '',$data[1]);
    $usuario->setCpf($numerosCpf);
    $arrayData = explode('/',$data[5]);
    $dataNasc = $arrayData[2].'-'.$arrayData[1].'-'.$arrayData[0];
    $usuario->setDataNasc($dataNasc);
    $usuario->setEmail($data[2]);
    $usuario->setSenha($data[3]);
    $usuario->setTelefone($data[4]);

    $cadastrou = DaoUsuario::cadastrar($usuario);
    echo json_encode($cadastrou);

?>