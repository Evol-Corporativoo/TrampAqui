import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{},
    bg:{
        width: '110vw',
        height: '100vh',
        position: 'absolute',
        bottom: '-17vh',
        overflow: 'hidden',
        right: '-5vw'
    },
    textarea:{
        position: 'absolute',
        bottom: '15vh'
    },
    icon:{
        size: '1.7em',
        color: '#fff'
    },
    title:{
        color: '#fff',
        fontSize: '1.8rem',
        width: '55vw',
        marginLeft: '5vw',
        fontWeight: '350',
    },
    span:{
        marginLeft: '2vw',
        color: '#00FEA0',
        fontWeight: '500'
    },
    welcome_txt:{
        color: '#fff',
        width: '90vw',
        marginLeft: '5vw',
        fontWeight: '300',
        fontSize: '0.9rem'
    }
})

export default style