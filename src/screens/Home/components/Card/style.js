import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        width: '90vw',
        height: '16vh',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: '2vh',
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        justifyContent: 'space-between',
        paddingTop: '1vh'
    },
    t_row:{
        flexDirection: 'row'
    },
    btn:{
        borderWidth: 1.4,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '30vw',
        height: '3vh',
        marginTop: '0.5vh'
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
    txt_titulo:{
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    txt_small:{
        fontSize: '0.9rem'
    }
})

export default style