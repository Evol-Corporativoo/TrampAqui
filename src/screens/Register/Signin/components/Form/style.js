import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        width: '90vw',
        marginTop: '1vh',
        overflow: 'scroll',
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
        marginBottom: '1vh'
    },
    check_area:{
        flexDirection: 'row'
    },
    check_txt:{
        color: "#fff",
        fontSize: '0.9rem',
        marginLeft: '4vw'
    },
    bg:{
        borderRadius: 5,
        width: '87vw',
        height: '5vh',
        marginTop: '3vh'
    },
    grd:{
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt:{
        color: '#fff',
        fontSize: '1.3rem'
    }
})

export default style