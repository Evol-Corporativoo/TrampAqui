import { View, TouchableOpacity, Text } from "react-native";
import { useRoute, useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import style from "./style";
import styles from './Components/View/style';
import { AntDesign } from '@expo/vector-icons';

import Create from "./Components/Create";
import ViewCurriculo from "./Components/View";
import Update from "./Components/Update";

export default function Curriculum(){

    const Route = useRoute()
    const {data} = Route.params

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
            if(response==true){
                setDisplayForm({display: 'none'})
                setDisplayView({display: 'flex'})
            } else {
                setDisplayForm({display: 'flex'})
                setDisplayView({display: 'none'})
            }
        })

    }

    useFocusEffect(()=>{
        check()
        
    })

    const [displayForm, setDisplayForm] = useState({display:'none'})
    const [displayView, setDisplayView] = useState({display: 'none'})

    const Nav = useNavigation()

    function goUpdate(){
        Nav.navigate('update',{data:data})
    }

    return(
        <View style={style.container}>
            <View style={style.header_space}/>
            <Create display={displayForm}/>

            <TouchableOpacity onPress={goUpdate} style={[displayView]}>
                <View style={styles.row}>
                    <AntDesign name="edit" size={24} color="black" />
                    <Text style={styles.label}>Editar</Text>
                </View>
            </TouchableOpacity>
            <ViewCurriculo
                display={displayView}
            />

        </View>
    )
}