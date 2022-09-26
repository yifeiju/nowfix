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

export const requestUpdateUserData = (updateData = {}) => {
  return (dispatch, getState) => {
    fb.user.updateUserData(updateData).then(() => {
      dispatch(requestUserData(updateData?.id));
    });
  };
};
