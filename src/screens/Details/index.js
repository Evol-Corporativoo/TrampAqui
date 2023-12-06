import React, {useState} from "react";
import { View, Text } from "react-native";
import { useRoute, useFocusEffect } from '@react-navigation/native'
import style from "./style";
import numberFormat from "../../../script/client/number-mask";
import realFormat from "../../../script/client/money-mask";
import { TouchableOpacity } from "react-native";

export default function Details(){

    const [messageDisplay, setMessageDisplay] = useState({
        display: 'none'
    })
    const [displayBtn,setDisplayBtn] = useState({
        display: 'flex'
    })
    const [displayCheck, setDisplayCheck] = useState({
        display: 'none'
    })

    const route = useRoute();
    const data = JSON.parse(route.params.data)
    const user = route.params.user

    function check(){
        let url = 'http://localhost/Trampo/script/server/controller/checkCandidatura.php'
        let options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({idUsuario: user.idUsuario,idVaga:data.idVaga})
        }
        fetch(url,options)
        .then(response=>response.json())
        .then(response=>{
            if(response==false){
                setDisplayBtn({display:'none'})
                setDisplayCheck({display: 'flex'})
            } else {
                setDisplayBtn({display:'flex'})
                setDisplayCheck({display: 'none'})
            }
        })
    }

    useFocusEffect(()=>{
        check()
    })

    let modelo
    if(data.modeloVaga=='remoto'){
        modelo = 'Remoto'
    } else if(data.modeloVaga=='hibrido'){
        modelo = 'Híbrido'
    } else {
        modelo = 'Presencial'
    }

    let tipo
    if(data.tipoVaga=='efetivo'){
        tipo = 'Efetivo/CLT'
    } else if(data.tipoVaga=='autonomo'){
        tipo = 'Autônomo/PJ'
    } else {
        tipo = 'Estágio/Trainee'
    }

    let formacaoMinima
    if(data.formacaoVaga=='semvalor'){
        formacaoMinima = 'Sem formação mínima'
    } else if(data.formacaoVaga=='fundamental-incompleto'){
        formacaoMinima = 'Ensino Fundamental Incompleto'
    } else if(data.formacaoVaga=='fundamental-completo'){
        formacaoMinima = 'Ensino Fundamental Completo'
    } else if(data.formacaoVaga=='medio-incompleto'){
        formacaoMinima = 'Ensino Médio Incompleto'
    } else if(data.formacaoVaga=='medio-completo'){
        formacaoMinima = 'Ensino Médio Completo'
    } else if(data.formacaoVaga =='superior-incompleto'){
        formacaoMinima = 'Ensino Superior Incompleto'
    } else{
        formacaoMinima = 'Ensino Superior Completo'
    }

    return(
        <View style={style.container}>

                <View style={style.header_details}>
                    <View style={style.titulo_area}>
                        <Text style={style.subtitulo_main}>Vaga disponível</Text>
                        <Text style={style.titulo_main}>{data.nomeVaga}</Text>
                    </View>
                    <Text style={style.id_vaga}>N° da Vaga: {numberFormat(data.idVaga)}</Text>
                </View>
                <View style={style.vaga_body}>
                    <View style={style.vaga_desc}>
                        <Text style={style.detalhes_titulo}>Descrição do cargo:</Text>
                        <Text style={style.descVaga}>{data.descVaga}</Text>
                    </View>
                    <View style={style.vaga_salario}>
                        <Text style={style.detalhes_titulo}>Empregador</Text>
                        <Text style={style.salarioVaga}>{data.nomeEmpresa}</Text>
                    </View>
                    <View style={style.vaga_salario}>
                        <Text style={style.detalhes_titulo}>Detalhes</Text>
                        <Text style={style.salarioVaga}>{`• Vaga ${modelo}`}</Text>
                        <Text style={style.salarioVaga}>{`• Tipo: ${tipo}`}</Text>
                    </View>
                    <View style={style.vaga_salario}>
                        <Text style={style.detalhes_titulo}>Salário</Text>
                        <Text style={style.salarioVaga}>
                            Salário de {realFormat(data.salarioVaga)}
                        </Text>
                    </View>
                    <View style={style.vaga_salario}>
                        <Text style={style.detalhes_titulo}>Formação mínima</Text>
                        <Text style={style.salarioVaga}>{`• ${formacaoMinima}`}</Text>
                    </View>
                    <View style={style.vaga_cargaHora}>
                        <Text style={style.detalhes_titulo}>Escala de trabalho:</Text>
                        <Text style={style.cargaHora}>Carga horária de {data.cargaHorariaVaga} horas semanais</Text>
                    </View>
                    <View style={style.vaga_endereco}>
                        <Text style={style.detalhes_titulo}>Endereço do trabalho:</Text>
                        <Text style={style.enderecoVaga}>{`${data.logradouroEmpresa}, ${data.numeroEmpresa} ${data.complementoEmpresa} - ${data.bairroEmpresa}, ${data.cidadeEmpresa} - ${data.ufEmpresa}, ${data.cepEmpresa}`}</Text>
                    </View>
                </View>

            <Text style={[style.subtitulo_main, messageDisplay]}>Candidatura feita!</Text>
            <Text style={[style.subtitulo_main,displayCheck,{fontWeight:'bold',marginTop: '2vh',fontSize: '1.2rem'}]}>Candidatura à vaga já realizada</Text>
            <TouchableOpacity style={[style.btn_submit,displayBtn]}
                onPress={()=>{
                    let url = 'http://localhost/Trampo/script/server/controller/candidatura.php'
                    let options = {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({idUsuario: user.idUsuario, idVaga: data.idVaga})
                    }
                    fetch(url, options)
                    .then(response=>response.json())
                    .then(response=>{
                        if(response==true){
                            setMessageDisplay({
                                display: 'flex'
                            })
                            setTimeout(()=>{
                                setMessageDisplay({
                                    display: 'none'
                                })
                            }, 1000)
                        }
                    })
                }}
            >
                <Text style={style.text_submit}>Candidatar-se a vaga</Text>
            </TouchableOpacity>

        </View>
    )
}