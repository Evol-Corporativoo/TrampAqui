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
            <Text style={style.txt}>Agradecemos por se juntar a nós! Agora você pode desfrutar de todos os recursos e benefícios do nosso aplicativo. Estamos felizes em tê-lo(a) como parte da nossa comunidade.</Text>
            <Text style={style.txt}>Seja bem-vindo(a) e não hesite em nos contatar se precisar de qualquer assistência. Estamos aqui para ajudar e tornar sua experiência a melhor possível. Aproveite ao máximo nosso aplicativo e explore tudo o que temos a oferecer!</Text>
            <Btn/>
        </View>
    )
}