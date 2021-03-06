//check if a string is a palindrome
//similar to Reverse, treating the helper as a while loop and pointers as params
function isPalindrome(str) {
  return compare(str, 0, str.length - 1);
}

function compare(str, idx1, idx2) {
  if (idx1 === idx2) {
    return true;
  }
  if (str[idx1] !== str[idx2]) {
    return false;
  }
  return compare(str, idx1 + 1, idx2 - 1);
}

//shortens the str only instead, and always check the first and last idx
function isPalindrome(str) {
  return compare(str);
}

function compare(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return compare(str.slice(1, str.length - 1));
}

//time - O(N) -> or N/2, going through half
//space - O(N) -> second solution might take more while sitll being O(N) due to string slicing
