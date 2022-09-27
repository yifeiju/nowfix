export const logger = ({ getState } = {}) => {
  return (next = () => {}) => {
    return (action) => {
      if (typeof getState !== "function") return next(action);
      console.group("ACTION: ", action?.type);
      console.log("%cprevState: ", "color: #ededff;", getState());
      console.log("%caction: ", "color: #337eff;", action);
      const result = next(action);
      console.log("%cnextState: ", "color: #19FF66;", getState());
      console.groupEnd();
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
