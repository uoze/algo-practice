// A valid encoding of an array of words is any reference string s and array of indices indices such that:

// words.length == indices.length
// The reference string s ends with the '#' character.
// For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
// Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

// Example 1:

// Input: words = ["time", "me", "bell"]
// Output: 10
// Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
// words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
// words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
// words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"
// Example 2:

// Input: words = ["t"]
// Output: 2
// Explanation: A valid encoding would be s = "t#" and indices = [0].

var minimumLengthEncoding = function (words) {
  //put every word in a Set
  //go through every word in the words arr
  //for every word, and every letter, delete a sliced version of it in the Set
  //at the end, join the Set and get its length

  const s = new Set(words);

  s.forEach((word) => {
    for (let i = 1; i < word.length; i++) {
      s.delete(word.slice(i));
    }
  });

  return Array.from(s).join("#").length + 1;
};

//time - O(W) - > W being every single letter
//space - O(N)
