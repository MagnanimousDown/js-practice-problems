// Given an object with numeric values, write a function sumValues(obj) that:
// Returns the sum of all values
// const obj = {
//   a: 10,
//   b: 20,
//   c: 30
// }
// sumValues(obj) → 60


const obj = {
  a: 10,
  b: 20,
  c: 30
}

const sumValues = (myObject) => {
    const values = Object.values(myObject)
    console.log(values);
    return values.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)
}

const sum = sumValues(obj)
console.log(`The sum of values from the passed object is ${sum}`);
