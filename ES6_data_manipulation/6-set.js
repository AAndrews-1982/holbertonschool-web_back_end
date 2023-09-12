export default function setFromArray(array) {
  const uniqueArray = [...new Set(array)];

  // Check if the array contains only booleans
  const isBooleanArray = uniqueArray.every(item => typeof item === 'boolean');

  // Check if the array contains only strings
  const isStringArray = uniqueArray.every(item => typeof item === 'string');

  // Check if the array contains only integers
  const isIntArray = uniqueArray.every(item => Number.isInteger(item));

  // Check if the array contains objects based on properties
  const objToCheck = { id: 2, name: 'Jane' };
  const isObjectInArray = uniqueArray.some(obj =>
    obj.id === objToCheck.id && obj.name === objToCheck.name
  );

  return {
    set: new Set(uniqueArray),
    isBooleanArray,
    isStringArray,
    isIntArray,
    isObjectInArray,
  };
}

// Example usage:
const result = setFromArray([12, 32, 15, 78, 98, 15]);
console.log('Set:', [...result.set]);
console.log('Contains only booleans:', result.isBooleanArray);
console.log('Contains only strings:', result.isStringArray);
console.log('Contains only integers:', result.isIntArray);
console.log('Contains object:', result.isObjectInArray);
