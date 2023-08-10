import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import style from './style'
import Main from './components/MainCard'
import CardArea from './components/CardArea'

export default function Profile(){
    return(
        <View style={style.container}>

            <Main/>
            <CardArea/>

        </View>
    )
}