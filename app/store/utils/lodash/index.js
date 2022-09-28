export const isFunction = (...functions) => {
  for (let index = 0, end = functions.length; index < end; index++) {
    if (typeof functions[index] !== "function") return false;
  }
  return true;
};
