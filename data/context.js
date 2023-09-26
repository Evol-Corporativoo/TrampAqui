import { useContext, useState, createContext } from "react";
import { useNavigation } from "@react-navigation/native";

export const RegisterContext = createContext({})

export function RegisterProvider({children}){

    const [user,setUser] = useState({});
    const nav = useNavigation();

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

        nav.navigate('login')

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
            console.log(response)
            setUser(response)
        })
        .catch(error=>{
            console.error('Explodiu o negócio aqui: ',error)
        })
    }

    return(
        <RegisterContext.Provider value={{signin,login,setUser}}>
            {children}
        </RegisterContext.Provider>
    )
}