import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import style from './style';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Header(){
    const [username,setUsername] = useState('Gustavo Joia')
    return(
        <View style={style.container}>
            <View style={style.l_col}>
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