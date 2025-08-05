// Problem:
// Write a function removeDuplicates(arr) that:
// Takes an array of numbers or strings
// Returns a new array with duplicates removed
// Example:
// removeDuplicates([1, 2, 2, 3, 4, 4]) → [1, 2, 3, 4]

function removeDuplicates(arr) {
    const mySet = new Set(arr)
    const uniqueArray = []
    mySet.forEach(element => {
        uniqueArray.push(element)
    });    
    return uniqueArray
}

// const myArray = [1, 2, 2, 3, 4, 4]
const myArray = ["1", "1", "2", "2"]    
const uniqueArray = removeDuplicates(myArray)
console.log(`The unique elements are ${uniqueArray}`);

// We can even shorten the solution with one liner as return [...new Set(arr)];
