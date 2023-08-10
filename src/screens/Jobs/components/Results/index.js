import React from "react";
import { FlatList } from "react-native";
import style from './style'
import jobs from "../../../../../data/next";
import Card from "../Card";

export default function Results(){
    return(

        <FlatList
            style={style.container}
            showsVerticalScrollIndicator={false}
            data={jobs}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) =>(
                <Card
                    id={item.id}
                    nome={item.nome}
                    salario={item.salario}
                />
            )}
        />

    )
}