import { isFunction } from "../lodash";
import { defaultMiddleWare } from "../applyMiddlewares";
import { initializeStoreState } from "./actions";
import { isObject } from "lodash";

export const createStore = (
  reducer = (state) => state,
  middleware = defaultMiddleWare
) => {
  let state;
  const subscribers = new Map();
  let nextSubscriberIndex = 0;

  const getState = () => state;

  const getNextSubscriberKey = () => {
    nextSubscriberIndex++;
    return `store_sub_${nextSubscriberIndex}`;
  };

  const subscribe = (subscriber = () => {}) => {
    if (!isFunction(subscriber)) return;
    const key = getNextSubscriberKey();
    subscribers.set(key, subscriber);
    return () => subscribers.delete(key);
  };

  const notifyUpdates = () => subscribers.forEach((sub = () => {}) => sub());

  const dispatch = (action = {}) => {
    try {
      state = reducer(store.getState(), action);
      notifyUpdates();
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
