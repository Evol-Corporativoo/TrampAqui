import { NavigationContainer } from "@react-navigation/native";

import Stacks from './StackNav'
import Tabs from "./TabNav";
import Details from "../screens/Details";

import { RegisterProvider } from "../../data/context";

export default function Routes(){

    return(

        <NavigationContainer>
            <RegisterProvider>
                <Stacks/>
            </RegisterProvider>
        </NavigationContainer>
        
    )
}