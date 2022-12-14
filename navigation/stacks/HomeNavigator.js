import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import ServiceList from "../../screens/ServiceList";
import Personperfil from "../../screens/Personperfil"

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="service" component={ServiceList} />
      <Stack.Screen name="Personperfil" component={Personperfil} />
    </Stack.Navigator>
  );
};
