import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../screens/Profile';
import Acerca from '../../screens/Acerca';
import Favoritos from '../../screens/Favoritos';
import Ajustes from '../../screens/Ajustes';
import Servicios from '../../screens/Servicios';
import Facturas from '../../screens/Facturas';
import Categories from '../../screens/Categories';
import Información from '../../screens/Informations';
import Historial from '../../screens/Historial';


 const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Acerca" component={Acerca} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="Ajustes" component={Ajustes} />
        <Stack.Screen name="Servicios" component={Servicios} />
        <Stack.Screen name="Facturas" component={Facturas} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Información" component={Información} />
        <Stack.Screen name="Historial" component={Historial} />

    </Stack.Navigator>
);