import {View, Text, Image} from 'react-native';
import style from './style'
import GradientButton from './components/GradientBtn';
import Progress from './components/ProgressIcon';

export default function Step03(){
    return(
        <View style={style.container}>
            <Image style={style.img} source={require(`../../../../assets/img/3.png`)} />
            <View style={style.textarea}>
                <Text style={style.destaque}>Redirecionamento de vagas</Text>
                <Text style={[style.destaque,{fontSize: '1em'}]}>Como funciona nosso redirecionamento para as vagas de emprego?</Text>
                <Text style={style.txt}>Nosso redirecionamento funciona em base de quem se reside mas próximo do local da vaga de emprego. Esse recurso permite que os empregadores priorizem candidatos que estão mais próximos da vaga, levando em consideração a conveniência e possíveis benefícios para ambas as partes.</Text>
                <Text style={style.txt}>Quando você está próximo ao local de trabalho, pode aproveitar vantagens como menor tempo de deslocamento, maior disponibilidade e menor probabilidade de atrasos.</Text>
            </View>
            <GradientButton/>
            <Progress/>
        </View>
    )
}