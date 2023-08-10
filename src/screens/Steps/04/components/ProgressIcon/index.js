import { View } from "react-native";
import style from './style'

export default function Progress(){
    return(
        <View style={style.container}>
            <View style={style.inactive}/>
            <View style={style.inactive}/>
            <View style={style.active}/>
            <View style={style.inactive}/>
        </View>
    )
}