import React, {useState, useEffect} from "react";
import { FlatList } from "react-native";
import style from './style'
import jobs from "../../../../../data/search";
import Card from "../Card";

import { RegisterContext } from "../../../../../data/context";

export default function Results(){

    const [results, setResults] = useState([])

    function listar(){
        let url = 'http://localhost/Trampo/script/server/controller/listarVagas.php'
        let options = {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-Type':'application/json'
            }
        }

        fetch(url,options)
        .then(response=>response.json())
        .then(response=>{
            setResults(response)
        })

    }

    useEffect(()=>{

        listar()

    },[])

    return(

        <FlatList
            style={style.container}
            showsVerticalScrollIndicator={false}
            data={results}
            // keyExtractor={(item)=>item.idVaga}
            renderItem={({item}) =>(
                <Card
                    job={item}
                />
            )}
        />

    )
}