import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    bar:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: '12vh',
        marginLeft: '5vw',
        width: '90vw',
        height: '5vh',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center'
    },
    icon:{
        size: '1.5rem',
        color: '#000',
        marginLeft: '5vw',
        marginRight: '5vw'
    },
    text_view:{
        borderLeftWidth: 1.5,
        borderLeftColor: '#000',
        paddingLeft: '2vw',
        width: '80%'
    },
    text:{
        fontSize: '1.1rem',
        flex: 1,
    }
})

export default style