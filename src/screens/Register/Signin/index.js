import style from './style'
import { View } from 'react-native'

import Title from './components/Title'
import Form from './components/Form'

export default function SignIn(){
    return(
        <View style={style.container}>
            <Title/>
            <Form/>
        </View>
    )
}