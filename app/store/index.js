import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { rootReducer } from "./states";

const AppContext = createContext();

const Provider = ({ children }) => {
  const [AppState, dispatch] = useReducer(rootReducer);
  const getState = () => AppState;
  console.log({ APP_CONTEXT: AppState });
  useEffect(() => {
    if (!AppState) dispatch({});
  }, []);
  return (
    <AppContext.Provider value={[getState, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

const isEqualBasic = (a, b) => a === b;

export const useAppSelector = (
  selector = (state) => state,
  isEqual = isEqualBasic
) => {
  const [getState] = useContext(AppContext);
  const state = getState();
  const [selection, setSelection] = useState(selector(state));
  useEffect(() => {
    const nextSelection = selector(state);
    if (!isEqual(selection, nextSelection)) {
      setSelection(nextSelection);
    }
  }, [state]);
  return selection;
};

export const useAppDispatch = () => {
  const [getState, dispatch] = useContext(AppContext);
  const thunkDispatch = (action = {}) => {
    switch (typeof action) {
      case "function":
        return action(dispatch, getState);
      case "object": {
        if (!Array.isArray(action)) return dispatch(action);
        return;
      }

      default:
        throw new Error(
          "AppDispatch: action has to be typeof function or objet"
        );
    }
  };
  return thunkDispatch;
};

export default Provider;
