import React from 'react'
import { View, Text } from 'react-native'
import style from './style'

export default function Title(){
    return(
        <View style={style.container}>
            <Text style={style.main}>Próximo a você</Text>
            <Text style={style.sub}>Com base em seu currículo, temos o prazer de apresentar algumas vagas que são adequadas ao seu perfil. Confira abaixo as oportunidades que podem despertar seu interesse:</Text>
        </View>
    )
}