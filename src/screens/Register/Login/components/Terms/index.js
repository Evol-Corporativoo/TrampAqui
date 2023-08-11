import { Text, View } from "react-native";
import style from "./style";

export default function Terms(){
    return(
        <View style={style.container}>
            <Text style={style.txt}>
                Ao criar uma conta, você concorda com nossos
                <Text style={style.bold}>Termos e Condições</Text>
                e
                <Text style={style.bold}>Aviso de Privacidade</Text>
            </Text>
        </View>
    )
}