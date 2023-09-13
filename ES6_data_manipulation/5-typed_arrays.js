export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

function setInt8Value(pos, val) {
    view.setInt8(pos, val);
  }

  try {
    setInt8Value(position, value);
  } catch (error) {
    throw new Error('Value is not a valid Int8');
  }

  return view.buffer;
}
