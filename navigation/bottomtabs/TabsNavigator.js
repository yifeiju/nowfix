import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavigator from '../stacks/HomeNavigator';
import NotificationNavigator from '../stacks/NotificationNavigator';
import ProfileNavigator from '../stacks/ProfileNavigator';
import ChatNavigator from '../stacks/ChatNavigator';


const BottomTabs = createBottomTabNavigator();

const BTabs = () => (
    <BottomTabs.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "blue"
        },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyles: styles.tabBar,
        headerTintColor: "red",
        headerTitleStyle: {
            fontWeight: 'bold'
        }
        
    }}>

        <BottomTabs.Screen name="HomeTab" component={HomeNavigator}
            options={{
                tabBarIcon: ({ focused }) => <Ionicons name="md-home" size={30} color="#054091" />,
                title: "Home"
            }}
        />
        <BottomTabs.Screen name="NotificationTab" component={NotificationNavigator}
            options={{
                tabBarIcon: ({ focused }) => <Ionicons name="notifications" size={30} color="#054091" />,
                title: "Notificacion"
                
            }}
        />
        <BottomTabs.Screen name="ChatTab" component={ChatNavigator}
            options={{
                tabBarIcon: ({ focused }) => <Ionicons name="chatbubble-ellipses" size={30} color="#054091" />,
                title: "Chat"
            }}
        />
        <BottomTabs.Screen name="ProfileTab" component={ProfileNavigator}
            options={{
                tabBarIcon: ({ focused }) => <Ionicons name="person" size={30} color="#054091" />,
                title: "Perfil"
            }}
        />


    </BottomTabs.Navigator >
);


export default BTabs;

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        
        borderRadius: 15,
        height: 90
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})