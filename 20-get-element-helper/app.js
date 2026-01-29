// Javascript Nuggets

const heading = document.querySelector(".heading");
// console.log(heading);

const listItems = document.querySelectorAll(".list-item");
// console.log(listItems);

// single node selector
// const getElement = (selector)=>{
//     const el = document.querySelector(seletor)
//     if(el) return el
//     throw new Error(` please double check selector : ${selector}`)
// }
//  console.log(getElement('.heading'));

// NodeList selector
// const getElement = (selector, isList)=>{
//     if(isList){
//         const el = [...document.querySelectorAll(selector)]
//         if(el.listItems < 1){
//             throw new Error(` please double check selector : ${selector}`)
//         }
//         return el;
//     }
//     const el = document.querySelector(selector, isList)
//     if(el) return el
//     throw new Error(` please double check selector : ${selector}`);
// }
//  console.log(getElement(".heading"));
//  console.log(getElement(".list-item", true));

// Combining both
const getElement = (selector, isList) => {
  const el = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

    // not a list - exist or not
    // list - empty or not

    // if(!isList && el) return el
    // if (isList && !el.length < 1) return el;

//1Liner
if ((!isList && el) || (isList && !el.length < 1)) return el
  throw new Error(` please double check selector : ${selector}`);
};

console.log(getElement(".heading"));


// NB it better user for larger scale projects