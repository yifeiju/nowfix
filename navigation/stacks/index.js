import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../../screens/Login";
import Principi from "../../screens/Principi";
import Registro from "../../screens/Registro";
import Fontaneria from "../../screens/Fontaneria";
import Home from "../../screens/Home";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Principi" component={Principi} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Fontaneria" component={Fontaneria} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
);