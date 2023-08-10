import * as React from 'react'
import {View, Image} from 'react-native';
import style from './style'

export default function Background(){

    return(
        <View style={style.container}>
            <Image style={style.logo} source={require(`../../../../../../assets/id/logotransparente.png`)}/>
            <View style={style.elipse1}/>
            <View style={style.elipse2}/>
            <View style={style.elipse3}/>
            <View style={style.elipse4}/>
            <View style={style.elipse5}/>
            <View style={style.elipse6}/>
            <Image style={style.person} source={require(`../../../../../../assets/img/1.png`)}/>
            <View style={style.elipse7}/>
        </View>
    )
}