import { defaultMiddleWare } from "../applyMiddlewares";

export const createStore = (
  reducer = (state) => state,
  middleware = defaultMiddleWare
) => {
  let state = reducer(undefined, {});
  const subscribers = new Map();
  let nextSubscriberIndex = 1;

  const getState = () => state;

  const getNextSubscriberKey = () => `sub_${nextSubscriberIndex}`;
  const subscribe = (subscriber = () => {}) => {
    if (typeof subscriber !== "function") return;
    const key = getNextSubscriberKey();
    subscribers.set(key, subscriber);
    nextSubscriberIndex++;
    return () => subscribers.delete(key);
  };

  const notifyUpdates = () => {
    subscribers.forEach((sub = () => {}) => sub(state));
  };

  const dispatch = (action = {}) => {
    try {
      state = reducer(state, action);
      notifyUpdates();
    } catch (error) {
      let err = error;
      if (typeof action !== "object" || Array.isArray(action)) {
        err = "action has to be typeof object and have a property type";
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

  store.dispatch = middleware(store)(dispatch);

  return store;
};
