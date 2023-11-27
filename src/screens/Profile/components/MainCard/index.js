import React, {useState} from 'react'
import { View, Text } from 'react-native'
import style from './style'
import { useRoute } from '@react-navigation/native'

import { useContext } from 'react'
import { RegisterContext } from '../../../../../data/context'

export default function Card(){
    const [username,setUsername] = useState('Gustavo Joia')
    const [job,setJob] = useState('...')

    const Route = useRoute()
    const data = JSON.parse(Route.params.data)

    const {user} = useContext(RegisterContext)

    return(
        <View style={style.container}>
            <View style={style.icon}></View>
            <Text style={style.title}>{data.nomeUsuario}</Text>
            <Text style={style.subtitle}>{job}</Text>
        </View>
    )
}