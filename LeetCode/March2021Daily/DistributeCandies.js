// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Example 1:

// Input: candyType = [1,1,2,2,3,3]
// Output: 3
// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
// Example 2:

// Input: candyType = [1,1,2,3]
// Output: 2
// Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
// Example 3:

// Input: candyType = [6,6,6,6]
// Output: 1
// Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

// Constraints:

// n == candyType.length
// 2 <= n <= 104
// n is even.
// -105 <= candyType[i] <= 105

/*
 * @param {number[]} candyType
 * @return {number}
 */

var distributeCandies = function (candyType) {
  //the output is either n/2 or number of candy types, whichever is lower
  //to find number of candy types, can put it into a Set
  //without Set, loop through every candyType, and put unique types in an object
  //or reducer?

  const maxCandies = candyType.length / 2;
  const allCandyTypes = new Set(candyType);

  //or Math.min(maxCandies, allCandyTypes.size)
  return maxCandies > allCandyTypes.size ? allCandyTypes.size : maxCandies;
};

// typescript
// function distributeCandies(candyType: number[]): number {
//   const maxCandies: number = candyType.length/2;
//   const allCandyTypes: Set<number> = new Set(candyType)

//   return maxCandies > allCandyTypes.size ? allCandyTypes.size : maxCandies
// };

//time - o(N) finding all the unique types involves going through every single input
//space - o(N) could potentially have the input already be all unique
