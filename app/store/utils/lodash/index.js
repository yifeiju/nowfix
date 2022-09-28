export const isFunction = (...functions) => {
  for (let index = 0, end = functions.length; index < end; index++) {
    if (typeof functions[index] !== "function") return false;
  }
  return true;
};

export const isObject = (...objects) => {
  for (let index = 0, end = objects.length; index < end; index++) {
    const obj = objects[index];
    if (Array.isArray(obj) || typeof obj !== "object") return false;
  }
  return true;
};
