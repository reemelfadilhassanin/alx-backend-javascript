// 5-typed_arrays.js
export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  // Create a DataView for the ArrayBuffer
  const dataView = new DataView(buffer);

  // Set the Int8 value at specified position
  dataView.setInt8(position, value);

  return dataView;
}
