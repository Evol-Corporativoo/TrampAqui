import {View, Text, Image} from 'react-native';
import style from './style'
import GradientButton from './components/GradientBtn';
import Progress from './components/ProgressIcon';

export default function Step02(){
    return(
        <View style={style.container}>
            <Image style={style.img} source={require(`../../../../assets/img/2.png`)} />
            <View style={style.textarea}>
                <Text style={style.destaque}>Localização:</Text>
                <Text style={style.txt}>Nosso aplicativo de vagas de emprego utiliza seu endereço para fornecer oportunidades de trabalho relevantes em sua região. <Text style={[style.destaque, {marginLeft: ''}]}>Veja como funciona:</Text></Text>
                <Text style={style.txt}><Text style={style.destaque}>Localização automática:</Text> Ao abrir o aplicativo pela primeira vez, ele usará sua localização para exibir vagas de emprego próximas a você.</Text>
                <Text style={style.txt}>Caso sua localização esteja desligado, ligue-o para poder entrar no nosso aplicativo.</Text>
            </View>
            <GradientButton/>
            <Progress/>
        </View>
    )
}