import { types } from "./types";

export const userInitialState = {
  userTypes: [],
  currentUser: {
    name: "test_user_name",
  },
};

export const userReducer = (
  currentState = userInitialState,
  { type, payload } = {}
) => {
  const state = { ...currentState };
  switch (type) {
    case types.SET_USER_DATA:
      state.currentUser.data = { ...state.currentUser.data, ...payload };
      break;

    default:
      break;
  }
  return state;
};
