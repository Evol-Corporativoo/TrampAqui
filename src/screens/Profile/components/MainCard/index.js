import React, {useState} from 'react'
import { View, Text } from 'react-native'
import style from './style'

import { useContext } from 'react'
import { RegisterContext } from '../../../../../data/context'

export default function Card(){
    const [username,setUsername] = useState('Gustavo Joia')
    const [job,setJob] = useState('Programador back-end')

    const {user} = useContext(RegisterContext)

    return(
        <View style={style.container}>
            <View style={style.icon}></View>
            <Text style={style.title}>{user.nome}</Text>
            <Text style={style.subtitle}>{job}</Text>
        </View>
    )
}