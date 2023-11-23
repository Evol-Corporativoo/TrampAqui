import { View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import style from "./style";

import Create from "./Components/Create";

export default function Curriculum(){

    const [displayForm, setDisplayForm] = useState({display:'flex'})
    const [displayUpdate, setDisplayUpdate] = useState({display:'none'})

    return(
        <View style={style.container}>
            <View style={style.header_space}/>
            <Create display={displayForm}/>
        </View>
    )
}