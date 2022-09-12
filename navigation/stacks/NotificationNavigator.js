import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notification from '../../screens/Notification';

 const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="Notification" component={Notification} />

    </Stack.Navigator>
);