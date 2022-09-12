import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavigator from '../stacks/HomeNavigator';
import NotificationNavigator from '../stacks/NotificationNavigator';
import ProfileNavigator from '../stacks/ProfileNavigator';
import ChatNavigator from '../stacks/ChatNavigator';


const BottomTabs = createBottomTabNavigator();

const BTabs = () => (
    <BottomTabs.Navigator screenOptions={{headerShown:false}}>

        <BottomTabs.Screen name="HomeTab" component={HomeNavigator}
            options={{
                tabBarIcon: ({ focused }) => <Ionicons name="md-home" size={30} color="#900" />,
                title: ""
            }}
        />
        <BottomTabs.Screen name="NotificationTab" component={NotificationNavigator}
            options={{
                tabBarIcon: ({ focused }) => <Ionicons name="md-home" size={30} color="#900" />,
                title: "Home"
            }}
        />
        <BottomTabs.Screen name="ChatTab" component={ChatNavigator}
            options={{
                tabBarIcon: ({ focused }) => <Ionicons name="md-home" size={30} color="#900" />,
                title: "Home"
            }}
        />
        <BottomTabs.Screen name="ProfileTab" component={ProfileNavigator}
            options={{
                tabBarIcon: ({ focused }) => <Ionicons name="md-home" size={30} color="#900" />,
                title: "Home"
            }}
        />


    </BottomTabs.Navigator >
);


export default BTabs;