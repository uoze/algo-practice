// Prompt

// You are curious about what the most popular moment for a particular Slack channel was. Slack only tells you how many members the channel currently has, but imagine you have access to all of those messages that say "Rita and 4 others left #cool-channel" or "Hassan joined #cool-channel."

// The data you have to work with is an array of message objects.

// Each message has three pieces of data:

// The timestamp (integer).
// The number of users involved (integer).
// The action: either 'joined' or 'left'

// The array is sorted chronologically according to the messages' timestamp.

// Write a function that takes such an array and returns the timestamp corresponding to when the channel was most popular.

/*

1. Loop through the array
2. Keep track of the current number of total members (curMembers)
3. For each object, associate 'left' with minus, 'joined' with add
4. Change the curMembers based on the object's status and number
5. With that final curMembers (for that iteration of the loop), make an object with the 'timestamp' as the key, and the curMembers as the value
6. At the end, loop through the new object and look for the highest members

vvv NVM, does not account for same timestamps vvv

OR

6. At the same time, keep track of the highestMembers value and its timestamp, then return the timestamp in the end instead of looping through the second object

*/

findMostPopularTime([
  {
    timestamp: 1,
    userCount: 8,
    action: "joined",
  },
  {
    timestamp: 1,
    userCount: 5,
    action: "left",
  },
  {
    timestamp: 2,
    userCount: 9,
    action: "joined",
  },
  {
    timestamp: 2,
    userCount: 10,
    action: "left",
  },
]);
// Expected Output: 1

findMostPopularTime([
  {
    timestamp: 1,
    userCount: 8,
    action: "joined",
  },
  {
    timestamp: 2,
    userCount: 5,
    action: "left",
  },
  {
    timestamp: 3,
    userCount: 6,
    action: "joined",
  },
]);
// Expected Output: 3

function findMostPopularTime(arr) {
  let curMembers = 0;
  const result = {};

  for (const obj of arr) {
    obj.action === "joined"
      ? (curMembers += obj.userCount)
      : (curMembers -= obj.userCount);

    result[obj.timestamp] = curMembers;
  }

  //going over the result obj

  let highestMembers = 0;
  let highestTimestamp;

  for (const timestamp in result) {
    if (highestMembers < result[timestamp]) {
      highestMembers = result[timestamp];
      highestTimestamp = timestamp;
    }
  }

  console.log(highestTimestamp);
  return highestTimestamp;
}
