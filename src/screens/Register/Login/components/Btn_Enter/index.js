import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import style from './style'
import { useNavigation } from '@react-navigation/native'

import { useContext } from 'react'
import { RegisterContext } from '../../../../../../data/context'

export default function Btn(props){
    const c = ['#00FEA0','rgba(42,201,197,0.5)']
    const l = [0.1,1]
    const s = {x:0, y:0.5}
    const e = {x:1,y:0.5}

    
    const {login} = useContext(RegisterContext)

    return(
        <TouchableOpacity onPress={login([props.user,props.senha])} style={style.bg}>
            <LinearGradient style={style.grd}
                colors={c}
                locations={l}
                start={s}
                end={e}
            >
                <Text style={style.txt}>Entrar</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}