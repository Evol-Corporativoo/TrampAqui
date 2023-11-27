import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container:{
        width: '90%',
        height: '80%',
        overflow: 'visible',
        //backgroundColor: '#fff'
    },
    trigger:{
        fontSize: '1.5rem',
        textAlign: 'center'
    },
    main_title:{
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    label:{
        color: '#1d6330',
        fontSize: '1.1rem'
    },
    input:{
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#000',
        height: '5vh',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginTop: '3%',
        marginBottom: '3%',
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
    },
    btn:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
    },
    textarea:{
        height: '20vh',
    },
    text_textarea:{
        flex: 1,
    },
    desc:{
        fontSize: '1rem'
    },
    input_area:{
        marginTop: '5%',
        marginBottom: '5%',
        borderBottomWidth: 1,
        borderBottomColor: '#141414'
    },
    finish_btn:{
        width: '40vw',
        height: '5vh',
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '5%'
    },
    right_row:{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        
    }

})

export default style