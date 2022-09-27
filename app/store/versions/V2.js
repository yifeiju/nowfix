import { useState, useEffect, useCallback } from "react";
import { rootReducer } from "../states";
import { applyMiddleware, createStore, logger, thunk } from "../utils";
import isEqual from "lodash/isEqual";
import { useRef } from "react";

export const AppProvider = ({ children }) => <>{children}</>;

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

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

export const useAppDispatch = () => store.dispatch;
