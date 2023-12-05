import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#D4D4D4',
        alignItems: 'center',
        overflow: 'scroll',
        paddingTop: '10vh',
    },
    header_space:{
        //backgroundColor: 'red',
        width: '100%',
        height: '9%',
    },
    results:{
        width: '95%',
        marginTop: '5vh'
    },
    card:{
        flexDirection: 'row',
        width: '100%',
        //height: '15vh',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: '1.5vw',
        justifyContent: 'space-between',
    },
    title:{
        fontSize: '1.3rem',
        fontWeight: 'bold'
    },
    col:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '1vw',
        maxWidth: '15%',
    },
    label:{
        fontSize: '1rem',
        color: '#2b2b2b',
        fontWeight: 'bold'
    },
    status_box:{
        height: '3vw',
        width: '3vw',
    },
    btn:{
        borderWidth: 1,
        borderRadius: 20,
        padding: '1vw',
    }

})

export default style