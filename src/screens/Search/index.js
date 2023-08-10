import React from 'react'
import { View, Text } from 'react-native'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import style from './style'

export default function Search(){
    return(
        <View style={style.container}>
            <SearchBar/>
            <Results/>
        </View>
    )
}