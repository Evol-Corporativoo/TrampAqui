<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    $json = file_get_contents('php://input');
    $id = json_decode($json);

    

?>