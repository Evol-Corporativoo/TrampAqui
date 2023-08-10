import React from "react";
import { View, Text } from "react-native";
import style from "./style";
import { Feather } from '@expo/vector-icons';

export default function ExploreIcon(){
    return(
        <View style={style.shape}>
            <View style={style.container}>
                <Feather name="compass" size={style.icon.size} color={style.icon.color} />
            </View>
        </View>
    )
}