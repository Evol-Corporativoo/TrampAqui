<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once(__DIR__.'/../dao/DaoCurriculo.php');

    $json = file_get_contents('php://input');
    $id = json_decode($json);

    $data = DaoCurriculo::buscarCurriculo($id);

    echo json_encode($data);

?>