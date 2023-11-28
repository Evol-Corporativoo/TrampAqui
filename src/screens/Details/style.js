import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    scroll:{
        overflow: 'scroll',
        maxHeight: '85vh',
    },
    container:{
        overflow: 'scroll',
        width: '95vw',
        height: '85vh',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: '3vh',
        paddingTop: '3vh',
        marginTop: '10vh',
        marginLeft: '2.5vw',
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    titulo_area:{
        maxWidth: '65%',
        marginTop: '2vh'
    },
    header_details:{
        flexDirection: 'row',
        marginBottom: '15%'
    },
    t_row:{
        flexDirection: 'row'
    },
    btn_submit:{
        borderWidth: 1.4,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: '5vh',
        marginLeft: '7vw',
        marginTop: '2vh'
    },
    r_col:{
        flexDirection: 'row',
        width: '33%',
    },
    l_col:{
        paddingLeft: '2vw'
    },
    number:{
    },
    j_number:{
    },
    titulo_main:{
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    detalhes_titulo:{
        fontWeight: 'bold',
        fontSize: '1rem',
        marginTop: '5%',
    },
    subtitulo_main:{
        fontSize: '0.9rem'
    }
})

export default style