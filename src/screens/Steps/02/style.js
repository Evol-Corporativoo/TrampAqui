import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141414',
    },
    img:{
        width: '100vw',
        height: '50vh',
    },
    txt:{
        color: '#fff',
        fontSize: '1rem',
        textAlign: 'center',
        marginBottom: '2vh'
    },
    destaque:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1.1em',
        textAlign: 'center',
    },
    textarea:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '34vh',
        width: '90vw',
        marginBottom: '16vh'
    }
})

export default style