import {View, Text, Image} from 'react-native'
import style from './style'

export default function Header(){
    return(
        <View style={style.container}>
            <Text style={style.title}>Redefinir senha</Text>
        </View>
    )
}