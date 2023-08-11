import { View, Text } from "react-native";
import style from "./style";

export default function Title(){
    return(
        <View style={style.container}>
            <Text style={style.title}>Registrar-se</Text>
            <Text style={style.txt}>Para começar a aproveitar todos os recursos e benefícios, siga estes passos simples para criar sua conta:</Text>
        </View>
    )
}