import { fb } from "../../../firebase";
import { getArrayFromCollection } from "../../../firebase/utils";
import { setAllUserTypes } from "./actionsCreator";

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
