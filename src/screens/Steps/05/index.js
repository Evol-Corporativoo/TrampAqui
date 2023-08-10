import {View, Text, Image} from 'react-native';
import style from './style'
import GradientButton from './components/GradientBtn';
import Progress from './components/ProgressIcon';

export default function Step05(){
    return(
        <View style={style.container}>
            <Image style={style.img} source={require(`../../../../assets/img/5.png`)} />
            <View style={style.textarea}>
                <Text style={style.destaque}>Empresa Contratante</Text>
                <Text style={style.txt}>No nosso aplicativo você pode cadastrar sua empresa e contratar usuários próximos de você e pode acessar sua conta, desfrutando de recursos exclusivos para facilitar o processo de contratação. Basta inserir a credenciais da empresa cadastrada para ter acesso imediato a uma variedade de funcionalidades como:</Text>
                <Text style={style.txt}>Gerenciamento de vagas, Visualização de candidaturas, Acesso rápido a currículos e Análise de dados e métricas em uma interface de fácil manuseio.</Text>
            </View>
            <GradientButton/>
            <Progress/>
        </View>
    )
}