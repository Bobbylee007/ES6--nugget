//  Quokka.js extension
// "CMD + K + Q"  - Existing File, "CMD + K + j" - New File
// multiply arguments, unlimited, arguments, if 0 and

// function multiply() {
//   console.log(arguments); arguments object
  
//   const args = [...arguments];
//   const result = args.reduce((total, item) => {
//     return item ? item * total : item + total
//   }, 1);
//   return result;
// }


// for arrow func we dont have access to arguments, when use rest operator we can work it out
const multiply = (...args)=>{
   const result = args.reduce((total, item) => {
    return item ? item * total : item + total
  }, 1);
  return result;
    
}

multiply(2, 3, 4, 5, 6, 7);

console.log(multiply(4, 5));
// 4 * 5 = 20

console.log(multiply(1, 2, 3, 5));
// 1 * 2 * 3 * 5 = 30

console.log(multiply(2, 0, 4, 2));
// 2 + 0 * 4 * 2 = 16
