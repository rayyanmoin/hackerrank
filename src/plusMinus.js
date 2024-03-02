/**
 *
 * @param {Array<Number>} arr of integers
 * @description prints the proportion of positive, negative and zeroes in the given array
 */

function plusMinus(arr) {
  let zero = 0
  let positive = 0
  let negative = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++
    } else if (arr[i] < 0) {
      negative++
    } else {
      zero++
    }
  }

  positive = positive / arr.length
  negative = negative / arr.length
  zero = zero / arr.length

  console.log(positive.toFixed(6))
  console.log(negative.toFixed(6))
  console.log(zero.toFixed(6))
}

const arr = [10, 1, -0, -2, 5, 32, 0, -23, 6, 8, 3]
plusMinus(arr)
