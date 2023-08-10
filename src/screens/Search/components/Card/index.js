import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";
import realFormat from '../../../../../script/client/money-mask'
import numberFormat from "../../../../../script/client/number-mask";

export default function Card(job){
    let salario = realFormat(job.salario)
    let id = numberFormat(job.id)
    return(
        <View style={style.container}>
            <View style={style.l_col}>
                <View style={style.f_group}>
                    <Text style={style.txt_small}>Vaga CLT</Text>
                    <Text style={style.txt_titulo}>{job.nome}</Text>
                </View>
                <View style={style.s_group}>
                    <Text style={style.txt_small}>Salário</Text>
                    <Text style={style.txt_titulo}>{salario}</Text>
                </View>
                <TouchableOpacity style={style.btn}>
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