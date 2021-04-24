function join(arr, concatStr) {
  var newStr = "";
  for (var i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      newStr = newStr + arr[i] + concatStr;
    } else {
      newStr = newStr + arr[i];
    }
  }
  return newStr;
}

function repeat(str, times) {
  var newStr = "";
  for (var i = 1; i <= times; i++) {
    newStr = str + newStr;
  }
  return newStr;
}

console.log(join(["a"], "!"));
console.log(repeat("a", 5));
