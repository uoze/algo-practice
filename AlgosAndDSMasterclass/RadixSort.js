/*
retrieves number in the desired place (but in reverse order)
if there is no number in that place, return a 0
*/
function getDigit(num, place) {
  /*
  below does not work with negatives as the hyphen is stringified, and type conversion might do more work than necessary in the background

  let stringedNum = String(num);
  let digit = stringedNum[stringedNum.length - place - 1];
  return digit ? Number(digit) : 0;

  ----------

  Math.abs negates negatives
  Math.pow simply uses base 10 (could technically be different, but we're sticking with 10) and the given power
  Math.floor removes the decimals, leaving the desired place now at the ones place
  If the place is too high for the number, all of them become decimals, and thus returns 0 anyway for extra digits
  Modulo 10 gives that ones place as the remainder, and thus the return
  */

  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// console.log(getDigit(12, 1));

/*
  count how many digits there are
  the max number of digits is the max amount of times the loop will run to sort
*/

function digitCount(num) {
  if (num === 0) return 1;

  /*
  Math.log10 practically shows how many 0s there are in the given number
  Math.floor will just drop the decimals
  Adding one to complete the '10s' because log 10 only did the '0s'
  */

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/*
  return the count that has the most digits in an array
*/

function mostDigits(nums) {
  let maxCount = 0;

  for (const num of nums) {
    let curCount = digitCount(num);
    if (maxCount < curCount) {
      maxCount = curCount;
    }
    /*
    also:
    maxCount = Math.max(maxCount, curCount)
    */
  }
  return maxCount;
}

function radixSort(arr) {
  const runtime = mostDigits(arr); //4

  for (let i = 0; i < runtime; i++) {
    //make new buckets each time
    //could also be done with Array.from({length: 10}, () => [])
    //Array(10).fill([]) does not work, makes all []s the SAME REFERENCE
    const bucket = [];
    for (let i = 0; i < 10; i++) {
      bucket.push([]);
    }

    //separate into the buckets based on digit
    for (const num of arr) {
      bucket[getDigit(num, i)].push(num);
    }

    let idx = 0;

    //dump the buckets into the og arr
    for (const queue of bucket) {
      for (const num of queue) {
        arr[idx] = num;
        idx++;
      }
    }
  }

  return arr;
}
// radixSort([4, 55, 22, 13, 6, 345, 3, 3778]);
console.log(radixSort([4, 55, 22, 13, 6, 345, 3, 3778]));
