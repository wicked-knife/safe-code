function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

var start = Date.now();
print("[INFO] fib: " + fib(30));
print("[INFO] time consuming: " + (Date.now() - start) + "ms");