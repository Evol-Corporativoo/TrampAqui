import React from 'react'
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container:{
        width: '92vw',
        height: '25vh',
        marginTop: '16vh',
        marginBottom: '5vh',
        backgroundColor: '#598CEF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    title:{
        color: '#fff',
        fontWeight: '600',
        fontSize: '1.1em'
    },
    subtitle:{
        color: '#fff',
        fontWeight: '200'
    },
    icon: {
        backgroundColor: '#d4d4d4',
        height: '11vh',
        width: '11vh',
        borderRadius: '50%',
        marginBottom: '1vh',
    }
})

export default style