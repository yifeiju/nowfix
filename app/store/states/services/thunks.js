import { fb } from "../../../firebase";
import { getArrayFromCollection } from "../../../firebase/utils";
import { selectCurrentUser } from "../user/selectors";
import { setAllServices } from "./actionsCreator";
import { selectAllServices } from "./selectors";

export const requestAllServices = () => {
  // we return a thunk function --> will get the dispatch and getState
  return (dispatch, getState) => {
    // EXAMPLE
    // dispatch: is a function that will get an object={type,paload} as a parameter and call all reducers with their own states and with the object={type,paload} received
    const currentState = getState(); // getState: its a function that will get the whole state
    const allServices = selectAllServices(currentState);
    const currentUser = selectCurrentUser(currentState);
    console.log("EXAPLE_USING_THUNK", {
      currentState,
      allServices,
      currentUser,
    });
    ////////////////////////////////////////////////////////////////////////
    fb.service.all().then((result) => {
      const services = getArrayFromCollection(result);
      dispatch(setAllServices(services));
    });
  };
};
