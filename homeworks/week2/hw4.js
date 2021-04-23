function printFactor(n) {
  if (n < 0 || n % 1 !== 0) {
    console.log("out of number range");
  } else {
    for (var i = 1; i <= n; i++) {
      if (n % i === 0) console.log(i);
    }
  }
}

printFactor(10);
