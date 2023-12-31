import {View, TouchableOpacity, Text} from 'react-native'
import style from './style'

import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

export default function CardArea(){

    const Route = useRoute()
    const data = JSON.parse(Route.params.data)

    const Nav = useNavigation()
    function navCurriculo(){
        Nav.navigate('curriculo',{data: data})
    }

    function navCandidaturas(){
        Nav.navigate('candidaturas',{data: data})
    }

    return(
        <View style={style.container}>
            <View style={[style.row]}>
                <TouchableOpacity>
                    <View style={style.card}>
                        <AntDesign name={'idcard'} size={style.icon.size} color={style.icon.color}/>
                        <View style={style.div}/>
                        <Text style={style.title}>Meus dados</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={navCurriculo}>
                    <View style={style.card}>
                        <Ionicons name="document-attach-outline" size={style.icon.size} color={style.icon.color} />
                        <View style={style.div}/>
                        <Text style={style.title}>Meu currículo</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[style.row]}>
                <TouchableOpacity>
                    <View style={style.card}>
                        <Octicons name={'briefcase'} size={'2.3em'} color={style.icon.color}/>
                        <View style={style.div}/>
                        <Text style={style.title}>Vagas próximas de mim</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={navCandidaturas}>
                    <View style={style.card}>
                        <Feather name={'star'} size={style.icon.size} color={style.icon.color}/>
                        <View style={style.div}/>
                        <Text style={style.title}>Minhas candidaturas</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}