import { isFunction } from "../lodash";
import { defaultMiddleWare } from "../applyMiddlewares";
import { initializeStoreState } from "./actions";

export const createStore = (
  reducer = (state) => state,
  middleware = defaultMiddleWare
) => {
  let state;
  const subscribers = new Map();
  let nextSubscriberIndex = 1;

  const getState = () => state;

  const getNextSubscriberKey = () => `store_sub_${nextSubscriberIndex}`;
  const subscribe = (subscriber = () => {}) => {
    if (!isFunction(subscriber)) return;
    const key = getNextSubscriberKey();
    subscribers.set(key, subscriber);
    nextSubscriberIndex++;
    return () => subscribers.delete(key);
  };

  const notifyUpdates = () => {
    subscribers.forEach((sub = () => {}) => sub());
  };

  const dispatch = (action = {}) => {
    try {
      state = reducer(store.getState(), action);
      notifyUpdates();
    } catch (error) {
      let err = error;
      if (typeof action !== "object" || Array.isArray(action)) {
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
