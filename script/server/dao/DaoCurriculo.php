<?php

    require_once(__DIR__.'/../model/Curriculo.php');
    require_once(__DIR__.'/../model/Conexao.php');

    class DaoCurriculo{

        static function cadastrar(Curriculo $curriculo){

            $conexao = Conexao::conectar();
            $insert = 'INSERT INTO tbcurriculo(idUsuario, objetivoCurriculo, genero, estadoCivilCurriculo, habilidadesCurriculo)
            VALUES (?,?,?,?,?)';
            $prepare = $conexao->prepare($insert);
            $prepare->bindValue(1, $curriculo->getIdUsuario());
            $prepare->bindValue(2, $curriculo->getObjetivo());
            $prepare->bindValue(3, $curriculo->getGenero());
            $prepare->bindValue(4, $curriculo->getEstadoCivil());
            $prepare->bindValue(5, $curriculo->getHabilidades());

            $select = 'SELECT idCurriculo FROM tbCurriculo WHERE idUsuario = ?';
            $p = $conexao->prepare($select);
            $p->bindValue(1, $curriculo->getIdUsuario());

            try{
                $prepare->execute();
                $p->execute();
                $lista = $p->fetch(PDO::FETCH_ASSOC);
                return $lista['idCurriculo'];
            } catch (Exception $e){
                // return $e;
            }

        }

        public static function cadastrarIdioma($idiomas, $idCurriculo){

            $conexao = Conexao::conectar();

            $insert = 'INSERT INTO tbidioma(idioma, nivelIdioma, idCurriculo) VALUES (?,?,?)';
            $prepare = $conexao->prepare($insert);
            $prepare->bindValue(1, $idiomas->nomeIdioma);
            $prepare->bindValue(2, $idiomas->nivelIdioma);
            $prepare->bindValue(3, $idCurriculo);

            try{
                $prepare->execute();
                // return true;
            } catch (Exception $e){
                // return $e;
            }

        }

        public static function cadastrarExperiencia($experiencias, $idCurriculo){

            $conexao = Conexao::conectar();

            $insert = 'INSERT INTO tbexperiencia(tituloExperiencia, nomeEmpresa, dataInicioExperiencia, dataTerminoExperiencia, localidadeExperiencia, idCurriculo) 
            VALUES (?,?,?,?,?,?)';

            $splitInicio = explode('/',$experiencias->dataInicioExperiencia);
            $splitTermino = explode('/',$experiencias->dataTerminoExperiencia);
            $inicio = $splitInicio[1].'-'.$splitInicio[0].'-01';
            $termino = $splitTermino[1].'-'.$splitTermino[0].'-01';

            $prepare = $conexao->prepare($insert);
            $prepare->bindValue(1, $experiencias->nomeExperiencia);
            $prepare->bindValue(2, $experiencias->empregadorExperiencia);
            $prepare->bindValue(3, $inicio);
            $prepare->bindValue(4, $termino);
            $prepare->bindValue(5, $experiencias->cidadeExperiencia);
            $prepare->bindValue(6, $idCurriculo);
            echo($inicio.'|||'.$termino);

            try{
                $prepare->execute();
                // return true;
            } catch (Exception $e){
                // return $e;
            }

        }

        public static function cadastrarFormacoes($formacao, $idCurriculo){

            $conexao = Conexao::conectar();

            $insert = 'INSERT INTO tbformacao(instituicaoFormacao, localFormacao, diplomaFormacao, situacaoFormacao, dataInicioFormacao, dataTerminoFormacao, idCurriculo) 
            VALUES (?,?,?,?,?,?,?)';

            $splitInicio = explode('/',$formacao->dataInicioFormacao);
            $splitTermino = explode('/',$formacao->dataTerminoFormacao);
            $inicio = $splitInicio[1].'-'.$splitInicio[0].'-01';
            $termino = $splitTermino[1].'-'.$splitTermino[0].'-01';

            $prepare = $conexao->prepare($insert);
            $prepare->bindValue(1, $formacao->nomeFormacao);
            $prepare->bindValue(2, $formacao->cidadeFormacao);
            $prepare->bindValue(3, $formacao->diplomaFormacao);
            $prepare->bindValue(4, $formacao->situacaoFormacao);
            $prepare->bindValue(5, $inicio);
            $prepare->bindValue(6, $termino);
            echo($inicio.'|||'.$termino);
            $prepare->bindValue(7, $idCurriculo);

            try{
                $prepare->execute();
                // return true;
            } catch (Exception $e){
                // return false;
            }

        }

    }

?>