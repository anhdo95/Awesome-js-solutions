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
// function steamrollArray(array) {
//   const flatten = [].concat(...array)
//   return flatten.some(Array.isArray) ? steamrollArray(flatten) : flatten
// }

/**
 * Flatten a nested array. Which has varying levels of nesting
 * (ADVANCED SOLUTION)
 * @param {array} array 
 */
function steamrollArray(array) {
  // double comma if there was '[]' and ''
  return array.toString().replace(/,,/g, ',').split(',').map(getActualValue)
}

function getActualValue(value) {
  console.log(value);
  if (value === '[object Object]') return {}
  if (isNaN(value) || value === '') return value
  return +value
}

steamrollArray([1, '', [{}, []], {}, '', [3, [[4]]]]);
