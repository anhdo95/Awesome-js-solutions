/**
 * Combines arrays each other and returns unique value array
 * @param {array} original 
 * @param  {...array} arrays 
 */
// function uniteUnique(original, ...arrays) {
//   if (arrays.length === 1) {
//     const uniqueItems = arrays[0].filter(item => !original.includes(item))

//     return original.concat(uniqueItems)
//   }

//   return arrays.reduce((previous, array) => uniteUnique(previous, array), original)
// }

/**
 * Use a Set object to create an unique value array
 * @param  {...array} arrays 
 */
function uniteUnique(...arrays) {
  const flattenArray = [].concat(...arrays)

  // The Set object lets you store unique values of any type,
  // whether primitive values or object references.
  return [ ...new Set(flattenArray) ]
}

uniteUnique([1, 3, 2], [10, 2, 1, 4], [2, 11, 3])
