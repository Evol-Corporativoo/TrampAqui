import {View, Text, Image} from 'react-native'
import style from './style'

export default function Header(){
    return(
        <View style={style.container}>
            <Text style={style.title}>Parabéns! Conta criada com sucesso.</Text>
            <Image style={style.img} source={require(`../../../../../../assets/img/7.png`)}/>
        </View>
    )
}