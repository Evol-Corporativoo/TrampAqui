import { View, TouchableOpacity, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import style from "./style";

import Create from "./Components/Create";
import ViewCurriculo from "./Components/View";

export default function Curriculum(){

    const Route = useRoute()
    const {data, created} = Route.params

    useEffect(()=>{

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
            if(response==true){
                setDisplayForm({display: 'none'})
                setDisplayView({display: 'flex'})
                setDisplayUpdate({display: 'none'})
            } else {
                setDisplayForm({display: 'flex'})
                setDisplayView({display: 'none'})
                setDisplayUpdate({display: 'none'})
            }
        })

    },[])

    const [displayForm, setDisplayForm] = useState({display:'none'})
    const [displayUpdate, setDisplayUpdate] = useState({display:'none'})
    const [displayView, setDisplayView] = useState({display: 'none'})

    return(
        <View style={style.container}>
            <View style={style.header_space}/>
            <Create display={displayForm}/>
            <ViewCurriculo
                display={displayView}
            />
        </View>
    )
}