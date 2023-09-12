function setFromArray(array) {
  return new Set(array);
}

// Example usage:
const myArray = [1, 2, 2, 3, 4, 4, 5];
const mySet = setFromArray(myArray);
console.log(mySet); // This will print a Set containing unique elements from the array
