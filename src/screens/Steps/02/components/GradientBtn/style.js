import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    icon:{
        size: '1.7em',
        color: '#fff'
    },
    btn:{
        borderRadius: 20,
        width: '33vw',
        height: '6.5vh',
        position: 'absolute',
        borderRightWidth: 3,
        borderRightColor: '#fff',
        bottom: '5vh',
        right: '5vw',
    },
    btn_grad:{
        flex: 1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_txt:{
        color: '#fff',
        marginRight: '2vw',
        fontSize: '1.2em'
    },
})

export default style