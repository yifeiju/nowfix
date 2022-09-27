import { serviceReducer } from "./services/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = {
  user: userReducer,
  service: serviceReducer,
};
