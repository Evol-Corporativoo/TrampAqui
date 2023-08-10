import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import style from './style';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={style.container}>
            <View style={style.l_col}>
            </View>
            <View style={style.m_col}>
                <Text style={style.title}>Explorar</Text>
            </View>
            <View style={style.r_col}>
                <TouchableOpacity>
                    <Feather name="bell" size={style.icon.size} color={style.icon.color} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Octicons name="gear" size={style.icon.size} color={style.icon.color} />
                </TouchableOpacity>            
            </View>
        </View>
    )
}