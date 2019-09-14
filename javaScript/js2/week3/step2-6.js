const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  return arr.reduce((a, item) => a.concat(item), []);
}
function flattenArray3d(arr) {
  return arr.reduce(function(flatArray, item) {
    return flatArray.concat(Array.isArray(item) ? flattenArray3d(item) : item);
  }, []);
}
console.log(flattenArray2d(arr2d));
console.log(flattenArray3d(arr3d));