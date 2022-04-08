/**
 * @param {number} n
 * @return {number}
 */
const n1 = 2;
const n2 = 5;
var climbStairs = function(n) {
    let number = 1;

    for (let i = 2; i <= n; i++) {
        number += climbStairs(n - i);
    }

    return number;
};

// var stairsLength = function(n) {
//     return climbStairs(n+1)
// };


console.log(climbStairs(n1));
console.log(climbStairs(n2));
