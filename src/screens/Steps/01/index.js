import * as React from 'react'
import {View} from 'react-native';
import style from './style'

import Background from './components/Background';
import Textarea from './components/Textarea';

export default function Step01(){

    return(
        <View style={style.container}>
            <Background/>
            <Textarea/>
        </View>
    )
}