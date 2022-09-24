import { types } from "./types";

export const userInitialState = {
  userTypes: [],
  currentUser: {
    name: "test_user_name",
  },
};

export const userReducer = (
  prevState = userInitialState,
  { type, payload } = {}
) => {
  const state = { ...prevState };
  switch (type) {
    case types.SET_USER_DATA:
      state.currentUser.data = { ...state.currentUser.data, ...payload };
      break;

    default:
      break;
  }
  return state;
};
