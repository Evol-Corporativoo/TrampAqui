import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Header from './components/header'
import style from './style'

export default function Home(){
    return(
        <View style={style.container}>
            <ImageBackground source={`../../../assets/map.png`} style={style.map}/>
        </View> 
    )
}