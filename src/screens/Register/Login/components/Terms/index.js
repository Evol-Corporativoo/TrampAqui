import { Text, View, TouchableOpacity } from "react-native";
import style from "./style";

export default function Terms(){
    return(
        <View style={style.container}>
            <Text style={style.txt}>
                Entrar em contato com o
                <TouchableOpacity>
                    <Text style={style.bold}>Suporte</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}