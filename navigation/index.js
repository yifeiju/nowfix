import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../app/index";
import Main from "./stacks/index";
import BTabs from "./bottomtabs/TabsNavigator";
import { AppContext } from "../app/Provider";
import { fbServices } from "../app/firebase";
import { getArrayFromCollection } from "../app/firebase/utils";

const MainNavigator = () => {
  const [state, setState] = useContext(AppContext);
  const { user = {} } = state;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged", user);
      if (user?.uid) {
        const id = user.uid;
        setState({ ...state, user: { ...user, id } });
      } else {
        setState({ ...state, user: {} });
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    fbServices.getServices().then((result) => {
      const services = getArrayFromCollection(result);
      setState((prevState = {}) => ({ ...prevState, services: services }));
    });
  }, []);

  return (
    <NavigationContainer>{user.id ? <BTabs /> : <Main />}</NavigationContainer>
  );
};

export default MainNavigator;
