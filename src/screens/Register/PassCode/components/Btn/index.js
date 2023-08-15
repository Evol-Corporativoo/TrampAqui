import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import style from './style'
import { useNavigation } from '@react-navigation/native'

export default function Btn(){
    const c = ['#00FEA0','rgba(42,201,197,0.5)']
    const l = [0.1,1]
    const s = {x:0, y:0.5}
    const e = {x:1,y:0.5}
    const nav = useNavigation()
    function n(){
        nav.navigate('formsenha')
    }
    return(
        <TouchableOpacity style={style.bg} onPress={n}>
            <LinearGradient style={style.grd}
                colors={c}
                locations={l}
                start={s}
                end={e}
            >
                <Text style={style.txt}>Redefinir senha</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}