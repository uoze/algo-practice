//FREQUENCY COUNTER------------------------------------
//check if the second array has the square of the first array's values with the same amount of times
const same = (arr1, arr2) => {
  //base check
  if (arr1.length !== arr2.length) return false;

  //make an obj that holds the squares of the values in arr1 as the key, and the value as the counter
  const checker = {};

  for (const num of arr1) {
    const squared = num ** 2;
    if (!checker[squared]) {
      checker[squared] = 1;
    } else {
      checker[squared]++;
    }
  }

  //as you go over arr2, check and decrement from the obj
  for (const squared of arr2) {
    if (checker[squared]) {
      checker[squared]--;
    } else {
      return false;
    }
  }

  return true;
};

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 1, 4]));

//anagram
//check if second string is anagram of the first string
const validAnagram = (str1, str2) => {
  //str2 has to have same amount of characters as first one
  if (str1.length !== str2.length) return false;

  //make an obj of str1's chars and # of chars
  const checker = {};
  for (const char of str1) {
    //another way of adding to the obj, not that readable though
    checker[char] = (checker[char] || 0) + 1;
  }

  for (const char of str2) {
    if (checker[char]) {
      checker[char]--;
    } else {
      return false;
    }
  }
  return true;
};

// console.log(validAnagram("", ""));

//MULTIPLE POINTERS --------------
//return FIRST pair of numbers that add up to zero from a SORTED array
const sumZero = (sortedArr) => {
  let pointerA = 0;
  let pointerB = sortedArr.length - 1;

  while (pointerA < pointerB) {
    if (sortedArr[pointerA] + sortedArr[pointerB] === 0) {
      return [sortedArr[pointerA], sortedArr[pointerB]];
    }

    if (sortedArr[pointerA] + sortedArr[pointerB] < 0) {
      pointerA++;
    } else {
      pointerB--;
    }

    //edge case where all nums are positive or all negative, never reach zero but will still go through all N values
    if (
      (sortedArr[pointerA] > 0 && sortedArr[pointerB] > 0) ||
      (sortedArr[pointerA] < 0 && sortedArr[pointerB] < 0)
    )
      return undefined;
  }
  return undefined;
};

// console.log(sumZero([-16, 1, 2, 3, 5, 5, 7, 7, 10]));

//SLIDING WINDOW, NAIVE-ish WAY, O(N^2) -------------
const maxSubarraySum = (arr, num) => {
  //edge case dealing with empty arrays and nums bigger than array
  if (num > arr.length) return null;

  //-Infinity to deal with negative numbers
  let maxSum = -Infinity;

  for (let i = 0; i <= arr.length - num; i++) {
    let curSum = 0;

    for (let j = i; j < i + num; j++) {
      curSum += arr[j];
    }

    if (maxSum < curSum) maxSum = curSum;
  }
  return maxSum;
};

// console.log(maxSubarraySum([], 2));

//SLIDING WINDOW, PRO O(N) -----------------
const maxSubarraySumPro = (arr, num) => {
  let maxSum, tempSum;

  //add the first num consecutive values to maxSum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  //set the tempSum to maxSum to alter individually within the loop
  tempSum = maxSum;

  //start at num, go to the end of arr, add the next value from the tempSum, subtract the previous value added to the tempSum
  for (let i = num; i < arr.length; i++) {
    //adding next value
    tempSum += arr[i];
    //subtracting 'head' of tempSum
    tempSum -= arr[i - num];

    //decide which one's greater
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

//DIVIDE AND CONQUER ------------------------
//binary search, return index of num in arr, or -1
const binarySearch = (arr, num) => {
  //iteratively
  //keep track of middle index
  //check if middle index's value is greater than or less than num
  //find the middle of the next grouping
  //start and end idx
  //top half = change start to current midIdx, end to arr.length

  let mid = Math.floor(arr.length / 2);
  let start = 0;
  let end = arr.length;

  while (start <= mid) {
    console.log(start, mid, end);
    if (arr[mid] === num) return mid;

    if (arr[mid] > num) {
      end = mid;
    } else {
      start = mid;
    }

    mid = Math.floor((start + end) / 2);
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
