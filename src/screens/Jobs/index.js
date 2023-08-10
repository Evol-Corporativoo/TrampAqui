import React from 'react'
import { View, Text } from 'react-native'
import style from './style'
import Results from './components/Results'
import Title from './components/Title'

export default function Jobs(){
    return(
        <View style={style.container}>
            <Title/>
            <Results/>
        </View>
    )
}