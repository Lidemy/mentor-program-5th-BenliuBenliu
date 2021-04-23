function printStars(n) {
  if (n <= 30 && n >= 1) {
    for (var i = 1; i <= n; i++) {
      console.log("*");
    }
  } else console.log("out of range number");
}

printStars(10);
