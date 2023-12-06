import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import style from './style';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { useContext } from 'react'
import { RegisterContext } from '../../../../../data/context';
import Notifications from '../../../../routes/TabNav/Notfications';
import { useRoute } from '@react-navigation/native';

export default function Header(){

    const {user, setUser, getUser} = useContext(RegisterContext)
    const Route = useRoute()
    const data = JSON.parse(Route.params.data)
    
    return(
        <View style={style.container}>
            <View style={style.l_col}>
                <Text style={style.welcome}>Bem-Vindo(a)</Text>
                <Text style={style.username}>{data.nomeUsuario.split(' ')[0]}</Text>
            </View>
            <Notifications/>
        </View>
    )
}