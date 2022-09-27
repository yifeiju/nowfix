export const logger = ({ getState } = {}) => {
  return (next = () => {}) => {
    const mLogger = (action) => {
      if (typeof getState !== "function") return next(action);
      console.group("ACTION: ", action?.type);
      console.log("%cprevState: ", "color: #ededff;", getState());
      console.log("%caction: ", "color: #337eff;", action);
      const result = next(action);
      console.log("%cnextState: ", "color: #19FF66;", getState());
      console.groupEnd();
      return result;
    };
    return mLogger;
  };
};

export const thunk = (store = {}) => {
  return (next = () => {}) => {
    const mThunk = (action) => {
      if (typeof action === "function") {
        return action(store.dispatch, store.getState);
      }
      const result = next(action);
      return result;
    };
    return mThunk;
  };
};
