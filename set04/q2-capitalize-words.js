// Problem:
// Write a function capitalizeWords(str) that:
// Takes a sentence string
// Capitalizes the first letter of each word
// Example:
// capitalizeWords("i am learning javascript") → "I Am Learning Javascript"

function capitalizeWords(str) {
  let strArray = str.split(" ");
  // console.log(strArray)
  strArray = strArray.map( (element) => element[0].toUpperCase() + element.slice(1))
  const myStr = strArray.join(" ")
  console.log(myStr);
}

capitalizeWords("i am learning javascript");
