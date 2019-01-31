// function chunkArrayInGroups(arr, size) {
//   var result = [];
//   while (arr.length) {
//     result.push(arr.splice(0, size));
//   }
//   return result;
// }

/**
 * Chunks an array into groups by the provided number that using recursiveness
 * @param {array} arr 
 * @param {number} size 
 */
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) return [arr]

  return [arr.splice(0, size)]
          .concat(chunkArrayInGroups(arr, size))
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
// [ [0, 1, 2], [ 3, 4, 5 ], [ 6 ] ]