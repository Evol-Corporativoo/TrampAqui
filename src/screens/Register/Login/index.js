import style from './style'
import { View } from 'react-native'

import Title from './components/Title'
import Form from './components/Form'
import Terms from './components/Terms'
import Enter from './components/Enter'

export default function Login(){
    return(
        <View style={style.container}>
            <Title/>
            <Form/>
            <Enter/>
            <Terms/>
        </View>
    )
}