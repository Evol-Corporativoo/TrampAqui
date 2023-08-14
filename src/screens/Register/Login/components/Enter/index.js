import {View,Text} from 'react-native'
import style from './style'
import Btn from '../SocialBtn'

export default function Enter(){
    return(
        <View style={style.container}>
            <View style={style.div_area}>
                <View style={style.line}/>
                <Text style={style.title}>Fazer login com</Text>
                <View style={style.line}/>
            </View>
            <Btn
                bg={'#fff'}
                social={'Google'}
                img={'google'}
                label={'#000'}
            />
            <Btn
                bg={'#0085FF'}
                social={'Facebook'}
                img={'facebook'}
                label={'#fff'}
            />
        </View>
    )
}