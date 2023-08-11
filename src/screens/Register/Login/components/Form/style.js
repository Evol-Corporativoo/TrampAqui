import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        width: '90vw',
        marginTop: '1vh',
    },
    label:{
        color: '#fff',
        marginBottom: '0.5vh',
        marginLeft: '1vw',
        fontSize: '1rem'
    },
    input:{
        borderRadius: 10,
        height: '95%',
        width: '99%',
        color: '#fff',
        fontSize: '1.1rem',
        paddingLeft: '3vw',
        backgroundColor: '#141414'
    },
    input_bg:{
        borderRadius: 10,
        height: '6.5vh',
        width: '',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2vh'
    },
    check_area:{
        flexDirection: 'row'
    },
    check_txt:{
        color: "#fff",
        fontSize: '0.9rem',
        marginLeft: '4vw'
    }
})

export default style