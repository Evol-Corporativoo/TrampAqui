import { View, Text, Image } from "react-native";
import style from "./style";

export default function Title(){
    return(
        <View style={style.container}>
            <View style={style.logo_area}>
                <Image style={style.logo} source={require(`../../../../../../assets/id/logotransparente.png`)}/>
                <Image style={style.letreiro} source={require(`../../../../../../assets/id/letreiro.png`)}/>
            </View>
            <Text style={style.title}>Login</Text>
        </View>
    )
}