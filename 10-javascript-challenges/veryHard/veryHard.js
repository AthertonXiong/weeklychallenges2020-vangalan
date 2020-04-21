// Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string. 
// Output the first character in a string that is unique.
// Input: “the quick brown fox jumps over the calm kitten quietly” Output: “b” 
// Input: “this hat is the greatest!” Output: “g”
// Input: “what a wonderful day it has been!” Output: “o”


function noRepeat(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;

    for (var x = 0; x < arra1.length; x++) {
        ctr = 0;

        for (var y = 0; y < arra1.length; y++) {
            if (arra1[x] === arra1[y]) {
                ctr += 1;
            }
        }

        if (ctr < 2) {
            result = arra1[x];
            break;
        }
    }
    return result;
}
console.log(noRepeat('the quick brown fox jumps over the calm kitten quietly'));

  

















