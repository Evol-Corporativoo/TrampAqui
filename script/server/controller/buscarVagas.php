<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once('../dao/DaoVaga.php');

    $json = file_get_contents('php://input');
    $query = json_decode($json);
    //$query = 'o';
    if($query !== ' ' && $query != ''){
        $resultados = DaoVaga::buscar($query);

        echo $resultados;
    }
    

?>