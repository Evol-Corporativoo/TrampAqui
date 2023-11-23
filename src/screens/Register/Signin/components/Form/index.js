import style from './style'
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Entypo } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { TextInputMask } from 'react-native-masked-text';

import { RegisterContext } from '../../../../../../data/context';

export default function Form(){

    const c = ['#00FEA0','rgba(42,201,197,0.5)']
    const l = [0.1,1]
    const s = {x:0, y:0.5}
    const e = {x:1,y:0.5}
    const n = useNavigation()
    // function nav(){
    //     n.navigate('login')
    // }

    const grad = ['#00FEA0', 'rgba(89,140,239,0.3)']
    const start = {x: 0, y: 0.5}
    const end = {x: 1, y: 0.5}
    const loc = [0.8, 1]
    let iconColor

    const [nome,setNome] = useState('');
    const [cpf,setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirm, setConfirm] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [alert,setAlert] = useState();
    const [isValidCpf,setIsValid] = useState();

    const [cpfAlert, setCpfAlert] = useState({
        borderWidth: 0,
    })
    const [nameAlert, setNameAlert] = useState({
        borderWidth: 0,
    })
    const [emailAlert, setEmailAlert] = useState({
        borderWidth: 0,
    })
    const [senhaAlert, setSenhaAlert] = useState({
        borderWidth: 0,
    })
    const [confirmAlert, setConfirmAlert] = useState({
        borderWidth: 0,
    })
    const [telAlert, setTelAlert] = useState({
        borderWidth: 0,
    })
    const [dataAlert, setDataAlert] = useState({
        borderWidth: 0,
    })
    const [cpfText, setCpfText] = useState({
        display: 'none',
    })
    const [nomeText, setNomeText] = useState({
        display: 'none',
    })
    const [emailText, setEmailText] = useState({
        display: 'none',
    })
    const [senhaText, setSenhaText] = useState({
        display: 'none',
    })
    const [confirmText, setConfirmText] = useState({
        display: 'none',
    })
    const [telText, setTelText] = useState({
        display: 'none',
    })
    const [dataText, setDataText] = useState({
        display: 'none',
    })

    const [uniqueAlert, setUniqueAlert] = useState({
        display: 'none'
    })


    const {signin, validarCPF, signinError} = useContext(RegisterContext)

    function cadastrar(){
        let object = [
            nome,
            cpf,
            email,
            senha,
            telefone,
            dataNasc
        ]
        if(validarCPF(cpf)==false){
            setIsValid(false)
            setCpfAlert({
                borderWidth: 3,
                borderColor: 'red'
            })
            setCpfText({
                display: 'flex',
                color: 'red',
                fontSize: '1.1rem'
            })
        } else {
            setIsValid(true)
            setCpfAlert({
                borderWidth: 0,
            })
            setCpfText({
                display: 'none'
            })
        }

        // let splitError = signinError.split(' ')
        // let typeError = splitError

        if(nome==''){
            setNameAlert({
                borderWidth: 3,
                borderColor: 'red'
            })
            setNomeText({
                display: 'flex',
                color: 'red',
                fontSize: '1.1rem'
            })
        } else {
            setNameAlert({
                borderWidth: 0
            })
            setNomeText({
                display: 'none'
            })
        }
        if(email==''){
            setEmailAlert({
                borderWidth: 3,
                borderColor: 'red',
                fontSize: '1.1rem'
            })
            setEmailText({
                display: 'flex',
                color: 'red'
            })
        } else {
            setEmailAlert({
                borderWidth: 0
            })
            setEmailText({
                display: 'none'
            })
        }
        if(senha==''){
            setSenhaAlert({
                borderWidth: 3,
                borderColor: 'red',
                fontSize: '1.1rem'
            })
            setSenhaText({
                display: 'flex',
                color: 'red'
            })
        } else {
            setSenhaAlert({
                borderWidth: 0
            })
            setSenhaText({
                display: 'none'
            })
        }
        if(confirm!=senha){
            setConfirmAlert({
                borderWidth: 3,
                borderColor: 'red',
                fontSize: '1.1rem'
            })
            setConfirmText({
                display: 'flex',
                color: 'red'
            })
        } else {
            setConfirmAlert({
                borderWidth: 0
            })
            setConfirmText({
                display: 'none'
            })
        }
        if(telefone==''){
            setTelAlert({
                borderWidth: 3,
                borderColor: 'red',
                fontSize: '1.1rem'
            })
            setTelText({
                display: 'flex',
                color: 'red'
            })
        } else {
            setTelAlert({
                borderWidth: 0
            })
            setTelText({
                display: 'none'
            })
        }
        if(dataNasc==''){
            setDataAlert({
                borderWidth: 3,
                borderColor: 'red',
                fontSize: '1.1rem'
            })
            setDataText({
                display: 'flex',
                color: 'red'
            })
        } else {
            setDataAlert({
                borderWidth: 0
            })
            setDataText({
                display: 'none'
            })
        }


        if(isValidCpf==true && senha == confirm && senha != '' && nome != '' && email!='' && telefone!='' && dataNasc != ''){
            let ret = signin(object)
            if(ret==false){
                setUniqueAlert({
                    display: 'flex',
                    color: 'red',
                    fontSize: '1.1rem'
                })
            } else {
                setUniqueAlert({
                    display: 'flex'
                })
            }
            
        }
        
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
                <TextInput style={[style.input, nameAlert]}
                    placeholder='Nome completo'
                    onChangeText={(text)=>{setNome(text)}}
                />
            </LinearGradient>
            <Text style={nomeText}>Preencha o campo.</Text>
            <Text style={style.label}>CPF</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInputMask
                    style={[style.input,cpfAlert]}
                    type={'cpf'}
                    placeholder="CPF"
                    value={cpf}
                    onChangeText={(text) => setCpf(text)}
                />
            </LinearGradient>
            <Text style={cpfText}>CPF inválido ou vazio.</Text>
            <Text style={uniqueAlert}>CPF ou Email já cadastrados.</Text>
            <Text style={style.label}>E-Mail</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={[style.input, emailAlert]} placeholder='Endereço de email'
                    onChangeText={(text)=>{setEmail(text)}}
                />
            </LinearGradient>
            <Text style={emailText}>Preencha este campo.</Text>
            <Text style={uniqueAlert}>CPF ou Email já cadastrados.</Text>
            <Text style={style.label}>Senha</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={[style.input, senhaAlert]} placeholder='Crie sua senha'
                    onChangeText={(text)=>{setSenha(text)}}
                    secureTextEntry={true}
                />
            </LinearGradient>
            <Text style={senhaText}>Preencha o campo.</Text>
            <Text style={style.label}>Confirmar senha</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInput style={[style.input, confirmAlert]} placeholder='Repita a senha criada'
                    onChangeText={(text)=>{setConfirm(text)}}
                    secureTextEntry={true}
                />
            </LinearGradient>
            <Text style={confirmText}>A senha deve ser repetida</Text>
            <Text style={style.label}>Telefone</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInputMask
                    style={[style.input, telAlert]}
                    type={'cel-phone'}
                    options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                    }}
                    placeholder="Número de telefone"
                    value={telefone}
                    onChangeText={(text) => setTelefone(text)}
                />
            </LinearGradient>
            <Text style={telText}>Preencha o campo.</Text>
            <Text style={style.label}>Data de Nascimento</Text>
            <LinearGradient
                colors={grad}
                start={start}
                end={end}
                locations={loc}
                style={style.input_bg}
            >
                <TextInputMask
                    style={[style.input,dataAlert]}
                    type={'datetime'}
                    options={{
                    format: 'DD/MM/YYYY',
                    }}
                    placeholder="DD/MM/AAAA"
                    value={dataNasc}
                    onChangeText={(text) => setDataNasc(text)}
                />
            </LinearGradient>
            <Text style={dataText}>Preencha o campo.</Text>
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