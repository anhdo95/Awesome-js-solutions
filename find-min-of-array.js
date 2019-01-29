/**
 * JavaScriptCore has hard-coded argument limit of 65536, because the limit is unspecified.
 * Some engines will throw an exception, so we should apply the function to chunks of the array at a time.
 * @param {array} arr 
 */
function findMin(arr) {
  let min = Infinity
  const QUANTUM = 32768

  for (let i = 0, len = arr.length; i < len; i += QUANTUM) {
    const submin = Math.min.apply(null, 
                                  arr.slice(i, Math.min(len, i + QUANTUM)))
    min = Math.min(submin, min)                              
  }

  return min
}

const min = findMin([1, 8, 24, 4, 9])

console.log(min) // 1