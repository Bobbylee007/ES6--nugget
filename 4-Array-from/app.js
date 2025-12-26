// Array.from - NOT ON PROTOTYPE

// from - return Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = "udemy";

// console.log(Array.from(udemy))

const text = document.querySelectorAll(".text");
// console.log(text) // it a nodeList and find() method doesn't work on a NodeList

// const newText = Array.from(text)
//console.log(newText);  it been converted to array

const newText = Array.from(text).find((item) => item.textContent === "Person");
// console.log(newText);



// General setting For pagination
const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});

const itemsPerPage = 8;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage)
  return tempItems
});

console.log(newItems);
 