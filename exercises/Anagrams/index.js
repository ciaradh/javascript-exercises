/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    var strA = stringA.replace(/[^A-z0-9_]+/g, '');
    var strB = stringB.replace(/[^A-z0-9_]+/g, '');
    
    var sortedStringA=strA.toLowerCase().split("").sort().join();
    var sortedStringB=strB.toLowerCase().split("").sort().join();
  
    //console.log(strA);
    //console.log(sortedStringA);
    //console.log(sortedStringB);
    //console.log(strB);
  
    if (sortedStringA.length != sortedStringB.length) {
      return false;
    } else if (sortedStringA.length == sortedStringB.length && sortedStringA===sortedStringB) {
      return true;
    }
}

module.exports = anagrams;
