import { NavigationContainer } from "@react-navigation/native";

import Stacks from './StackNav'
import Tabs from "./TabNav";

export default function Routes(){

    return(
        <NavigationContainer>
            <Stacks/>
        </NavigationContainer>
    )
}