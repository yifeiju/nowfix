import { useState, useEffect } from "react";
import { rootReducer } from "../states";
import {
  applyMiddleware,
  combineReducers,
  createStore,
  logger,
  thunk,
} from "../utils";
import isEqual from "lodash/isEqual";
import { useRef } from "react";

export const AppProvider = ({ children }) => <>{children}</>;

const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk, logger)
);

const defaultIsEqual = isEqual;

export const useAppSelector = (
  selector = (state) => state,
  isEqual = defaultIsEqual,
  name = ""
) => {
  const [, forceRender] = useState(false);
  const selection = useRef(selector(store.getState()));
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const nextSelection = selector(store.getState());
      if (isEqual(selection.current, nextSelection)) return;
      selection.current = nextSelection;
      forceRender((isTrue) => !isTrue);
    }, name);
    return unsubscribe;
  }, []);

  return selection.current;
};

export const useAppDispatch = () => store.dispatch;
