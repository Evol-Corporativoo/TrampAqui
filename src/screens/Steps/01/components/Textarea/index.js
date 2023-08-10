import style from './style'
import { Text, ImageBackground, View } from "react-native";
import GradientButton from "../GradientBtn";

export default function Textarea(){
    return(
        <View>
            <ImageBackground
            source={require(`../../../../../../assets/img/tela1/fundoTextArea.png`)}
            resizeMode={'cover'}
            style={style.bg}
            />   
            <View style={style.textarea}>
                <Text style={style.title}>Seja bem-vindo ao<Text style={style.span}>TrampAqui</Text></Text>
                <Text style={style.welcome_txt}>Estamos extremamente empolgados em tê-lo(a) aqui. Este aplicativo foi cuidadosamente desenvolvido para conectar talentos como você com oportunidades de emprego incríveis em diversos setores e localidades.</Text>
            </View>
            <GradientButton/>
        </View>
    )
}