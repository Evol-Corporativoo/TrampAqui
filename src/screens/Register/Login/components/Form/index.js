import style from './style'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Entypo } from '@expo/vector-icons';
import {useState} from 'react'; 

import { useNavigation } from '@react-navigation/native';

export default function Form(){
    const grad = ['#00FEA0', 'rgba(89,140,239,0.3)']
    const start = {x: 0, y: 0.5}
    const end = {x: 1, y: 0.5}
    const loc = [0.8, 1]
    let iconColor
    const nav = useNavigation()
    function n(){
        nav.navigate('reqpass')
    }

    const [usuario,setUsuario] = useState()
    const [senha,setSenha] = useState()

    return(
        <View style={style.container}>
            <Text style={style.label}>E-mail ou CPF</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input}
                    placeholder='Endereço de e-mail ou CPF'
                    onChangeText={(text)=>setUsuario(text)}
                />
            </LinearGradient>
            <Text style={style.label}>Senha</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input}
                    placeholder='Senha'
                    onChangeText={(text)=>setSenha(text)}
                />
            </LinearGradient>
            <TouchableOpacity onPress={n}>
                <Text style={style.span}>Redefinir senha</Text>
            </TouchableOpacity>
        </View>
    )
}