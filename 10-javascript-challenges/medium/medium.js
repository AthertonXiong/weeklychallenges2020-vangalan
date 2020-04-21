// Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Input: [1, 4, 7] Output: 4
// Input: [10, 5] Output: 7.5
// Input: [1.5, 3, 2.5, 1] Output: 2


const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// a is our accumulator. It will accumulate our sum as our function works. b is the current value being processed.

console.log(arrAvg([1.5, 3, 2.5, 1]));


// WRITTEN THE SAME AS. *BELOW*

// arrAvg = function(arr){
//     return arr.reduce(function(a,b){
//       return a + b
//     }, 0) / arr.length;
//   }

//arrAvg([1, 4, 7]); -> console.log this and your output will be the average of the array which is 4.





