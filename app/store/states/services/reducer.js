import { types } from "./types";

export const servicesInitialState = {
  allServices: [],
};

export const serviceReducer = (
  prevState = servicesInitialState,
  { type, payload } = {}
) => {
  const state = { ...prevState };
  switch (type) {
    case types.SET_ALL_SERVICES:
      state.allServices = payload;
      break;

    default:
      break;
  }
  return state;
};
