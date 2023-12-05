import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D4D4D4'
    },
    map:{
      width: '90vw',
      height: '90vh'
    },
    text_warn:{
      fontSize: '1.2rem',
      textAlign: 'center',
    },
    warn_label:{
      fontSize: '1.1rem',
      fontWeight: 'bold',
    },
    warn_btn:{
      borderRadius: 20,
      width: '30vw',
      height: '5vh',
      marginTop: '5%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00FEA0',
    },
    warn:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    feed:{
      height: '75vh',
      width: '90vw',
      marginTop: '10vh',
      backgroundColor: 'grey'
    }
    
  });

export default style