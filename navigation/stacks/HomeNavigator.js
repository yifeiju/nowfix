import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import ServiceList from "../../screens/ServiceList";
import { useAppSelector } from "../../app/store";
import { selectAllServices } from "../../app/store/states/services/selectors";

const Stack = createStackNavigator();

export default () => {
  const services = useAppSelector(selectAllServices);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      {services.map((service) => (
        <Stack.Screen
          key={service.id}
          name={service.name}
          component={ServiceList}
        />
      ))}
    </Stack.Navigator>
  );
};
