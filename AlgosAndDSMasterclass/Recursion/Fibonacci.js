const fibonacci = (num) => {
  if (num === 1) return 1;
  if (num <= 0) return 0;
  //or num<=2 return 1
  return fibonacci(num - 1) + fibonacci(num - 2);
};

const fibonacci2 = (num, memo = []) => {
  //if this exists in the memo, return it immediately
  if (memo[num] !== undefined) return memo[num];

  //else, find the value and add it to memo
  if (num <= 2) return 1;

  const res = fibonacci2(num - 1, memo) + fibonacci2(num - 2, memo);
  memo[num] = res;
  return res;
};

console.log(fibonacci2(50));

//5 -> 5
//3 + 2
//fib(4) -> 2 + 1
//fib(2) -> fib(1) + fib(0) = 1
