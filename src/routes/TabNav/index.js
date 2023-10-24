import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../screens/Home";
import Search from "../../screens/Search";
import Explore from "../../screens/Explore";
import Jobs from "../../screens/Jobs";
import Profile from "../../screens/Profile";

import options from "./options";

export default function Tabs(){

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator initialRouteName="search">

            <Tab.Screen
                name="home"
                component={Home}
                options={options.home}
            />
            <Tab.Screen
                name="search"
                component={Search}
                options={options.search}
            />
            <Tab.Screen
                name="explore"
                component={Explore}
                options={options.explore}
            />
            <Tab.Screen
                name="jobs"
                component={Jobs}
                options={options.jobs}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={options.profile}
            />

        </Tab.Navigator>
    )
}