export function _2DArray(oneDArray: any[], numColumns :number) {
  return Array.from(
    { length: Math.ceil(oneDArray.length / numColumns) },
    (v, i) => oneDArray.slice(i * numColumns, i * numColumns + numColumns)
  );
}
