export function makeArray(length, value) {
  return Array.apply(null, Array(length)).map(Number.prototype.valueOf, value);
};
