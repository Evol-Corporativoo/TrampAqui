import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: '13vh',
        flexDirection: 'row',
        width: '20vw',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inactive:{
        width: '1.5vh',
        height: '1.5vh',
        borderRadius: '50%',
        backgroundColor: '#D9D9D9',
    },
    active:{
        width: '1.5vh',
        height: '1.5vh',
        borderRadius: '50%',
        backgroundColor: '#92E3A9'
    }
})

export default style