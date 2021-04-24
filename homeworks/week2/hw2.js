function capitalize(str) {
  var arr = str.split("");
  if (arr[0].charCodeAt(0) <= 122 || arr[0].charCodeAt(0) >= 97) {
    arr[0] = arr[0].toUpperCase();
  } 
    return arr.join("");
}
console.log(capitalize("hello"));
