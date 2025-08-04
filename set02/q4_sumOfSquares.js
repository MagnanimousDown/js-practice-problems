// Write a function sumOfSquares(arr) that:
// Takes an array of numbers
// Returns the sum of squares of all numbers
// Example: [1, 2, 3] → 1² + 2² + 3² = 14
// (Hint: Use reduce if possible)

function sumOfSquares(arr) {
    const totalSumOfSquares = arr.reduce( (accumulator, currentValue) => accumulator + (currentValue**2), 0)
    return totalSumOfSquares
}

const myArr = [1, 2, 3]
let sum = sumOfSquares(myArr)
console.log(`The total sum of elements in the array is ${sum}`);
