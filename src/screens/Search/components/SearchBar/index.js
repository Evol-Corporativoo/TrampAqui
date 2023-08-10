import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';
import style from './style'

export default function SearchBar(){
    return(
        <View style={style.bar}>
            <Feather style={style.icon} name='search' size={style.icon.size} color={style.icon.color}/>
            <View style={style.text_view}>
                <TextInput style={style.text}/>
            </View>
        </View>
    )
}