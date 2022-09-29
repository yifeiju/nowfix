import { isFunction } from "../lodash";

export const createObserver = (
  { name = "defaultObserverName", initialState } = {},
  ...extraArgs
) => {
  let state = initialState;
  const subscribers = new Map();
  let nextSubscriberIndex = 0;

  const getNextSubscriberKey = () => {
    nextSubscriberIndex++;
    return `${name}_sub_${nextSubscriberIndex}`;
  };

  const subscribe = (subscriber = () => {}) => {
    if (!isFunction(subscriber)) return;
    const key = getNextSubscriberKey();
    subscribers.set(key, subscriber);
    return () => subscribers.delete(key);
  };

  const getState = () => state;
  const notifyUpdates = () => {
    subscribers.forEach((sub = () => {}) => sub(getState(), ...extraArgs));
  };
  const setState = (newState) => {
    state = newState;
    notifyUpdates();
  };
  
  return {
    subscribe,
    getState,
    setState,
  };
};
