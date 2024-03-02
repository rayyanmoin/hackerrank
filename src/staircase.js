/**
 *
 * @param {number} n is integer to repeat
 * @description In this we are going to draw a Stair case pattern
 */

function staircase(n) {
  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(n - 1 - i) + '#'.repeat(i + 1))
  }
}

staircase(14)
