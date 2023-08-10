import {View, TouchableOpacity, Text} from 'react-native'
import style from './style'

import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function CardArea(){
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
                <TouchableOpacity>
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
                        <Octicons name={'briefcase'} size={'2.6em'} color={style.icon.color}/>
                        <View style={style.div}/>
                        <Text style={style.title}>Vagas próximas de mim</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
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