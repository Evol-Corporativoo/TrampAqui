import { View, Text } from "react-native";
import style from "./style";

export default function Create({display}){

    return(
        <View style={[style.container,display]}>
            <Text>Oiers</Text>
        </View>
    )
}