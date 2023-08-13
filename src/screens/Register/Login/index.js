import style from './style'
import { View } from 'react-native'

import Title from './components/Title'
import Form from './components/Form'
import Btn from './components/Btn_Enter'
import Enterprise from './components/Btn_Enterprise'
import Terms from './components/Terms'

export default function Login(){
    return(
        <View style={style.container}>
            <Title/>
            <Form/>
            <Btn/>
            <Enterprise/>
            <Terms/>
        </View>
    )
}