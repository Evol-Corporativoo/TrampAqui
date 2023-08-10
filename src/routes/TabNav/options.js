import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import HomeHeader from '../../screens/Home/components/header';
import SearchHeader from '../../screens/Search/components/Header';
import ProfileHeader from '../../screens/Profile/components/Header';
import ExploreHeader from '../../screens/Explore/components/Header';
import ExploreIcon from '../exploreIcon';

const options = {
    home:{
        title: 'TrampAqui - A um passo de uma nova carreira',
        headerShown: true,
        headerTransparent: true,
        headerTitle: ()=><HomeHeader/>,
        headerStyle:{
            height: '15vh',
            headerBackground: 'rgba(0,0,0,0)',
            borderBottomWidth: 0
        },
        tabBarLabelPosition: 'below-icon',
        tabBarIcon: ()=>(
            <Feather name="home" size={'2rem'} color="black" />
        ),
        tabBarLabel: '',
        tabBarStyle:{
            height: '8vh'
        }
    },
    search:{
        title: 'TrampAqui - A um passo de uma nova carreira',
        headerShown: true,
        headerTransparent: true,
        headerTitle: ()=><SearchHeader/>,
        headerStyle:{
            height: '15vh',
            headerBackground: 'rgba(0,0,0,0)',
            borderBottomWidth: 0
        },
        tabBarLabelPosition: 'below-icon',
        tabBarIcon: ()=>(
            <Feather name="search" size={'2rem'} color="black" />
        ),
        tabBarLabel: '',
        tabBarStyle:{
            height: '8vh'
        }
    },
    explore:{
        title: 'TrampAqui - A um passo de uma nova carreira',
        headerShown: true,
        headerTitle: ()=><ExploreHeader/>,
        headerTransparent: 'true',
        headerStyle:{
            height: '15vh',
            headerBackground: 'rgba(0,0,0,0)',
            borderBottomWidth: 0
        },
        tabBarLabelPosition: 'below-icon',
        tabBarIcon: ()=>(
            <ExploreIcon/>
        ),
        tabBarLabel: '',
        tabBarStyle:{
            height: '8vh'
        }
    },
    jobs:{
        title: 'TrampAqui - A um passo de uma nova carreira',
        headerShown: true,
        headerTransparent: true,
        headerTitle: ()=><SearchHeader/>,
        headerStyle:{
            height: '15vh',
            headerBackground: 'rgba(0,0,0,0)',
            borderBottomWidth: 0
        },
        tabBarLabelPosition: 'below-icon',
        tabBarIcon: ()=>(
            <Octicons name="briefcase" size={'2rem'} color="black" />
        ),
        tabBarLabel: '',
        tabBarStyle:{
            height: '8vh'
        }
    },
    profile:{
        title: 'TrampAqui - A um passo de uma nova carreira',
        headerShown: true,
        headerTransparent: true,
        headerTitle: ()=><ProfileHeader/>,
        headerStyle:{
            height: '15vh',
            headerBackground: 'rgba(0,0,0,0)',
            borderBottomWidth: 0
        },
        tabBarLabelPosition: 'below-icon',
        tabBarIcon: ()=>(
            <Octicons name="person" size={'2rem'} color="black" />
        ),
        tabBarLabel: '',
        tabBarStyle:{
            height: '8vh',
        }
    }
}

export default options