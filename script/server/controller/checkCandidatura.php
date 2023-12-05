<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once(__DIR__.'/../dao/DaoCandidatura.php');

    $json = file_get_contents('php://input');
    $id_obj = json_decode($json);

    $response = DaoCandidatura::check($id_obj->idUsuario, $id_obj->idVaga);
    echo json_encode($response);

?>