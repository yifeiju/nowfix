import { fb } from "../../../firebase";
import { setAllServices } from "./actions";

const getArrayFromCollection = (collection) => {
  // DOTO: find a way to reuse this function
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

export const requestAllServices = () => {
  return (dispatch, getState) => {
    //TODO: check getState
    fb.service.all().then((result) => {
      const services = getArrayFromCollection(result);
      dispatch(setAllServices(services));
    });
  };
};
