import {View, Text, Image} from 'react-native'
import style from './style'

export default function Header(){
    return(
        <View style={style.container}>
            <Text style={style.title}>Redefinir senha</Text>
            <Image style={style.img} source={require(`../../../../../../assets/img/9.png`)}/>
        </View>
    )
}