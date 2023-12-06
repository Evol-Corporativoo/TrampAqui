<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once('../dao/DaoVaga.php');

    echo DaoVaga::listar();
    

?>