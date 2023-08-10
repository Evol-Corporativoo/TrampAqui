import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        width: '90vw',
        marginTop: '1vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt:{
        color: '#fff',
        marginBottom: '2vh',
        marginLeft: '1vw',
        fontSize: '0.7rem',
        textAlign: 'center'
    },
    input_area:{
        width: '80vw',
        height: '10vh',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '1.5vh',
        marginBottom: '1.5vh',
    },
    code_input:{
        height: '90%',
        width: '21%',
        fontSize: '5rem',
        borderWidth: 1.5,
        borderColor: '#fff',
        borderRadius: 10
    },
    send:{
        color: '#fff',
        fontSize: '0.9rem'
    },
    bold:{
        fontWeight: 'bold',
    },
    support:{
        width: '55%'
    }
    
})

export default style