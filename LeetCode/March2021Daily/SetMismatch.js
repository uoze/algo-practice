// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

var findErrorNums = function (nums) {
  //if sorted
  //go through the numbers
  //for each number, check the value and the index
  //if the value is not equal to index+1, then we found the error
  //return [value, index+1]

  //contains all nums, but not necesarily in order
  //make an object that holds every number from 1 to N
  //go through the inputted array, add it to the object with the values being counts
  //go through the object for counts that have 2 and 0, and get their keys

  //hashmap?

  const map = {};
  let curNum, missingNum;
  for (let i = 1; i <= nums.length; i++) {
    map[i] = 0;
  }

  for (let j = 0; j < nums.length; j++) {
    const num = nums[j];
    map[num]++;
  }

  for (const stuff in map) {
    if (!map[stuff]) {
      missingNum = Number(stuff);
      if (curNum) break;
    }
    if (map[stuff] === 2) {
      curNum = Number(stuff);
      if (missingNum) break;
    }
  }

  return [curNum, missingNum];
};

//time - O(N)
//space - O(N)
