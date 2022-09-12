import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../../screens/Chat';

 const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="Chat" component={Chat} />

    </Stack.Navigator>
);