import { TouchableOpacity, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { AntDesign } from '@expo/vector-icons';

import style from './style'
import { useNavigation } from "@react-navigation/native";

export default function GradientButton(){
    const nav = useNavigation();
    function toNext(){
        nav.navigate('home')
    }
    return(
        <TouchableOpacity style={style.btn} onPress={toNext}>
            <LinearGradient
                colors={['#00FEA0','rgba(46,195,201,0.47)', 'rgba(89,140,239,0)']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={style.btn_grad}
            >
                <Text style={style.btn_txt}>Começar</Text>
                <AntDesign name="right" size={style.icon.size} color={style.icon.color} />  
            </LinearGradient>
        </TouchableOpacity>
    )
}