/**
* Is Even
*
* Determine if given number is even
* without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
* nor a conditional operator.
*
* Examples:
* isEven(4) === true
* isEven(3) === false
*/

function isEven(n) {
  //https://www.w3schools.com/js/js_bitwise.asp

  if(n & 1) {
    //& trasforma i numeri in 32bit quindi in combinazioni di 0 e 1
    // i due numeri insieme se danno 1 sono dispari, altrimenti pari
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
}

module.exports = isEven;
