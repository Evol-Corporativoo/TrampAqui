import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from './components/header'
import style from './style'
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'

export default function Home(){

    const Route = useRoute()
    const Nav = useNavigation()
    const data = JSON.parse(Route.params.data)

    function navCurriculo(){
        Nav.navigate('curriculo', {data: data})
    }

    const [displayFeed, setDisplayFeed] = useState({display:'none'})
    const [displayWarn, setDisplayWarn] = useState({display:'none'})

    function check(){

        let check_url = 'http://localhost/Trampo/script/server/controller/checkCurriculo.php'
        let options = {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.idUsuario)

        }

        fetch(check_url,options)
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
            if(response==true){
                setDisplayWarn({display: 'none'})
                setDisplayFeed({display: 'flex'})
            } else {
                setDisplayWarn({display: 'flex'})
                setDisplayFeed({display: 'none'})
            }
        })

    }

    useFocusEffect(()=>{
        check()
    })


    return(
        <View style={style.container}>
            <View style={[style.warn,displayWarn]}>
                <Text style={style.text_warn}>Informações pendentes! Preencha o currículo para ter acesso total às funções do App!</Text>
                <TouchableOpacity style={style.warn_btn} onPress={navCurriculo}>
                    <Text style={style.warn_label}>Preencher</Text>
                </TouchableOpacity>
            </View>
            <View style={[style.feed,displayFeed]}>
                <Text>Feed</Text>
            </View>
        </View> 
    )
}