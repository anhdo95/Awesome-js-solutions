/**
 * Flatten a nested array. Which has varying levels of nesting
 * @param {array} array 
 */
function steamrollArray(array) {
  const flattenArray = []

  const flatten = (arg) => !Array.isArray(arg) 
    ? flattenArray.push(arg)
    : arg.forEach(flatten)

  array.forEach(flatten)

  return flattenArray
}

steamrollArray([0, [9], [3, 4, [[10]]]])