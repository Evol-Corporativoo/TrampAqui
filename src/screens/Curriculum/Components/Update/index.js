import { View, Text, TextInput, TouchableOpacity, Picker, FlatList } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import style from "./style";
import { useContext, useState, useEffect } from "react";
import { RegisterContext } from "../../../../../data/context";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Update({display}){

    const Route = useRoute()
    const data = Route.params.data

    const {user, criarCurriculo, curriculo, setCurriculo} = useContext(RegisterContext)

    const [objetivo, setObjetivo] = useState('')
    const [habilidades, setHabilidades] = useState('')
    const [estadoCivil, setEstadoCivil] = useState('')
    const [formacoes, setFormacoes] = useState([])
    const [experiencias, setExperiencias] = useState([])
    const [idiomas, setIdiomas] = useState([])

    const [nomeFormacao, setNomeFormacao] = useState('')
    const [cidadeFormacao, setCidadeFormacao] = useState('')
    const [diplomaFormacao, setDiplomaFormacao] = useState('')

    const [situacaoFormacao, setSituacaoFormacao] = useState('')

    const [dataInicioFormacao, setDataInicioFormacao] = useState('')
    const [dataTerminoFormacao, setDataTerminoFormacao] = useState('')

    const [formacaoIcon, setFormacaoIcon] = useState('down')
    const [idiomaIcon, setIdiomaIcon] = useState('down')
    const [experienciaIcon, setExperienciaIcon] = useState('down')
    const [formacaoTriggered, setFormacaoTriggered] = useState(false)

    const [situacaoMessage, setSituacaoMessage] = useState({display: 'none'})

    const [formacaoMessage, setFormacaoMessage] = useState({
        display: 'none'
    })
    const [experienciaMessage, setExperienciaMessage] = useState({
        display: 'none'
    })

    const [experienciaTriggered, setExperienciaTriggered] = useState(false)

    const [formacaoOpen, setFormacaoOpen] = useState({
        display: 'none'
    })

    const [displayFormacao, setDisplayFormacao] = useState({
        display: 'none'
    })
    const [displayExperiencia, setDisplayExperiencia] = useState({
        display: 'none'
    })
    const [displayIdioma, setDisplayIdioma] = useState({
        display: 'none'
    })

    const [idiomaMessage, setIdiomaMessage] = useState({
        display: 'none'
    })

    const [genero, setGenero] = useState('')

    const [idiomaTriggered, setIdiomaTriggered] = useState(false)

    const [nomeIdioma, setNomeIdioma] = useState('')
    const [nivelIdioma, setNivelIdioma] = useState('')


    const [nomeExperiencia, setNomeExperiencia] = useState('')
    const [empregadorExperiencia, setEmpregadorExperiencia] = useState('')
    const [cidadeExperiencia, setCidadeExperiencia] = useState('')
    const [dataInicioExperiencia, setDataInicioExperiencia] = useState('')
    const [dataTerminoExperiencia, setDataTerminoExperiencia] = useState('')

    const Nav = useNavigation()

    function render(){

        Nav.navigate('profile')

    }

    return(
        <View style={[style.container]}>
            <Text style={style.main_title}>Refazendo o currículo.</Text>
            <Text style={style.desc}>Preencha as informações adicionais para montar seu currículo do App.</Text>
            <View style={style.input_area}>
                <Text style={style.label}>O que você busca profissionalmente?</Text>
                <TextInput
                    style={style.input}
                    placeholder="Objetivo Profissional"
                    onChangeText={(text)=>setObjetivo(text)}
                    value={objetivo}
                />
                <Text style={style.label}>Gênero que se identifica?</Text>
                <Picker
                    style={style.input}
                    selectedValue={genero}
                    onValueChange={(itemValue) => setGenero(itemValue)}
                >
                    <Picker.Item label="..." value={''} />
                    <Picker.Item label="Feminino" value={'feminino'} />
                    <Picker.Item label="Masculino" value={'masculino'} />
                    <Picker.Item label="Outro" value={'outro'} />
                </Picker>
                <Text style={style.label}>Qual seu estado civil?</Text>
                <Picker
                    style={style.input}
                    selectedValue={estadoCivil}
                    onValueChange={(itemValue) => setEstadoCivil(itemValue)}
                >
                    <Picker.Item label="..." value={''} />
                    <Picker.Item label="Solteiro(a)" value={'solteiro'} />
                    <Picker.Item label="Casado(a)" value={'casado'} />
                    <Picker.Item label="Divorciado(a)/separado(a)" value={'divorciado'} />
                    <Picker.Item label="Viúvo(a)" value={'viuvo'} />
                </Picker>
                <Text style={[style.label]}>Descreva brevemente as suas habilidades e competências profissionais</Text>
                <TextInput
                    style={[style.input]}
                    placeholder="Habilidades e competências"
                    onChangeText={(text)=>setHabilidades(text)}
                    value={habilidades}
                />
                <View style={style.row}>
                    <Text>Adicionar formação</Text>
                    <TouchableOpacity onPress={()=>{
                        if(formacaoOpen.display=='none'){
                            setFormacaoOpen({display: 'flex'})
                            setFormacaoIcon('up')
                        } else {
                            setFormacaoOpen({display: 'none'})
                            setFormacaoIcon('down')
                        }
                    }} style={style.btn}>
                        <AntDesign name={formacaoIcon} size={24} color="black" />
                    </TouchableOpacity>
                </View>


                <View style={[style.input_area, formacaoOpen]}>
                    <Text style={style.label}>Qual a instituição?</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: Etec Cidade Tiradentes"
                        onChangeText={(text)=>setNomeFormacao(text)}
                        value={nomeFormacao}
                    />
                    <Text style={style.label}>A cidade da instituição</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: São Paulo"
                        onChangeText={(text)=>setCidadeFormacao(text)}
                        value={cidadeFormacao}
                    />
                    <Text style={style.label}>O diploma de conclusão</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: Ensino médio completo, Técnico em Informática..."
                        onChangeText={(text)=>setDiplomaFormacao(text)}
                        value={diplomaFormacao}
                    />
                    <Text style={style.label}>Situação da formação</Text>
                    <Picker
                        style={style.input}
                        selectedValue={situacaoFormacao}
                        onValueChange={(itemValue) => setSituacaoFormacao(itemValue)}
                    >
                        <Picker.Item label="..." value={''} />
                        <Picker.Item label="Cursando" value={'Cursando'} />
                        <Picker.Item label="Concluído" value={'Concluído'} />
                        <Picker.Item label="Trancado" value={'Trancado'} />
                    </Picker>
                    <Text style={style.label}>Quando começou?</Text>
                    <TextInputMask
                        style={style.input}
                        type={'datetime'}
                        options={{
                        format: 'MM/YYYY',
                        }}
                        placeholder="MM/AAAA"
                        value={dataInicioFormacao}
                        onChangeText={(text)=>setDataInicioFormacao(text)}
                    />
                    <Text style={style.label}>Quando terminou?</Text>
                    <TextInputMask
                        style={style.input}
                        type={'datetime'}
                        options={{
                        format: 'MM/YYYY',
                        }}
                        placeholder="MM/AAAA"
                        value={dataTerminoFormacao}
                        onChangeText={(text)=>setDataTerminoFormacao(text)}
                    />
                    <Text style={[style.trigger,formacaoMessage]}>Formação adicionada!</Text>
                    <TouchableOpacity style={style.btn}    
                        onPress={()=>{

                            if(situacaoMessage==''){
                                setSituacaoMessage({display: 'flex',fontSize: '1.1rem', color: 'red', textAlign: 'center'})
                            } else {
                                setSituacaoMessage({display: 'none'})
                                if(formacaoTriggered==false){
                                    setFormacaoTriggered(true)
                                    //console.log(formacoes)
                                    let actual = formacoes
                                    let object = {
                                        nomeFormacao: nomeFormacao,
                                        cidadeFormacao: cidadeFormacao,
                                        diplomaFormacao: diplomaFormacao,
                                        situacaoFormacao: situacaoFormacao,
                                        dataInicioFormacao: dataInicioFormacao,
                                        dataTerminoFormacao: dataTerminoFormacao
                                    }
                                    actual.push(object)
                                    
                                    setFormacoes(actual)
                                    setFormacaoMessage({display: 'flex'})
                                    //console.log(formacoes)
                                    setTimeout(()=>{
                                        setFormacaoMessage({display: 'none'})
                                        setFormacaoOpen({display: 'none'})
                                        setNomeFormacao('')
                                        setCidadeFormacao('')
                                        setDiplomaFormacao('')
                                        setSituacaoFormacao('')
                                        setDataInicioFormacao('')
                                        setDataTerminoFormacao('')
                                        setFormacaoIcon('down')
                                        setFormacaoTriggered(false)
                                    },1000)
                                }
                            }
                        }}
                    >
                        <Entypo name="check" size={24} color="black" />
                    </TouchableOpacity>
                </View>










                
                <View style={style.row}>
                    <Text>Adicionar experiência</Text>
                    <TouchableOpacity style={style.btn} 
                        onPress={()=>{
                            if(displayExperiencia.display=='none'){
                                setExperienciaIcon('up')
                                setDisplayExperiencia({display: 'flex'})
                            } else {
                                setExperienciaIcon('down')
                                setDisplayExperiencia({display: 'none'})
                            }
                        }}
                    >
                        <AntDesign name={experienciaIcon} size={24} color="black" />
                    </TouchableOpacity>
                </View>





                <View style={[style.input_area, displayExperiencia]}>
                    <Text style={style.label}>Qual o nome do cargo?</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: Estágio de Farmácia, Gerente de setor..."
                        onChangeText={(text)=>setNomeExperiencia(text)}
                        value={nomeExperiencia}
                    />
                    <Text style={style.label}>Quem te empregou?</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: Samu Construções, Chanel & Rosa..."
                        onChangeText={(text)=>setEmpregadorExperiencia(text)}
                        value={empregadorExperiencia}
                    />
                    <Text style={style.label}>Cidade</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: Carapicuíba, Ribeirão Preto..."
                        onChangeText={(text)=>setCidadeExperiencia(text)}
                        value={cidadeExperiencia}
                    />
                    <Text style={style.label}>Quando começou?</Text>
                    <TextInputMask
                        style={style.input}
                        type={'datetime'}
                        options={{
                        format: 'MM/YYYY',
                        }}
                        placeholder="MM/AAAA"
                        value={dataInicioExperiencia}
                        onChangeText={(text)=>setDataInicioExperiencia(text)}
                    />
                    <Text style={style.label}>Quando terminou?</Text>
                    <TextInputMask
                        style={style.input}
                        type={'datetime'}
                        options={{
                        format: 'MM/YYYY',
                        }}
                        placeholder="MM/AAAA"
                        value={dataTerminoExperiencia}
                        onChangeText={(text)=>setDataTerminoExperiencia(text)}
                    />
                    <Text style={[style.trigger,experienciaMessage]}>Experiência adicionada!</Text>
                    <TouchableOpacity style={style.btn}    
                        onPress={()=>{
                            if(experienciaTriggered==false){
                                setExperienciaTriggered(true)
                                setExperienciaMessage({display: 'flex'})
                                let actual = experiencias
                                let object = {
                                    nomeExperiencia: nomeExperiencia,
                                    empregadorExperiencia: empregadorExperiencia,
                                    cidadeExperiencia: cidadeExperiencia,
                                    dataInicioExperiencia: dataInicioExperiencia,
                                    dataTerminoExperiencia: dataTerminoExperiencia
                                }
                                actual.push(object)
                                setExperiencias(actual)
                                //console.log(experiencias)
                                
                                setTimeout(()=>{
                                    setDisplayExperiencia({display: 'none'})
                                    setExperienciaMessage({display: 'none'})
                                    setNomeExperiencia('')
                                    setEmpregadorExperiencia('')
                                    setCidadeExperiencia('')
                                    setDataInicioExperiencia('')
                                    setDataInicioExperiencia('')
                                    setExperienciaIcon('down')
                                    setExperienciaTriggered(false)
                                },1000)
                            }
                            
                        }}
                    >
                        <Entypo name="check" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                










                <View style={style.row}>
                    <Text>Adicionar idioma</Text>
                    <TouchableOpacity style={style.btn}

                        onPress={()=>{
                            if(displayIdioma.display=='none'){
                                setDisplayIdioma({display: 'flex'})
                                setIdiomaIcon('up')
                            } else {
                                setDisplayIdioma({display: 'none'})
                                setIdiomaIcon('down')
                            }
                            
                        }}
                    >
                        <AntDesign name={idiomaIcon} size={24} color="black" />
                    </TouchableOpacity>
                </View>




                <View style={[style.input_area, displayIdioma]}>
                    <Text style={style.label}>Qual o idioma?</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: Inglês, alemão, espanhol..."
                        onChangeText={(text)=>setNomeIdioma(text)}
                        value={nomeIdioma}
                    />
                    <Text style={style.label}>Nível de conhecimento</Text>
                    <Picker
                        style={style.input}
                        selectedValue={nivelIdioma}
                        onValueChange={(itemValue) => setNivelIdioma(itemValue)}
                    >
                        <Picker.Item label="..." value={''} />
                        <Picker.Item label="Iniciante" value={'Iniciante'} />
                        <Picker.Item label="Básico" value={'Básico'} />
                        <Picker.Item label="Pré-Intermediário" value={'Pré-Intermediário'} />
                        <Picker.Item label="Intermediário" value={'Intermediário'} />
                        <Picker.Item label="Avançado" value={'Avançado'} />
                        <Picker.Item label="Proeficiente" value={'Proeficiente'} />
                    </Picker>
                    <Text style={[style.trigger,idiomaMessage]}>Idioma adicionado!</Text>
                    <TouchableOpacity style={style.btn}    
                        onPress={()=>{
                            
                            if(idiomaTriggered==false){
                                setIdiomaTriggered(true)
                                let actual = idiomas
                                let object = {
                                    nomeIdioma: nomeIdioma,
                                    nivelIdioma: nivelIdioma,
                                }
                                actual.push(object)
                                setIdiomas(actual)
                                setIdiomaMessage({display: 'flex'})
                                //console.log(idiomas)
                                setTimeout(()=>{
                                    setIdiomaMessage({display: 'none'})
                                    setDisplayIdioma({display: 'none'})
                                    setNomeIdioma('')
                                    setNivelIdioma('')
                                    setIdiomaIcon('down')
                                    setIdiomaTriggered(false)
                                },1000)
                            }
                            
                        }}
                    >
                        <Entypo name="check" size={24} color="black" />
                    </TouchableOpacity>
                </View>


                <View style={style.right_row}>
                    <TouchableOpacity style={style.finish_btn}
                        onPress={()=>{

                            let object = {

                                idUsuario: data.idUsuario,
                                objetivo: objetivo,
                                genero: genero,
                                estadoCivil: estadoCivil,
                                habilidades: habilidades,
                                formacoes: formacoes,
                                experiencias: experiencias,
                                idiomas: idiomas

                            }
                            //console.log(object)

                            let url = 'http://localhost/Trampo/script/server/controller/updateCurriculo.php';
                            let options = {
                                method: 'POST',
                                mode: 'cors',
                                headers:{
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(object)
                            }

                            fetch(url, options)
                            .then(response=>response.text())
                            .then(response=>{

                                //if(response==true){
                                    render()
                                //}
                            })

                        }}
                    >
                        <Text>Finalizar currículo</Text>
                    </TouchableOpacity>
                </View>
                



            </View>
        </View>
    )
}