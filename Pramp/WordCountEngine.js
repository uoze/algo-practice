// Word Count Engine
// Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

// The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

// Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

// Examples:

// input:  document = "Practice makes perfect. you'll only
//                     get Perfect by practice. just practice!"

// output: [ ["practice", "3"], ["perfect", "2"],
//           ["makes", "1"], ["youll", "1"], ["only", "1"],
//           ["get", "1"], ["by", "1"], ["just", "1"] ]

// Important: please convert the occurrence integers in the output list to strings (e.g. "3" instead of 3). We ask this because in compiled languages such as C#, Java, C++, C etc., it’s not straightforward to create mixed-type arrays (as it is, for instance, in scripted languages like JavaScript, Python, Ruby etc.). The expected output will simply be an array of string arrays.

// Constraints:

// [time limit] 5000ms
// [input] string document
// [output] array.array.string

function wordCountEngine(document) {
  //lower case the whole string, split them at empty spaces
  const wordMap = new Map();
  const wordList = document.toLowerCase().split(" ");
  let largestCount = 0;

  for (const word of wordList) {
    let unpuncWord = "";

    //unpunctuate the words, could be quicker (though this might still  be O(N) if the letters are the N
    //if the letters are the N, then a nested loop doesn't mean anything for adding time complexity
    for (const letter of word) {
      if (letter >= "a" && letter <= "z") {
        unpuncWord += letter;
      }
    }

    //this is for the edge case where there is a white space at the end of a sentence or a random standalone punctuation mark
    if (!unpuncWord.length) {
      continue;
    }

    let count = 0;
    //checks if the word is a repeat, then adds to the count in the wordMap outside the loop
    //using a Map keeps the order in which the words are put in as opposed to an object, which is only usually ordered
    if (wordMap.has(unpuncWord)) {
      count = wordMap.get(unpuncWord);
      count++;
    } else {
      count = 1;
    }

    if (count > largestCount) {
      largestCount = count;
    }
    //make sure to use Map's methods properly to actually use the data structure
    wordMap.set(unpuncWord, String(count));
  }

  //sorting
  //largestCount kept track of the word that appears the most times
  const counterList = new Array(largestCount + 1).fill(null);

  for (const word of wordMap.keys()) {
    //gets the count for each word
    const counter = wordMap.get(word);
    let wordCounterList = counterList[counter];

    //making a hash map so all the words in wordMap are pushed to an index corresponding to their count in a new array counterList
    //as it is now, wordMap is only in order of input, not occurence
    //using a hash map puts them in reverse order of occurrence
    //the only time wordCounterList is not null is when multiple words have same occurence (i.e. 1)
    //they would all be pushed into the same array at index 1, but still in order of input
    if (wordCounterList == null) {
      wordCounterList = [];
    }

    wordCounterList.push(word);
    console.log(counter);
    counterList[counter] = wordCounterList;
  }
  console.log("COUNTERLIST", counterList);
  //reversing the counterList array, and skipping the null values
  //nulls can exist if not every occurrence count happens or 0
  //i.e. [null, park, tree, null, null, flower ] -> [flower, 5], [tree, 2], [park, 1]
  const result = [];
  for (let i = counterList.length - 1; i > 0; i--) {
    const wordCounterList = counterList[i];
    if (wordCounterList == null) {
      continue;
    }

    //answer wants the occurrence as a string
    const stringifiedCount = String(i);
    //wordCounterList again is an array of potentially multiple words due to grouping by occurrence
    for (const word of wordCounterList) {
      result.push([word, stringifiedCount]);
    }
  }

  return result;
}

//time - probably still O(N) since most of the loops are not nested, and the nested ones don't do too much?
//space -

// Time Complexity: let N be the number of words in document and M the number of unique words in it (M ≤ N). Iterating over all words, cleaning them and inserting them into a map takes O(N). The sorting step takes O(M) since notice that in the second loop, every word gets visited only once. The total time complexity is therefore O(N + M), which is O(N).

// Space Complexity: wordMap takes O(M) space and the array of strings array, counterList, takes another O(M). So, in total, the space complexity is O(M).

// Note: the reason we’re analyzing the problem complexity in terms of the number of words, and not number of characters is because the average length of an english word is ~5, so from a practical perspective this could be regarded as a constant and therefore can be ignored (i.e. O(5N) = O(N))
