import style from './style'
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Entypo } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { RegisterContext } from '../../../../../../data/context';

export default function Form(){

    const c = ['#00FEA0','rgba(42,201,197,0.5)']
    const l = [0.1,1]
    const s = {x:0, y:0.5}
    const e = {x:1,y:0.5}
    const n = useNavigation()
    function nav(){
        n.navigate('login')
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
    const [alert,setAlert] = useState();

    const {signin} = useContext(RegisterContext)

    function cadastrar(){
        let object = [
            nome,
            cpf,
            email,
            senha,
            telefone,
            dataNasc
        ]

        signin(object)
    }

    // function console(){
    //     console.log(telefone)
    // }

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
                    onChangeText={(text)=>{setNome(text)}}
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
                    onChangeText={(text)=>{setCpf(text)}}
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
                    onChangeText={(text)=>{setEmail(text)}}
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
                    onChangeText={(text)=>{setSenha(text)}}
                    secureTextEntry={true}
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
                    onChangeText={(text)=>{setConfirm(text)}}
                    secureTextEntry={true}
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
                    onChangeText={(text)=>{
                        setTelefone(text)
                    }}
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
                    onChangeText={(text)=>setDataNasc(text)}
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