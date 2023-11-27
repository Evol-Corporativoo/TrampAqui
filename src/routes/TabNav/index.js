import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";

import Home from "../../screens/Home";
import Search from "../../screens/Search";
import Explore from "../../screens/Explore";
import Jobs from "../../screens/Jobs";
import Profile from "../../screens/Profile";
import Details from "../../screens/Details";

import options from "./options";

export default function Tabs(){

    const Route = useRoute()
    const Tab = createBottomTabNavigator();

    const data = Route.params

    return(
        <Tab.Navigator initialRouteName="home">

            <Tab.Screen
                name="home"
                component={Home}
                options={options.home}
                initialParams={{data: data.user}}
            />
            <Tab.Screen
                name="search"
                component={Search}
                options={options.search}
                initialParams={{data: data.user}}
            />
            <Tab.Screen
                name="explore"
                component={Explore}
                options={options.explore}
                initialParams={{data: data.user}}
            />
            <Tab.Screen
                name="jobs"
                component={Jobs}
                options={options.jobs}
                initialParams={{data: data.user}}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={options.profile}
                initialParams={{data: data.user}}
            />

        </Tab.Navigator>
    )
}