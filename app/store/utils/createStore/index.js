export const createStore = (reducer = (state) => state) => {
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
    if (typeof action !== "object" || Array.isArray(action)) return;
    state = reducer(state, action);
    console.log("STORE_STATE: ", action, state);
    notifyUpdates();
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};
