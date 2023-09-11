function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return view.buffer;
}

// Example usage:
const length = 5;
const position = 2;
const value = 42;

try {
  const newArrayBuffer = createInt8TypedArray(length, position, value);
  console.log(newArrayBuffer);
} catch (error) {
  console.error(error.message);
}
