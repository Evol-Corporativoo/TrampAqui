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
            <Text style={style.txt}>Acabamos de enviar um código para o e-mail de endereço fornecido com um código de redefinição de senha. Por favor, verifique sua caixa de entrada e siga as instruções fornecidas para redefinir sua senha. Caso precise de ajuda, entre em contato com nossa equipe de suporte.</Text>
            <Text style={style.txt}>Estamos aqui para ajudar a garantir a segurança e a proteção da sua conta.</Text>
            <View style={style.input_area}>
                <TextInput style={style.code_input}/>
                <TextInput style={style.code_input}/>
                <TextInput style={style.code_input}/>
                <TextInput style={style.code_input}/>
            </View>
            <Text style={style.send}>Receber código</Text>
            <Btn/>
            <Text style={[style.txt, style.send, style.support]}>Entrar em contato com o <Text style={style.bold}>Suporte</Text></Text>
        </View>
    )
}