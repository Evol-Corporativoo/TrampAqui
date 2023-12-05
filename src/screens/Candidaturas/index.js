import { View, TouchableOpacity, Text, FlatList } from "react-native";
import { useRoute, useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import style from "./style";


export default function Candidaturas(){

    const Route = useRoute()
    const {data} = Route.params
    const [id, setId] = useState('')
    const [status, setStatus] = useState()
    const [candidaturas, setCandidaturas] = useState([])

    function getCandidaturas(){

        let url = 'http://localhost/Trampo/script/server/controller/minhasCandidaturas.php'
        let options = {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.idUsuario)
        }

        fetch(url,options)
        .then(response=>response.json())
        .then(response=>{
            setCandidaturas(response)
        })

    }

    useFocusEffect(()=>{
        getCandidaturas()
    })

    function colorBox(status){
        if(status=='0'){
            return {backgroundColor:'red'}
        } else if(status=='1'){
            return {backgroundColor:'yellow'}
        } else if(status=='2'){
            return {backgroundColor:'green'}
        }
    }

    function message(status){
        if(status=='0'){
            return 'Recusada.'
        } else if(status=='1'){
            return 'Em análise.'
        } else if(status=='2'){
            return 'Aprovada. Atenção na caixa do email.'
        }
    }

    const Nav = useNavigation()

    function navDetalhes(dados){
        Nav.navigate('details',{data: JSON.stringify(dados), user: data})
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>Minhas candidaturas</Text>

            <FlatList
            
                style={style.results}
                data={candidaturas}
                renderItem={({item})=>(
                    <View style={style.card}>
                        <View style={style.col}>
                            <Text style={style.label}>#</Text>
                            <Text>{item.idCandidatura}</Text>
                        </View>
                        <View style={style.col}>
                            <Text style={style.label}>Vaga</Text>
                            <TouchableOpacity onPress={()=>navDetalhes({idVaga: item.idVaga, nomeVaga: item.nomeVaga, descVaga: item.descVaga, cargoVaga: item.cargoVaga, cargaHorariaVaga: item.cargaHorariaVaga, salarioVaga: item.salarioVaga, tipoVaga: item.tipoVaga, modeloVaga: item.modeloVaga, formacaoVaga: item.formacaoVaga, idEmpresa: item.idEmpresa, nomeEmpresa: item.nomeEmpresa, logradouroEmpresa: item.logradouroEmpresa, numeroEmpresa: item.numeroEmpresa, complementoEmpresa: item.complementoEmpresa, cepEmpresa: item.cepEmpresa, cidadeEmpresa: item.cidadeEmpresa, ufEmpresa: item.ufEmpresa, bairroEmpresa: item.bairroEmpresa})} style={style.btn}>
                                <Text>Visualizar</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={style.col}>
                            <Text style={style.label}>Status</Text>
                            <View style={[style.status_box,colorBox(item.status)]}></View>
                        </View>
                        <View style={style.col}>
                            <Text style={style.label}>Aviso</Text>
                            <Text>{message(item.status)}</Text>
                        </View>
                    </View>
                )}
            
            />

        </View>
    )

}