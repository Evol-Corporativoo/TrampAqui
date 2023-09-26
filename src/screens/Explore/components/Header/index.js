import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import style from './style';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import Notifications from '../../../../routes/TabNav/Notfications';

export default function Header(){
    return(
        <View style={style.container}>
            <View style={style.l_col}>
            </View>
            <View style={style.m_col}>
                <Text style={style.title}>Explorar</Text>
            </View>
            <Notifications/>
        </View>
    )
}