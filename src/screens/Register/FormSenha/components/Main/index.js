import style from './style'
import { View, TextInput, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Entypo } from '@expo/vector-icons';
import Btn from '../Btn'

export default function Main(){
    const grad = ['#00FEA0', 'rgba(89,140,239,0.3)']
    const start = {x: 0, y: 0.5}
    const end = {x: 1, y: 0.5}
    const loc = [0.8, 1]
    let iconColor
    return(
        <View style={style.container}>
            <Text style={style.txt}>Lembre-se de que uma senha forte é essencial para proteger sua conta. Evite reutilizar senhas antigas ou compartilhá-las com outras pessoas.</Text>
            <View style={style.input_area}>
                <Text style={style.label}>Nova senha</Text>
                <LinearGradient
                    colors={grad}
                    start={start}
                    end={end}
                    locations={loc}
                    style={style.input_bg}
                >
                    <TextInput style={style.input}
                        placeholder='Senha'
                    />
                </LinearGradient>
                <Text style={style.label}>Confirmar senha</Text>
                <LinearGradient
                    colors={grad}
                    start={start}
                    end={end}
                    locations={loc}
                    style={style.input_bg}
                >
                    <TextInput style={style.input}
                        placeholder='Reescreva a nova senha'
                    />
                </LinearGradient>
            </View>
            <Btn/>
            <Text style={[style.txt, style.send, style.support]}>Entrar em contato com o <Text style={style.bold}>Suporte</Text></Text>
        </View>
    )
}