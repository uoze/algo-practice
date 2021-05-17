function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  //compare pivot to current value looked at
  //slowly moves the values larger than the pivot to the right, then swaps the pivot with the value just lesser than it at the end of the first loop
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      //swap arr[i] and arr[swapIdx]
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }
  //swaps the pivot with the value just lesser than it
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  //conditional base case for when it reaches one value (can't check arr.length because arr never changes as we're doing it in-place)
  if (left < right) {
    //find the initial returned pivotIdx
    const pivotIdx = pivot(arr, left, right);

    //find the left and right sides of the initial pivotIdx
    const pivotLeft = quickSort(arr, left, pivotIdx - 1);
    const pivotRight = quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([8, 3, 2, 4, 5, 1, 7, 6]));

//Time - O(N^2) worst case if we are picking the lowest or highest value every time (i.e. using the first index like we do here, but the array is already sorted)
//we go through the array in its entirety always at least once, but if it's sorted, we pivot at the end points over and over again, so we go through almost the entire array every single recursion
//AVERGAE is O(nlog(n)) as you're cutting the search by half each time

//Space - O(N) in-place
