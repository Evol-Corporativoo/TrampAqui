import { useContext, useState, createContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RegisterContext = createContext({})

export function RegisterProvider({children}){

    const [user,setUser] = useState({});
    const [next,setNext] = useState([]);
    const [search,setSearch] = useState([]);
    const nav = useNavigation();
    function navLogin(){
        nav.navigate('home')
    }

    useEffect(()=>{

        async function buscarUsuario(){
          let json_usuario = await AsyncStorage.getItem('usuario')
          if(json_usuario != null){
            let n_usuario = JSON.parse(json_usuario)
            setUser(n_usuario)
          }
        }
    
        buscarUsuario()
    
      },[])


    async function logout(){

        AsyncStorage.removeItem('usuario')
        setUser({})
        nav.navigate('login')

    }

    function signin(data){

        let fetchOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        let url = 'http://localhost/Trampo/script/server/controller/cadastrar.php'
        fetch(url, fetchOptions)
        .then(response => response.json())
        .then(response => {
            
            if(response == true){
                nav.navigate('login')
            }
            
        })

    }

    function login(data){   
        let url = 'http://localhost/Trampo/script/server/controller/login.php'
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
           if(response[0] == true){
            //console.log(response)
            function gravarUsuario(){
                setTimeout(()=>{
                    setUser(JSON.stringify(response[1]))
                    AsyncStorage.setItem('usuario',JSON.stringify(response[1]))
                },500)    
                setTimeout(()=>{
                    console.log(user)
                    navLogin()
                },500)
            }
            gravarUsuario()
           }
        })
        .catch(error=>{
            console.error('Algo deu errado: ',error)
        })
    }

    return(
        <RegisterContext.Provider value={{signin,login,user,logout,next,search,setNext,setSearch}}>
            {children}
        </RegisterContext.Provider>
    )
}