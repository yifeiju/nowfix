export function isFunction(...functions) {
  return !functions.find((func) => typeof func !== "function");
}

export function isObject(...objects) {
  return !objects.find((obj) => Array.isArray(obj) || typeof obj !== "object");
}

export function once(func) {
  if (!isFunction(func)) {
    throw new Error(`once ERR: the argument passed has to be a function`);
  }
  let hasBeenCalled = false;
  let result;
  return function (...args) {
    if (!hasBeenCalled) result = func(...args);
    return result;
  };
}
