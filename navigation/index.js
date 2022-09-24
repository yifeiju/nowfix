import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../app/firebase/config";
import Main from "./stacks/index";
import BTabs from "./bottomtabs/TabsNavigator";
import { AppContext } from "../app/Provider";
import { fb } from "../app/firebase";
import { getArrayFromCollection } from "../app/firebase/utils";
import { requestAllServices } from "../app/store/states/services/thunks";
import { useAppDispatch } from "../app/store";

const MainNavigator = () => {
  const [state, setState] = useContext(AppContext);
  const dispatch = useAppDispatch();
  const { user = {} } = state;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("onAuthStateChanged", user);
      if (user?.uid) {
        const data = await fb.user.getUserData(user.uid);
        setState((prevState = {}) => ({ ...prevState, user: data }));
      } else {
        setState((prevState = {}) => ({ ...prevState, user: {} }));
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    fb.service.all().then((result) => {
      const services = getArrayFromCollection(result);
      setState((prevState = {}) => ({ ...prevState, services: services }));
    });
    dispatch(requestAllServices());
  }, []);

  useEffect(() => {
    fb.user.allUserTypes().then((result) => {
      const userTypes = getArrayFromCollection(result);
      setState((prevState = {}) => ({ ...prevState, userTypes: userTypes }));
    });
  }, []);

  return (
    <NavigationContainer>{user.id ? <BTabs /> : <Main />}</NavigationContainer>
  );
};

export default MainNavigator;
