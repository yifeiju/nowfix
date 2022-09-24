import { combineReducers } from "../utils";
import { serviceReducer } from "./services/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  service: serviceReducer,
});
