function palindrome(str) {
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (/\W|_/.test(str[left])) {
      left++
      continue
    }

    if (/\W|_/.test(str[right])) {
      right--
      continue
    }

    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false

    left++; right--;
  }
  
  return true
}

palindrome("anhDo_!OdhnA#%");
