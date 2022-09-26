import { useState, useEffect, useCallback } from "react";
import { rootReducer } from "../states";
import { createStore } from "../utils";
import isEqual from "lodash/isEqual";
import { useRef } from "react";

export const AppProvider = ({ children }) => <>{children}</>;

const store = createStore(rootReducer);

const defaultIsEqual = isEqual;

export const useAppSelector = (
  selector = (state) => state,
  isEqual = defaultIsEqual,
  name = ""
) => {
  const [, forceRender] = useState(false);
  const ref = useRef(selector(store.getState()));
  useEffect(() => {
    const unsubscribe = store.subscribe((nextState) => {
      const nextSelection = selector(nextState);
      if (isEqual(ref.current, nextSelection)) return;
      ref.current = nextSelection;
      forceRender((isTrue) => !isTrue);
    }, name);
    return unsubscribe;
  }, []);

  return ref.current;
};

export const useAppDispatch = () => {
  const thunkDispatch = useCallback((action = {}) => {
    switch (typeof action) {
      case "function":
        return action(thunkDispatch, store.getState);

      case "object": {
        if (!Array.isArray(action)) return store.dispatch(action);
        return;
      }

      default:
        throw new Error(
          "AppDispatch: action has to be typeof function or object"
        );
    }
  }, []);
  return thunkDispatch;
};
