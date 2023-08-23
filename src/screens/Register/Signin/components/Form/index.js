import style from './style'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Btn from '../Btn';
import signin from '../../../../../../script/client/request-signin';

export default function Form(){

    const c = ['#00FEA0','rgba(42,201,197,0.5)']
    const l = [0.1,1]
    const s = {x:0, y:0.5}
    const e = {x:1,y:0.5}
    const n = useNavigation()
    function nav(){
        n.navigate('confirm')
    }

    const grad = ['#00FEA0', 'rgba(89,140,239,0.3)']
    const start = {x: 0, y: 0.5}
    const end = {x: 1, y: 0.5}
    const loc = [0.8, 1]
    let iconColor

    const [nome,setNome] = useState();
    const [cpf,setCpf] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confirm, setConfirm] = useState();
    const [telefone, setTelefone] = useState();
    const [dataNasc, setDataNasc] = useState();

    function cadastrar(){
        let array = [nome,cpf,email,senha,telefone,dataNasc]
        signin(array)
    }

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
                    onChangeText={setNome}
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
                    onChangeText={setCpf}
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
                <TextInput style={style.input} placeholder='Endereço de email'
                    onChangeText={setEmail}
                />
            </LinearGradient>
            <Text style={style.label}>Senha</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input} placeholder='Crie sua senha'
                    onChangeText={setSenha}
                />
            </LinearGradient>
            <Text style={style.label}>Confirmar senha</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input} placeholder='Repita a senha criada'
                    onChangeText={setEmail}
                />
            </LinearGradient>
            <Text style={style.label}>Telefone</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input} placeholder='Número de telefone'
                    onChangeText={setTelefone}
                />
            </LinearGradient>
            <Text style={style.label}>Data de Nascimento</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={style.input} placeholder='DD/MM/AAAA'
                    onChangeText={setDataNasc}
                />
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
            <TouchableOpacity style={style.bg}
            onPress={cadastrar}
            >
                <LinearGradient style={style.grd}
                    colors={c}
                    locations={l}
                    start={s}
                    end={e}
                >
                    <Text style={style.txt}>Criar conta</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}