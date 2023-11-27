<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once(__DIR__.'/../model/Curriculo.php');
    require_once(__DIR__.'/../dao/DaoCurriculo.php');

    $json = file_get_contents('php://input');
    $data = json_decode($json);

    // print_r($data);

    $curriculo = new Curriculo();
    $curriculo->setIdUsuario($data->idUsuario);
    $curriculo->setObjetivo($data->objetivo);
    $curriculo->setHabilidades($data->habilidades);
    $curriculo->setEstadoCivil($data->estadoCivil);
    $curriculo->setGenero($data->genero);
    $id = DaoCurriculo::cadastrar($curriculo);

    foreach ($data->idiomas as $idioma) {
        $return = DaoCurriculo::cadastrarIdioma($idioma, $id);
        echo $return;
    }
    foreach($data->experiencias as $experiencia){
        $return = DaoCurriculo::cadastrarExperiencia($experiencia, $id);
        echo $return;
    }
    foreach($data->formacoes as $formacao){
        $return = DaoCurriculo::cadastrarFormacoes($formacao, $id);
        echo $return;
    }

   // echo json_encode(true);

    

    

?>