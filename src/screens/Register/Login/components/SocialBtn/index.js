import {View, Text, TouchableOpacity, Image} from 'react-native'
import style from './style'

export default function SocialBtn(props){
    return(
        <TouchableOpacity style={[style.container,{backgroundColor: `${props.bg}`}]}>
            <View style={style.btn}>
                <Image source={require(`../../../../../../assets/logo/${props.img}.png`)} style={style.icon}/>
                <View style={[style.div,{borderColor: `${props.label}`}]} />
                <Text style={[style.label,{color: `${props.label}`}]}>Entrar com {props.social}</Text>
            </View>
        </TouchableOpacity>
    )
}