/**
 * Array Chunk
 *
 * For given array and chunk size, divide the array into many subarrays
 * where each subarray is of length chunk size.
 *
 * Examples:
 * chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]]
 */

function chunk(array, size) {
    var i;
    //dichiaro qui o me la riscrive ogni volta se la dichiaro nel loop
    var newArray = [];
    for(i=0; i<array.length; i+=size) {
      //i+size altrimenti ad un certo punto i>size e non esce nulla
      var chunk = array.slice(i,i+size);
      newArray.push(chunk);
    }
    return newArray;
}

module.exports = chunk;
