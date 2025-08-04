// Write a function `doubleNumbers(arr)` that:
// - Takes an array of numbers
// - Returns a new array where every number is doubled
// Use the `map()` method

function doubleNumbers (arr) {
    const doubledArray = arr.map( (number) => number * 2)
    return doubledArray
}

const myArray = [1,2,3,4,5,6]
const doubledArray = doubleNumbers(myArray)
console.log(`Original Array: ${myArray}`);
console.log(`Doubled Array: ${doubledArray}`);
