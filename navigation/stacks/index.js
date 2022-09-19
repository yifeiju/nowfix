import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../../screens/Login";
import Principi from "../../screens/Principi";
import Registro from "../../screens/Registro";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Principi" component={Principi} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        
    </Stack.Navigator>
);