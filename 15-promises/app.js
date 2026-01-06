// Javascript Nuggets - Promises

// Async await
// consume/use promises

// Pending, Rejected, Fulfilled

// const value = 2;

// const promises = new Promise((resolve, reject) => {
//   const random = Math.floor(Math.random() * 3);

//   console.log(random);

//   if (random === value) {
//     resolve("you guessed correctly");
//   } else {
//     reject("wrong Number");
//   }
//   reject("there was an error");
// });

// //  resolve([1,2,3])
// console.log(promises);

// promises.then((data) => console.log(data)).catch((err) => console.log(err));

// ==================EXAMPLE 2=============================

// Javascript Nuggets - Promises Example
// .first - after !s first ReadableByteStreamController;
//  .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, ".first", "red", "hello world")
    .then((data) => addColor(3000, ".second", "blue", ))
    .then(() => addColor(2000, ".third", "green"))
    .catch((err) => console.log(err));
})

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`there no such elemrent : ${selector}`);
    }
  });
}

//========================== adding extral data ================================
// btn.addEventListener("click", () => {
//   addColor(1000, ".first", "red", "hello world")
//     .then((data) => addColor(3000, ".second", "blue", data))
//     .then((data) => {
//       console.log(data);
//       addColor(2000, ".third", "green");
//     })
//     .catch((err) => console.log(err));
// });

// function addColor(time, selector, color, data) {
//   const element = document.querySelector(selector);
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve(data);
//       }, time);
//     } else {
//       reject(`there no such elemrent : ${selector}`);
//     }
//   });
// }
