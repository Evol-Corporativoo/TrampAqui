import style from './style'
import { View } from 'react-native'

import Header from './components/Header'
import Main from './components/Main'

export default function PassCode(){
    return(
        <View style={style.container}>
            <Header/>
            <Main/>
        </View>
    )
}