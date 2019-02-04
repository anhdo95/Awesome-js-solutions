/**
 * Flatten a nested array. Which has varying levels of nesting
 * (BASIC SOLUTION)
 * @param {array} array 
 */
// function steamrollArray(array) {
//   const flattenArray = []

//   const flatten = (arg) => !Array.isArray(arg) 
//     ? flattenArray.push(arg)
//     : arg.forEach(flatten)

//   array.forEach(flatten)

//   return flattenArray
// }

/**
 * Flatten a nested array. Which has varying levels of nesting
 * (INTERMEDIATE SOLUTION)
 * @param {array} array 
 */
function steamrollArray(array) {
  const flatten = [].concat(...array)
  return flatten.some(Array.isArray) ? steamrollArray(flatten) : flatten
}

steamrollArray([1, [9], [3, 4, [[10]]]])
