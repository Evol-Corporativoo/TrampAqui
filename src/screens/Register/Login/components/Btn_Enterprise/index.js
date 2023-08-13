import { TouchableOpacity, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import style from './style'
import st from '../Form/style'

export default function Btn(){
    const c = ['#00FEA0','rgba(42,201,197,0.5)']
    const l = [0.1,1]
    const s = {x:0, y:0.5}
    const e = {x:1,y:0.5}
    return(
        <>
            <TouchableOpacity style={style.bg}>
                <LinearGradient style={style.grd}
                    colors={c}
                    locations={l}
                    start={s}
                    end={e}
                >
                    <View style={style.dark}>
                        <Text style={style.txt}>Entrar como empresa</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            <View style={style.create_area}>
                <Text style={style.create}>Não tem uma conta?</Text>
                <TouchableOpacity>
                    <Text style={[style.create,style.span]}>
                        Registre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}