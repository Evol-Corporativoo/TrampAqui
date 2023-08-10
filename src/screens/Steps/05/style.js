import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141414'
    },
    img:{
        width: '70vw',
        height: '30vh',
    },
    txt:{
        color: '#fff',
        fontSize: '1em',
        textAlign: 'center',
    },
    destaque:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1.1em',
        textAlign: 'center',
        marginTop: '2vh'
    },
    textarea:{
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '35vh',
        width: '90vw',
        marginBottom: '16vh'
    }
})

export default style