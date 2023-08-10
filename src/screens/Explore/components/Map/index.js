import { Image } from "react-native";
import style from './style'

export default function Map(){
    return(
        <Image style={style.container} source={require(`../../../../../assets/img/map.png`)}/>
    )
}