import { fb } from "../../../firebase";
import { getArrayFromCollection } from "../../../firebase/utils";
import { setAllUserTypes, setUserData } from "./actionsCreator";

export const requestAllUserTypes = () => {
  return async (dispatch, getState) => {
    try {
      const result = await fb.user.allUserTypes();
      const userTypes = getArrayFromCollection(result);
      dispatch(setAllUserTypes(userTypes));
    } catch (error) {
      console.error("error_requesting_allUserTypes", error);
    }
  };
};

export const requestUserData = (id) => {
  return async (dispatch, getState) => {
    try {
      const data = await fb.user.getUserData(id);
      dispatch(setUserData(data));
    } catch (error) {
      console.error("error_requesting_UserData", error);
    }
  };
};

export const requestUpdateUserData = ({
  userId,
  data = {},
  beforeRequest = () => {},
  onSuccess = () => {},
  onError = () => {},
  onComplete = () => {},
}) => {
  return async (dispatch, getState) => {
    beforeRequest();
    try {
      await fb.user.updateUserData(userId, data);
      console.log("CALLED__");
      dispatch(requestUserData(userId));
      onSuccess();
    } catch (error) {
      console.log("ERR: ", error);
      onError();
    } finally {
      onComplete();
    }
  };
};
