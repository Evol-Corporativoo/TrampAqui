import style from './style'
import { View } from 'react-native'

import Title from './components/Title'
import Form from './components/Form'
import Terms from './components/Terms'
import Enter from './components/Enter'

import { useContext } from 'react'
import { RegisterContext } from '../../../../data/context'

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