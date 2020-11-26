/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if ( n > 1 ) {
    let i = n - 1;
    while(i > 1) {
      n = n * i;
      i--;
    }
  } else n = 1;
  return n;
}
