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
            <Text style={style.txt}>Acabamos de enviar um código de confirmação para o endereço de e-mail fornecido. Por favor, verifique sua caixa de entrada e siga as instruções para concluir o processo de confirmação. </Text>
            <Text style={style.txt}>Se você não receber o e-mail dentro de alguns minutos, verifique sua pasta de spam ou lixo eletrônico. Caso precise de ajuda, entre em contato com nossa equipe de suporte.</Text>
            <View style={style.input_area}>
                <TextInput style={style.code_input}/>
                <TextInput style={style.code_input}/>
                <TextInput style={style.code_input}/>
                <TextInput style={style.code_input}/>
            </View>
            <Text style={style.send}>Reenviar código</Text>
            <Btn/>
            <Text style={[style.txt, style.send, style.support]}>Entrar em contato com o <Text style={style.bold}>Suporte</Text></Text>
        </View>
    )
}