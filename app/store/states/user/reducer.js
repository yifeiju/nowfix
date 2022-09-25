import { types } from "./types";

export const userInitialState = {
  allUserTypes: [],
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
      state.currentUser = payload;
      break;
    case types.SET_ALL_USER_TYPES:
      state.allUserTypes = payload;
      break;
    default:
      break;
  }
  return state;
};
