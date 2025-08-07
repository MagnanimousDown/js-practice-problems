// Write a function mergeUnique(arr1, arr2) that:
// Merges two arrays.
// Removes duplicates using the spread operator + Set.
// Returns the new unique array.
// Example: mergeUnique([1, 2, 3], [2, 3, 4]) ➞ [1, 2, 3, 4]

function mergeUnique(arr1, arr2){
    const uniqueArray = [...arr1, ...arr2]
    return [...new Set(uniqueArray)]
    
}

const arr1 = [1, 2, 3]
const arr2 = [2, 3, 4]

const uniqueArray = mergeUnique(arr1, arr2)
console.log(uniqueArray)