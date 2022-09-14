import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Fontaneria from '../../screens/Fontaneria';
import Cristaleria from '../../screens/Cristaleria';
import Calderas from '../../screens/Calderas'
import Cerrajeria from '../../screens/Cerrajeria'
import Informatica from'../../screens/Informatica'
import Lampisteria from '../../screens/Lampisteria'

 const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Fontaneria" component={Fontaneria} />
        <Stack.Screen name="Cristaleria" component={Cristaleria} />
        <Stack.Screen name="Calderas" component={Calderas} />
        <Stack.Screen name="Cerrajeria" component={Cerrajeria} />
        <Stack.Screen name="Informatica" component={Informatica} />
        <Stack.Screen name="Lampisteria" component={Lampisteria} />

    </Stack.Navigator>
);