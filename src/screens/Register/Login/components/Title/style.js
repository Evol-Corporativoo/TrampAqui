import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '7vh',
        width: '70vw',
    },
    title:{
        color: '#00FEA0',
        fontSize: '1.8rem',
        fontWeight: '500',
        marginBottom: '2vh'
    },
    txt:{
        color: '#fff',
        textAlign: 'center',
        fontSize: '0.75rem'
    },
    logo_area:{
        flexDirection: 'row',
        width: '80vw',
        height: '10vh',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        width: '6vh',
        height: '6vh'
    },
    letreiro: {
        width: '45vw',
        height: '9vh'
    }
})

export default style