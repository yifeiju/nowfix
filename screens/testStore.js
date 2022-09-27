import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import { selectAllServices } from "../app/store/states/services/selectors";
import { requestAllServices } from "../app/store/states/services/thunks";
import { selectCurrentUser } from "../app/store/states/user/selectors";

export const TestDispatch = () => {
  console.log("TestDispatch", { dispatch });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestAllServices());
    console.log("normalDispatch: ", dispatch({ type: "TEST_NORMAL" }));
    console.log(
      "THUNK_Dispatch: ",
      dispatch(() => {})
    );
    console.log(
      "THUNK_Dispatch_RETURS: ",
      dispatch(() => "hello")
    );
    console.log(
      "THUNK_Dispatch_RETURS_promisse: ",
      dispatch(() => new Promise(() => {}))
    );
  }, []);
  return null;
};

export const TestSelectorUser = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestAllServices());
  }, []);
  console.log("TestSelectorUser", { user });
  return null;
};

export const TestSelectorUserDispatch = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestAllServices());
  }, []);
  console.log("TestSelectorUserDispatch", { user, dispatch });
  return null;
};

export const TestSelectorServices = () => {
  const services = useAppSelector(selectAllServices);
  console.log("TestSelectorServices", { services });
  return null;
};

export const TestSelectorServicesDispatch = () => {
  const services = useAppSelector(selectAllServices);
  console.log("TestSelectorServicesDispatch", { services });
  return null;
};
