import React from "react";
import { View, Text } from "react-native";
import { useRoute } from '@react-navigation/native'
import style from "./style";
import numberFormat from "../../../script/client/number-mask";
import realFormat from "../../../script/client/money-mask";
import { TouchableOpacity } from "react-native";

export default function Details(){

    const route = useRoute();
    const data = {idVaga:route.params.idVaga,nomeVaga:route.params.nomeVaga,descVaga:route.params.descVaga,salarioVaga: route.params.salarioVaga, cargaHora: route.params.cargaHora, endereco: 'Em breve'}

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
                    <Text style={style.detalhes_titulo}>Salário e beneficios:</Text>
                    <Text style={style.salarioVaga}>
                        Salário de {realFormat(data.salarioVaga)}
                    </Text>
                </View>
                <View style={style.vaga_cargaHora}>
                    <Text style={style.detalhes_titulo}>Escala de trabalho:</Text>
                    <Text style={style.cargaHora}>Carga horária de {data.cargaHora} horas</Text>
                </View>
                <View style={style.vaga_endereco}>
                    <Text style={style.detalhes_titulo}>Endereço do trabalho:</Text>
                    <Text style={style.enderecoVaga}>{data.endereco}</Text>
                </View>
                <TouchableOpacity style={style.btn_submit}>
                    <Text style={style.text_submit}>Candidatar-se a vaga</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}