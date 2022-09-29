import { defaultMiddleWare } from "../applyMiddlewares";
import { initializeStoreState } from "./actions";
import { isObject } from "lodash";
import { createObserver } from "../observer";

export const createStore = (
  reducer = (state) => state,
  middleware = defaultMiddleWare
) => {
  let state;
  const observer = createObserver({ name: "store" });
  
  const subscribe = observer.subscribe;

  const getState = () => state;

  const dispatch = (action = {}) => {
    try {
      state = reducer(store.getState(), action);
      observer.setState();
    } catch (error) {
      let err = error;
      if (!isObject(action)) {
        err = "action has to be an object and have a property type";
      }
      throw new Error(err);
    }
    return action;
  };

  const store = {
    getState,
    dispatch,
    subscribe,
  };

  store.dispatch = middleware(store)?.(dispatch);
  store.dispatch(initializeStoreState());

  return store;
};
