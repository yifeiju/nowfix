import { types } from "./types";

export const servicesInitialState = {
  allServices: [],
};

export const serviceReducer = (
  currentState = servicesInitialState,
  { type, payload } = {}
) => {
  const state = { ...currentState };
  switch (type) {
    case types.SET_ALL_SERVICES:
      state.allServices = payload;
      break;

    default:
      break;
  }
  return state;
};
