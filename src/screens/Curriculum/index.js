import { View, TouchableOpacity, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import style from "./style";

import Create from "./Components/Create";

export default function Curriculum(){

    const Route = useRoute()
    const {data, created} = Route.params
    console.log(data, created)

    const [displayForm, setDisplayForm] = useState({display:'flex'})
    const [displayUpdate, setDisplayUpdate] = useState({display:'none'})
    const [displayView, setDisplayView] = useState({display: 'none'})

    if(created==true){
        setDisplayForm({display: 'none'})
        setDisplayView({display: 'flex'})
    }

    return(
        <View style={style.container}>
            <View style={style.header_space}/>
            <Create display={displayForm}/>
        </View>
    )
}