// computer nth Fibonacci
let fib1 = (n) => {
  // base case
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib1(n-1) + fib1(n-2);
}

let memoize = (fn) => {
  let cache = {};
  return function (n) {
    if (!cache[n]) {
      cache[n] = fn(n);
    }
    // console.log(cache)
    return cache[n]
  }
}

fib1 = memoize(fib1);

let fib2 = (n) => {
  let backOne = 1;
  let current = 1;
  for (let i = 1; i < n - 1; i++) {
    let temp = current;
    current = current + backOne;
    backOne = temp;
  }
  return current;
}

let n = 4000;
console.log(fib1(n));
console.log(fib2(n));

