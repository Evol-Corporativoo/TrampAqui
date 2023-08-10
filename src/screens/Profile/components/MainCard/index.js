import React, {useState} from 'react'
import { View, Text } from 'react-native'
import style from './style'

export default function Card(){
    const [username,setUsername] = useState('Gustavo Joia')
    const [job,setJob] = useState('Programador back-end')
    return(
        <View style={style.container}>
            <View style={style.icon}></View>
            <Text style={style.title}>{username}</Text>
            <Text style={style.subtitle}>{job}</Text>
        </View>
    )
}