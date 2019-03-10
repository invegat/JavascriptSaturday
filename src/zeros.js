/* Instructions
Write a program that will calculate the number of trailing zeros
in a factorial of a given number.
*/
function range(lowEnd, highEnd) {
  var arr = [],
    c = highEnd - lowEnd + 1;
  while (c--) {
    arr[c] = highEnd--
  }
  return arr;
}

function zeros(n) {
  return range(1, 20).reduce((sum, i) => sum + Math.floor(n / Math.pow(5, i)), 0)
}
export default zeros