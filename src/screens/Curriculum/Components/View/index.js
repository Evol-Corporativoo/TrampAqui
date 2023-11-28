import { useEffect } from 'react'
import style from './style'
import { View, Text, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function ViewCurriculo({display}){

    const Route = useRoute()
    const data = Route.params.data

    useEffect(()=>{
        let url = 'http://localhost/Trampo/script/server/controller/buscarCurriculo.php'
        let options = {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data.idUsuario)
        }

        fetch(url,options)
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
        })

    },[])

    console.log(display)

    return(
        <View style={[style.container,display]}>
            <Text>Oi</Text>
        </View>
    )

}