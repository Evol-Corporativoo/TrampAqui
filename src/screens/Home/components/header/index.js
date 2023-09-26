import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import style from './style';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { useContext } from 'react'
import { RegisterContext } from '../../../../../data/context';
import Notifications from '../../../../routes/TabNav/Notfications';

export default function Header(){

    const {user} = useContext(RegisterContext)
    
    return(
        <View style={style.container}>
            <View style={style.l_col}>
                <Text style={style.welcome}>Bem-Vindo</Text>
                <Text style={style.username}>{user.nome}</Text>
            </View>
            <Notifications/>
        </View>
    )
}