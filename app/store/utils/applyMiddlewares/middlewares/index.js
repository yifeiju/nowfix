export const logger = ({ getState } = {}) => {
  return (next = () => {}) => {
    return (action) => {
      if (typeof getState !== "function") return next(action);
      console.log("prevState: ", getState());
      console.log("action: ", action);
      const result = next(action);
      console.log("nextState: ", getState());
      return result;
    };
  };
};

export const thunk = (store = {}) => {
  return (next = () => {}) => {
    return (action) => {
      if (typeof action === "function") {
        return action(store.dispatch, store.getState);
      }
      const result = next(action);
      return result;
    };
  };
};
