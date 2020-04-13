// VERY HARD: You are given coins of different denominations and a total amount of money ​amount​. 
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint: pesudo code this problem. 
// Focus on breaking the problem down into steps Use functions, arrays and logical operators.
// Do not have anyone give you the answer or solve this problem for you.


var coins = [1, 2, 4, 5, 8] 
var  amount = 20;

function veryHard(coins, amount) {
    coins.sort((a, b) => a - b).reverse(); //sorting the coins, function(=>) in reverse. a(coins) b(amount).
    var count = 0;
    for (var i = 0; i < coins.length; i++) { //loop will continue backward until the amount is 0.
        while (amount >= coins[i]) { // if amount is greater than or equal to coins. 
            amount -= coins[i];
            count++;
        }
    }
    if (amount !== 0){ // amount doesNot(!) equal 0 return -1. 
        return -1;
    }


    return count;
}

console.log(veryHard(coins, amount));















