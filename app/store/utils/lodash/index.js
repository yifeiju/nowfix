export function isFunction(...functions) {
  return !functions.find((func) => typeof func !== "function");
}

export function isObject(...objects) {
  return !objects.find((obj) => Array.isArray(obj) || typeof obj !== "object");
}
