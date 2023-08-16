import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141414'
    },
    img:{
        width: '90vw',
        height: '40vh',
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
        marginTop: '2vh',
        marginBottom: '3vh',
    },
    textarea:{
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '28vh',
        width: '90vw',
        marginBottom: '16vh'
    }
})

export default style