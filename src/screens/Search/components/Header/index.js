import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import style from './style';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Notifications from '../../../../routes/TabNav/Notfications';

export default function Header(){
    const [username,setUsername] = useState('Gustavo Joia')
    return(
        <View style={style.container}>
            <View style={style.l_col}>
            </View>
            <Notifications/>
        </View>
    )
}