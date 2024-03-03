/**
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example


The maximum height candles are  units high. There are  of them, so return .

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest
Input Format

The first line contains a single integer, , the size of .
The second line contains  space-separated integers, where each integer  describes the height of .

Constraints

Sample Input 0

4
3 2 1 3
Sample Output 0

2
Explanation 0

Candle heights are . The tallest candles are  units, and there are  of them.

Language
JavaScript (Node.js)
More
1234567891011121314151617181920212223242526272829303132
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});


Line: 13 Col: 4

Test against custom input
BlogScoring
*/
const candles = [3, 2, 1, 3, 2, 3, 3, 4, 4, 6186161]
function birthdayCakeCandles(candles) {
  let maxCandle = Math.max(...candles)
  return candles.filter(el => el === maxCandle).length
}

console.log(birthdayCakeCandles(candles))
