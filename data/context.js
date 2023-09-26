import { useContext, useState, createContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RegisterContext = createContext({})

export function RegisterProvider({children}){

    const [user,setUser] = useState({});
    const nav = useNavigation();

    useEffect(()=>{

        async function buscarUsuario(){
          let json_usuario = await AsyncStorage.getItem('usuario')
          if(json_usuario != null){
            let n_usuario = JSON.parse(json_usuario)
            setUser(n_usuario)
            nav.navigate('login')
          }
        }
    
        buscarUsuario()
    
      },[])

    async function logout(){

        await AsyncStorage.setItem('usuario',null)
        nav.navigate('login')

    }

    function signin(data){

        let fetchOptions = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        let url = 'http://localhost/tramp/controller/cadastrar.php'
        fetch(url, fetchOptions)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
        .then(error=> console.error(error))

        //nav.navigate('login')

    }

    function login(data){
        let url = 'http://localhost/tramp/controller/obter-usuario.php'
        let options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(url, options)
        .then(response => response.json())
        .then(response =>{
           if(typeof response == 'object'){
            let json_user = JSON.stringify(response)
            async function gravarUsuario(){
                await AsyncStorage.setItem('usuario',json_user)
            }
            gravarUsuario()
            nav.navigate('home')
           }
        })
        .catch(error=>{
            console.error('Explodiu o negócio aqui: ',error)
        })
    }

    return(
        <RegisterContext.Provider value={{signin,login,user,logout}}>
            {children}
        </RegisterContext.Provider>
    )
}