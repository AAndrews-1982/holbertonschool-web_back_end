export default function setFromArray(array) {
  return new Set(array);
}
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));
