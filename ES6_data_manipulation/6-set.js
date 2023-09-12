function setFromArray(array) {
  return new Set(array);
}

// Test if the function returns a Set
const testSet = setFromArray([1, 2, 3]);
console.log(testSet instanceof Set); // Should print true

// Test correct output when the array contains booleans
const booleanArray = [true, false, true, true];
const booleanSet = setFromArray(booleanArray);
console.log([...booleanSet]); // Should print [true, false]

// Test correct output when the array contains strings
const stringArray = ['apple', 'banana', 'cherry', 'apple'];
const stringSet = setFromArray(stringArray);
console.log([...stringSet]); // Should print ['apple', 'banana', 'cherry']

// Test if a Set contains certain integers
const intArray = [1, 2, 3, 4, 5];
const intSet = setFromArray(intArray);
console.log(intSet.has(3)); // Should print true
console.log(intSet.has(6)); // Should print false

// Test if objects are in the Set
const obj1 = { id: 1, name: 'John' };
const obj2 = { id: 2, name: 'Jane' };
const objArray = [obj1, obj2];
const objSet = setFromArray(objArray);
console.log(objSet.has(obj1)); // Should print true
console.log(objSet.has({ id: 2, name: 'Jane' })); // Should print false
