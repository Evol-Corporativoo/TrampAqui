<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once(__DIR__.'/../dao/DaoCandidatura.php');

    $json = file_get_contents('php://input');
    $dados = json_decode($json);

    $response = DaoCandidatura::criar($dados->idUsuario, $dados->idVaga);

    echo json_encode($response);

?>