import React, { useContext } from "react";
import { View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';
import style from './style'
import { RegisterContext } from "../../../../../data/context";

export default function SearchBar(){

    const {search,setSearch} = useContext(RegisterContext)

    function isJSON(str) {
        try {
          JSON.parse(str);
          return true;
        } catch (e) {
          return false;
        }
    }

    function buscar(query){   
        let url = 'http://localhost/Trampo/script/server/controller/buscarVagas.php'
        let options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        }

        fetch(url, options)
        .then(response => response.text())
        .then(response =>{
            
            if(isJSON(response)){
                setSearch(JSON.parse(response))
            } else {
                setSearch([])
            }
            
           
        })
        .catch(error=>{
            console.error('Algo deu errado: ',error)
        })
    }

    return(
        <View style={style.bar}>
            <Feather style={style.icon} name='search' size={style.icon.size} color={style.icon.color}/>
            <View style={style.text_view}>
                <TextInput onChangeText={(search_query)=>{
                    buscar(search_query)
                }} style={style.text}/>
            </View>
        </View>
    )
}