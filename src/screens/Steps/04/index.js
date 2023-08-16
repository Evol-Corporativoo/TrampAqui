import {View, Text, Image} from 'react-native';
import style from './style'
import GradientButton from './components/GradientBtn';
import Progress from './components/ProgressIcon';

export default function Step04(){
    return(
        <View style={style.container}>
            <Image style={style.img} source={require(`../../../../assets/img/4.png`)} />
            <View style={style.textarea}>
                <Text style={style.destaque}>Dados Pessoais</Text>
                <Text style={style.txt}>Proteger seus dados pessoais é essencial. Mantenha suas senhas seguras, evite compartilhá-las com terceiros e use autenticação via e-mail sempre que possível.</Text>
                <Text style={style.txt}>Esteja atento a possíveis tentativas de ou fraudes, e não clique em links suspeitos ou forneça informações pessoais por e-mail ou mensagens não confiáveis.</Text>
            </View>
            <GradientButton/>
            <Progress/>
        </View>
    )
}