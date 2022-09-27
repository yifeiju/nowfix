export function logger({ getState } = {}) {
  return function middleLogger(next = () => {}) {
    return function innerlogger(action) {
      if (typeof getState !== "function" || !action?.type) return next(action);
      console.group(`ACTION: ${action?.type} - ${new Date().toString()}`);
      console.log("%cprevState: ", "color: #ededff;", getState());
      console.log("%caction: ", "color: #337eff;", action);
      const result = next(action);
      console.log("%cnextState: ", "color: #19FF66;", getState());
      console.groupEnd();
      return result;
    };
  };
}

export function thunk(store = {}) {
  return function middleThunk(next = () => {}) {
    return function innerThunk(action) {
      if (typeof action === "function") {
        return action(store.dispatch, store.getState);
      }
      return next(action);
    };
  };
}
