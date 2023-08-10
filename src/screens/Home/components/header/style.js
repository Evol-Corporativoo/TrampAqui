import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        height: '15vh',
        width: '98vw',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2vh'
    },
    l_col:{
        paddingLeft: '8vw'
    },
    r_col:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '23vw',
        paddingRight: '8vw'
    },
    welcome:{
        color: 'rgb(100, 100, 100)'
    },
    username:{
        fontSize: '1rem',
        fontWeight: '600'
    },
    icon:{
        size: '1.5rem',
        color: '#000'
    },
})

export default style;