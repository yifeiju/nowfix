import { createContext, useContext, useReducer } from "react";
import { rootReducer } from "../states";
import { combineReducers, once } from "../utils";

const AppContext = createContext();
const combinedReducer = combineReducers(rootReducer);
const getInitialState = once(combinedReducer);

export const AppProvider = ({ children }) => {
  const [AppState, dispatch] = useReducer(
    combinedReducer,
    getInitialState(undefined, {})
  );
  const getState = () => AppState;
  console.log({ APP_CONTEXT_STATE: getState() });
  return (
    <AppContext.Provider value={[getState, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppSelector = (selector = (state) => state) => {
  const [getState] = useContext(AppContext);
  const selectedValue = selector(getState());
  return selectedValue;
};

export const useAppDispatch = () => {
  const [getState, dispatch] = useContext(AppContext);
  const thunkDispatch = (action = {}) => {
    switch (typeof action) {
      case "function":
        return action(thunkDispatch, getState);

      case "object": {
        if (!Array.isArray(action)) return dispatch(action);
        return;
      }

      default:
        throw new Error(
          "AppDispatch: action has to be typeof function or object"
        );
    }
  };
  return thunkDispatch;
};
