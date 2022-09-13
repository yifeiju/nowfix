import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Fontaneria from "../../screens/Fontaneria";

const Stack = createStackNavigator();

const Six =()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Fontaneria" component={Fontaneria} />
            
        </Stack.Navigator>
    )
}
export default Six