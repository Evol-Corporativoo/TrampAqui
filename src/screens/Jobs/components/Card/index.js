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
            <Text style={style.txt_titulo}>Em breve</Text>
        </View>
    )
}