import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
      
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100vw',
        height: '20vh',
        paddingRight: '7vw',
        paddingLeft: '7vw',
        marginBottom: '1vh'
    },
    card:{
        width: '40vw',
        height: '40vw',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    title:{
        color: '#000',
        fontWeight: '600',
        fontSize: '1.2em',
        textAlign: 'center'
    },
    subtitle:{
        color: '#fff',
        fontWeight: '200'
    },
    icon: {
        size: '2.5em',
        color: '#000',
    },
    div:{
        borderWidth: 0.5,
        width: '6vw',
        margin: '0.5vh'
    }
})

export default style