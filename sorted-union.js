/**
 * Combines arrays each other and returns unique value array
 * @param {array} original 
 * @param  {...array} arrays 
 */
function uniteUnique(original, ...arrays) {
  if (arrays.length === 1) {
    const uniqueItems = arrays[0].filter(item => !original.includes(item))

    return original.concat(uniqueItems)
  }

  return arrays.reduce((previous, array) => uniteUnique(previous, array), original)
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);