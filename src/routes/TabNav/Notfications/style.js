import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        height: '15vh',
        width: '98vw',
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2vh'
    },
    close:{
        backgroundColor: 'red',
        width: '100vw',
        height: '7vh',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_logout:{
        fontWeight: 'normal',
    },
    text_close:{
        fontSize: '1.1rem',
        fontWeight: 'bold'
    },
    l_col:{
        width: '23vw',
        paddingLeft: '8vw',
        // borderWidth: 1
    },
    r_col:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '23vw',
        paddingRight: '8vw',
        // borderWidth: 1
    },
    m_col:{
        justifyContent: 'center',
        paddingRight: '4vw',
        // borderWidth: 1
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
    title:{
        textAlign: 'center',
        fontSize: '1.2em',
        fontWeight: 'bold',
        flex: 1,
        marginTop: '5%'
    },
    modalContainer:{
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    logout:{
        position: 'absolute',
        top: '50%'
    }
})

export default style;