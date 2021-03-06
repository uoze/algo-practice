// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

var averageOfLevels = function (root) {
  //queue
  //everything in queue will be the nodes of each level
  //if null, don't add to queue
  //calculate the average within the loops
  //push the avg into a results array

  const queue = [root];
  const results = [];

  while (queue.length) {
    //set the queue length at the start to a variable so it remains while the dynamic queue length changes within the loop
    const curLength = queue.length;
    let avg = 0;
    //again, use the set variable length as the actual queue length will change
    for (let i = 0; i < curLength; i++) {
      //i is not used for anything but moving through the queue, you're not actually moving through the queue, you're essentially staying at queue[0] in a way
      const node = queue.shift();

      avg += node.val;

      //this and the above shift change the queue length
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    results.push(avg / curLength);
  }

  return results;
};

//time - O(N) - despite nested loops, only going through every node once
//space - O(m) - at most the queue will be the highest number of nodes on a level
