import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";
import realFormat from '../../../../../script/client/money-mask'
import numberFormat from "../../../../../script/client/number-mask";
import { useNavigation } from "@react-navigation/native";

export default function Card(job){
    const Navigation = useNavigation()
    let salario = realFormat(job.salarioVaga)
    let id = numberFormat(job.idVaga)
    return(
        <View style={style.container}>
            <View style={style.l_col}>
                <View style={style.f_group}>
                    <Text style={style.txt_small}>Vaga CLT</Text>
                    <Text style={style.txt_titulo}>{job.nomeVaga}</Text>
                </View>
                <View style={style.s_group}>
                    <Text style={style.txt_small}>Salário</Text>
                    <Text style={style.txt_titulo}>{salario}</Text>
                </View>
                <TouchableOpacity onPress={()=>{Navigation.navigate('details',{idVaga:job.idVaga,nomeVaga:job.nomeVaga,descVaga:job.descVaga,cargoVaga:job.cargoVaga,cargaHora: job.cargaHorariaVaga,salarioVaga:job.salarioVaga,sobreVaga:job.sobreVaga})}} style={style.btn}>
                    <Text>Visualizar vaga</Text>
                </TouchableOpacity>
            </View>
            <View style={style.r_col}>
                <Text style={style.number}>N° da vaga: </Text>
                <Text style={style.j_number}>{id}</Text>
            </View>
        </View>
    )
}