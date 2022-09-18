import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import ServiceList from "../../screens/serviceList";
import { AppContext } from "../../app/Provider";

const Stack = createStackNavigator();

export default () => {
  const [state] = useContext(AppContext);
  const { services = [] } = state ?? {};
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
