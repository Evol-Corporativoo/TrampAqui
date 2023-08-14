import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        width: '90vw',
        marginTop: '3vh',
        justifyContent: 'center',
        alignItems: 'center'
    },
    div_area:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '80vw',
        justifyContent: 'space-between',
        marginBottom: '1.8vh'
    },
    line:{
        borderTopWidth: 2,
        width: '30%',
        borderTopColor: '#fff'
    },
    title:{
        fontSize: '1rem',
        color: '#fff',
        textAlign: 'center'
    }
})

export default style