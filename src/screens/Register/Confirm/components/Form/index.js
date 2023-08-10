import style from './style'
import { View, TextInput, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Entypo } from '@expo/vector-icons';

export default function Form(){
    const grad = ['#00FEA0', 'rgba(89,140,239,0.3)']
    const start = {x: 0, y: 0.5}
    const end = {x: 1, y: 0.5}
    const loc = [0.8, 1]
    let iconColor
    return(
        <View style={style.container}>
            <Text style={style.label}>Nome</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input}
                    placeholder='Nome completo'
                />
            </LinearGradient>
            <Text style={style.label}>CPF</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input}
                    placeholder='Cpf'
                />
            </LinearGradient>
            <Text style={style.label}>E-Mail</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input} placeholder='Endereço de email'/>
            </LinearGradient>
            <Text style={style.label}>Telefone</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input} placeholder='Número de telefone'/>
            </LinearGradient>
            <Text style={style.label}>Data de Nascimento</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input} placeholder='DD/MM/AAAA'/>
            </LinearGradient>
            <View style={style.check_area}>
                <BouncyCheckbox
                    size={25}
                    fillColor="#141414"
                    unfillColor="#141414"
                    iconStyle={{ 
                        borderColor: "#fff", 
                        color: '#000', 
                        borderRadius: 5,
                        borderWidth: 2,
                    }}
                    innerIconStyle={{
                        borderRadius: 5
                    }}
                    onPress={(check) => {
                        if(check==true){
                            iconColor='#fff'
                        } else {
                            iconColor="#141414"
                        }
                    }}
                    iconComponent={
                        <Entypo name="check" size={24} color={iconColor} />
                    }
                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                    disableText={true}
                />
                <Text style={style.check_txt}>Deseja receber as últimas atualizações do nosso aplicativo?</Text>
            </View>
        </View>
    )
}