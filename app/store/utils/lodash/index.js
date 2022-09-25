export const once = (func = () => {}) => {
  let hasBeenCalled = false;
  let result;
  return (...args) => {
    if (!hasBeenCalled) result = func(...args);
    return result;
  };
};
