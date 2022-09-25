import { types } from "./types";

export const setAllServices = (services = []) => ({
  type: types.SET_ALL_SERVICES,
  payload: services,
});
