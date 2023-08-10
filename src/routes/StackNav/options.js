import { AntDesign } from '@expo/vector-icons';

const options = {
    home:{
        headerShown: false
    },
    step01:{
        title: 'TrampAqui - A um passo de uma nova carreira',
        headerShown: false,
    },
    step02:{
        title: 'Voltar',
        headerTransparent: true,
        headerTitleStyle:{
            color: '#92E3A9'
        },
        headerBackImage: ()=>(
            <AntDesign name="left" size={'1.5em'} color="#fff" />
        )
    },
    step03:{
        title: 'Voltar',
        headerTransparent: true,
        headerTitleStyle:{
            color: '#92E3A9'
        },
        headerBackImage: ()=>(
            <AntDesign name="left" size={'1.5em'} color="#fff" />
        )
    },
    step04:{
        title: 'Voltar',
        headerTransparent: true,
        headerTitleStyle:{
            color: '#92E3A9'
        },
        headerBackImage: ()=>(
            <AntDesign name="left" size={'1.5em'} color="#fff" />
        ) 
    },
    step05:{
        title: 'Voltar',
        headerTransparent: true,
        headerTitleStyle:{
            color: '#92E3A9'
        },
        headerBackImage: ()=>(
            <AntDesign name="left" size={'1.5em'} color="#fff" />
        ) 
    },
    signin:{
        title: 'Voltar',
        headerTransparent: true,
        headerTitleStyle:{
            color: '#92E3A9'
        },
        headerBackImage: ()=>(
            <AntDesign name="left" size={'1.5em'} color="#fff" />
        )
    }
}

export default options