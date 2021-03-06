//reverse a string
//essentially refactoring a while loop
//pointers were added as the parameters in the helper function
function reverse(str) {
  let strArr = str.split("");
  return switcher(strArr, 0, str.length - 1).join("");
}

function switcher(str, idx1, idx2) {
  if (idx1 === idx2) {
    return str;
  }
  let temp;
  temp = str[idx1];
  str[idx1] = str[idx2];
  str[idx2] = temp;
  return switcher(str, idx1 + 1, idx2 - 1);
}

//time - O(N) -> from N/2 because we're always going through half of the str length
//space - O(N) -> can't reassign through a string, read-only
