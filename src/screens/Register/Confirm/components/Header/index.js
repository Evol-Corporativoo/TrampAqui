import {View, Text, Image} from 'react-native'
import style from './style'

export default function Header(){
    return(
        <View style={style.container}>
            <Text style={style.title}>Confirme seu e-mail</Text>
            <Image style={style.img} source={require(`../../../../../../assets/img/6.png`)}/>
        </View>
    )
}