// const arr = ["apple", "banana", "orange","pineapple"]
// console.log(arr)

//add new element to the in the last
// arr.push("cherry")

//remove element from last
// arr.pop()

//add new element from the first
// arr.unshift("guava")

//remove the element from the first
// arr.shift()

// for loop to get the each element
// for(let i = 0 ; i< arr.length;i++){
//     console.log( arr[i])
//  }

// while loop to get the each element
//  let i = 0
//  while (i< arr.length){
//     console.log(arr[i])
//     i++
//  }

const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map((item, index,arr)=> item)

// const result = numbers.filter((item, index,arr)=>item>3)

// const result = numbers.reduce((acc, curr, index, arr) => {
//   return acc + curr;
// }, 0);

//return the boolean value as soon as satisfies the condition
const result = numbers.some((item)=> item>10)
console.log("result:", result);
