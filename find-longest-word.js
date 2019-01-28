// function findLongestWordLength(sentence) {
//   return sentence
//     .split(' ')
//     .reduce((previous, current) => Math.max(previous, current.length), 0)
// }

/**
 * Using recursiveness
 * @param {string} sentence 
 */
function findLongestWordLength(sentence) {
  const strings = sentence.split(' ')

  if (strings.length === 1) 
    return strings[0].length

  if (strings[0].length < strings[1].length)
    return findLongestWordLength(strings
      .slice(1, strings.length)
      .join(' ')
    )

  strings.splice(1, 1)
  return findLongestWordLength(strings.join(' '))
}

const result = findLongestWordLength('check for the longest word by comparing the current word to the previous one')

console.log(result) // 9