import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../app/firebase/config";
import Main from "./stacks/index";
import BTabs from "./bottomtabs/TabsNavigator";
import { requestAllServices } from "../app/store/states/services/thunks";
import { useAppDispatch, useAppSelector } from "../app/store";
import {
  requestAllUserTypes,
  requestUserData,
} from "../app/store/states/user/thunks";
import { selectCurrentUser } from "../app/store/states/user/selectors";

const MainNavigator = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(requestUserData(user?.uid));
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    dispatch(requestAllServices());
  }, []);

  useEffect(() => {
    dispatch(requestAllUserTypes());
  }, []);

  return (
    <NavigationContainer>
      {currentUser.id ? <BTabs /> : <Main />}
    </NavigationContainer>
  );
};

export default MainNavigator;
