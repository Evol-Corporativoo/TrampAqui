import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        width: '66vw',
        height: '5vh',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: '1vh'
    },
    label:{
        fontSize: '1rem',
        width: '90%',
    },
    btn:{
        width: '85%',
        height: '100%',
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    div:{
        height: '60%',
        borderRightWidth: 2,
        marginRight: '3vw',
        marginLeft: '3vw'
    },
    icon:{
        width: '2.5vh',
        height: '2.5vh',
    }
})

export default style