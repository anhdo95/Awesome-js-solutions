function findLongestWordLength(sentence) {
  return sentence
    .split(' ')
    .reduce((previous, current) => Math.max(previous, current.length), 0)
}

const result = findLongestWordLength('check for the longest word by comparing the current word to the previous one');

console.log(result); // 9