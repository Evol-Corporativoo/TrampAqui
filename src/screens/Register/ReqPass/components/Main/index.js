import style from './style'
import { View, TextInput, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Btn from '../Btn'
import { useState, useContext } from 'react'
import { RegisterContext } from '../../../../../../data/context'

export default function Main(){

    const [data,setData] = useState()
    const {} = useContext(RegisterContext)

    const grad = ['#00FEA0', 'rgba(89,140,239,0.3)']
    const start = {x: 0, y: 0.5}
    const end = {x: 1, y: 0.5}
    const loc = [0.8, 1]
    let iconColor
    return(
        <View style={style.container}>
            <Text style={style.txt}>Assim que você fornecer seu e-mail, enviaremos um código para que possa prosseguir com o processo. Certifique-se de verificar sua caixa de entrada e, se necessário, verifique também a pasta de spam ou lixo eletrônico.</Text>
            <View style={style.input_area}>
                <Text style={style.label}>E-mail ou CPF</Text>
                <LinearGradient
                    colors={grad}
                    start={start}
                    end={end}
                    locations={loc}
                    style={style.input_bg}
                >
                    <TextInput style={style.input}
                        placeholder='Endereço de e-mail ou CPF'
                    />
                </LinearGradient>
            </View>
            <Btn data={data}/>
            <Text style={[style.txt, style.send, style.support]}>Entrar em contato com o <Text style={style.bold}>Suporte</Text></Text>
        </View>
    )
}