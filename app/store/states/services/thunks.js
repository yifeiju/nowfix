import { fb } from "../../../firebase";
import { getArrayFromCollection } from "../../../firebase/utils";
import { setAllServices } from "./actions";
import { selectAllServices } from "./selectors";

export const requestAllServices = () => {
  return (dispatch, getState) => {
    const currentState = getState(); // this is how we get the currentState
    const allServices = selectAllServices(currentState);
    console.log({ currentState, allServices });
    fb.service.all().then((result) => {
      const services = getArrayFromCollection(result);
      dispatch(setAllServices(services));
    });
  };
};
