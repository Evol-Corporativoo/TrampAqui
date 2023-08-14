import { createStackNavigator } from "@react-navigation/stack";
import options from "./options";

import Tabs from '../TabNav'

import Step01 from '../../screens/Steps/01'
import Step02 from '../../screens/Steps/02'
import Step03 from '../../screens/Steps/03'
import Step04 from '../../screens/Steps/04'
import Step05 from "../../screens/Steps/05";

import SignIn from "../../screens/Register/Signin";
import Confirm from "../../screens/Register/Confirm";
import PassCode from "../../screens/Register/PassCode";
import Congrats from "../../screens/Register/Congrats";
import Login from "../../screens/Register/Login";

export default function Stacks(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName="step01">
            <Stack.Screen
                name='home'
                component={Tabs}
                options={options.home}
            />
            <Stack.Screen
                name='step01'
                component={Step01}
                options={options.step01}
            />
            <Stack.Screen
                name='step02'
                component={Step02}
                options={options.step02}
            />
            <Stack.Screen
                name='step03'
                component={Step03}
                options={options.step03}
            />
            <Stack.Screen
                name='step04'
                component={Step04}
                options={options.step04}
            />
            <Stack.Screen
                name='step05'
                component={Step05}
                options={options.step05}
            />
            <Stack.Screen
                name='signin'
                component={SignIn}
                options={options.signin}
            />
            <Stack.Screen
                name='confirm'
                component={Confirm}
                options={options.signin}
            />    
            <Stack.Screen
                name='passcode'
                component={PassCode}
                options={options.signin}
            />  
            <Stack.Screen
                name='congrats'
                component={Congrats}
                options={options.signin}
            />
            <Stack.Screen
                name='login'
                component={Login}
                options={options.signin}
            />
        </Stack.Navigator>
    )
}