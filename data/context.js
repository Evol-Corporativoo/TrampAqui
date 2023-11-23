import { useContext, useState, createContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RegisterContext = createContext({})

export function RegisterProvider({children}){

    const [user,setUser] = useState({});
    const [next,setNext] = useState([]);
    const [search,setSearch] = useState([]);
    const [signinError, setSigninError] = useState()
    const nav = useNavigation();
    function navLogin(){
        nav.navigate('home')
    }

    function validarCPF(cpf) {
        try{
            cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
        
            if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
                return false; // Verifica se o CPF tem 11 dígitos e não é composto por dígitos repetidos
            }
        
            var soma = 0;
            for (var i = 0; i < 9; i++) {
                soma += parseInt(cpf.charAt(i)) * (10 - i);
            }
        
            var resto = (soma * 10) % 11;
        
            if (resto === 10 || resto === 11) {
                resto = 0;
            }
        
            if (resto !== parseInt(cpf.charAt(9))) {
                return false; // Verifica o primeiro dígito verificador
            }
        
            soma = 0;
            for (var i = 0; i < 10; i++) {
                soma += parseInt(cpf.charAt(i)) * (11 - i);
            }
        
            resto = (soma * 10) % 11;
        
            if (resto === 10 || resto === 11) {
                resto = 0;
            }
        
            if (resto !== parseInt(cpf.charAt(10))) {
                return false; // Verifica o segundo dígito verificador
            }
        
            return true; // CPF válido
        }catch{
            return false;
        }    
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
            console.log('Oi?', response)
            if(response == true){
                
                return true
                nav.navigate('login')
            } else {
                return false;
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
        <RegisterContext.Provider value={{signin,login,user,logout,next,search,setNext,setSearch,validarCPF, signinError}}>
            {children}
        </RegisterContext.Provider>
    )
}