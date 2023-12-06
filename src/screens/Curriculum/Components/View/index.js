import { useEffect, useState } from 'react'
import style from './style'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useRoute, useFocusEffect, useNavigation } from '@react-navigation/native'

function CardView(item){

    const [di, setDi] = useState('xx/xxxx')
    const [dt, setDt] = useState('xx/xxxx')
    const [diploma, setDiploma] = useState('---------')
    const [cidade, setCidade] = useState('----------')
    const [instituicao, setInstituicao] = useState('----------')

    return(
    <View style={style.row}>
        <View style={style.col}>
            <Text>{diploma}</Text>
            <Text>{cidade}</Text>
        </View>
        <View style={style.col}>
            <Text>{`(${di} - ${dt})`}</Text>
            <Text>{instituicao}</Text>
        </View>
    </View>
    )
}

function CardIdioma(item){

    const [idioma, setIdioma] = useState('------------')
    const [nivel, setNivel] = useState('----------')

    return(
    <View style={style.row}>
        <View style={style.col}>
            <Text>{idioma}</Text>
        </View>
        <View style={style.col}>
            <Text>{nivel}</Text>
        </View>
    </View>
    )
}

export default function ViewCurriculo({display}){

    const Route = useRoute()
    const data = Route.params.data
    const [instrucao,setInstrucao] = useState('')
    const [genero,setGenero] = useState('')
    const [estadoCivil,setEstadoCivil] = useState('')
    const [habilidades,setHabilidades] = useState('')
    const [objetivo,setObjetivo] = useState('')
    const [dataNasc,setDataNasc] = useState('')
    const [formacoes,setFormacoes] = useState([])
    const [idiomas,setIdiomas] = useState([])
    const [experiencias,setExperiencias] = useState([])

    useEffect(()=>{
        
        let url = 'http://localhost/Trampo/script/server/controller/buscarCurriculo.php'
        let options = {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data.idUsuario)
        }

        fetch(url,options)
        .then(response=>response.json())
        .then(response=>{

            setEstadoCivil(response[0].estadoCivilCurriculo)
            setGenero(response[0].genero)
            setHabilidades(response[0].habilidadesCurriculo)
            setObjetivo(response[0].objetivoCurriculo)
            setInstrucao(response[1][0].diplomaFormacao)

            let split_dn = data.dataNascUsuario.split('-')
            let n_dn = split_dn[2]+'/'+split_dn[1]+'/'+split_dn[0]
            setDataNasc(n_dn)
            setFormacoes(response[1])
            setIdiomas(response[2])
            setExperiencias(response[3])

        })

    },[])

    const Nav = useNavigation()

    function navCurriculo(){
        Nav.navigate('curriculo',{data: data})
    }

    return(
        <View style={[style.container,display]}>
            <View style={style.head_area}>
                <View style={style.col}>
                    <Text style={style.label}>Nome</Text>
                    <Text>{data.nomeUsuario}</Text>
                    <Text style={style.label}>Endereço</Text>
                    <Text>{}</Text>
                </View>
                <View style={style.col}>
                    <Text style={style.label}>Nível de instrução</Text>
                    <Text>{instrucao}</Text>
                    <Text style={style.label}>Contato</Text>
                    <Text>{data.emailUsuario}</Text>
                    <Text>{data.telefoneUsuario}</Text>
                </View>
            </View>
            <View style={style.body_area}>
                <View style={style.row}>
                    <View style={style.col}>
                        <Text style={style.label}>Gênero</Text>
                        <Text>{genero}</Text>
                    </View>
                    <View style={style.col}>
                    <Text style={style.label}>Estado civil</Text>
                        <Text>{estadoCivil}</Text>
                    </View>
                </View>
                <View style={style.col}>
                    <Text style={style.label}>Data de nascimento</Text>
                    <Text>{dataNasc}</Text>
                </View>
                <View style={[style.col,{width: '100%'}]}>
                    <Text style={style.label}>Objetivo</Text>
                    <Text>{objetivo}</Text>
                </View>

                <Text style={style.label}>Formação acadêmica</Text>
                <FlatList
                    data={formacoes}
                    renderItem={({item}) =>(
                        <CardView
                            item={item}
                        />
                    )}
                />

                <Text style={style.label}>Experiência anterior</Text>
                <FlatList
                    data={experiencias}
                    renderItem={({item}) =>(
                        <CardView
                            item={item}
                        />
                    )}
                />


                <Text style={style.label}>Idiomas falados</Text>
                <FlatList
                    data={idiomas}
                    renderItem={({item}) =>(
                        <CardIdioma
                            item={item}
                        />
                    )}
                />

                <View style={[style.col,{width: '100%'}]}>
                    <Text style={style.label}>Habilidades e competências</Text>
                    <Text>{habilidades}</Text>
                </View>

            </View>
        </View>
    )

}