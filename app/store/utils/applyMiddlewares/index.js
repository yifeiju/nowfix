export const defaultMiddleWare = (store = {}) => {
  return (next = () => {}) => {
    return (action) => {
      const result = next(action);
      return result;
    };
  };
};

export const applyMiddleware = (...middlewares) => {
  return (store) => {
    return (mainNext) => {
      let newNext = mainNext;
      const nextMiddlewares = middlewares.map(
        (middleware = defaultMiddleWare) => {
          newNext = middleware(store)(newNext);
          return newNext;
        }
      );
      return (action) => {
        const result = nextMiddlewares.reduce((acc, next) => next(action));
        return result;
      };
    };
  };
};
