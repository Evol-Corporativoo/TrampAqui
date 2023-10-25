import React, {useContext} from "react";
import { FlatList } from "react-native";
import style from './style'
import jobs from "../../../../../data/search";
import Card from "../Card";

import { RegisterContext } from "../../../../../data/context";

export default function Results(){

    const {search} = useContext(RegisterContext)

    return(

        <FlatList
            style={style.container}
            showsVerticalScrollIndicator={false}
            data={search}
            // keyExtractor={(item)=>item.idVaga}
            renderItem={({item}) =>(
                <Card
                    idVaga={item.idVaga}
                    nomeVaga={item.nomeVaga}
                    salarioVaga={item.salarioVaga}
                    descVaga={item.descVaga}
                    cargoVaga={item.cargoVaga}
                    cargaHorariaVaga={item.cargaHorariaVaga}
                    sobreVaga={item.sobreVaga}
                />
            )}
        />

    )
}