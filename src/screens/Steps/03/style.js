import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141414'
    },
    img:{
        width: '78vw',
        height: '35vh',
    },
    txt:{
        color: '#fff',
        fontSize: '0.95rem',
        textAlign: 'center',
    },
    destaque:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1.1em',
        textAlign: 'center',
    },
    textarea:{
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '34vh',
        width: '90vw',
        marginBottom: '16vh'
    }
})

export default style