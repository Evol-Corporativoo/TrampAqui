import React from 'react'
import { View, Text } from 'react-native'
import style from './style'
import Map from './components/Map'

export default function Explore(){
    return(
        <View style={style.container}>
            <Map/>
        </View>
    )
}