// Write a function getCommonElements(arr1, arr2) that:
// Returns a new array containing elements that are present in both arr1 and arr2
// Use array methods like filter and includes.
// getCommonElements([1,2,3,4], [3,4,5,6]) → [3, 4]

const getCommonElements = (arr1, arr2) => {
    let commonElements = arr1.filter( (arr1Element) => arr2.includes(arr1Element))
    return commonElements
}

const commonElements = getCommonElements([1,2,3,4], [3,4,5,6])
console.log(`The common elements are ${commonElements}`);
