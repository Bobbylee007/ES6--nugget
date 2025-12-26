// Unique Values

const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
},
  {
    name: "pasta",
    category: "dinner",
  },
];

// const categories = menu.map((item) => item.category);

// new array method that returns unique-values
// const categories = new Set(menu.map((item) => item.category));

// to turn object to array use spread operator
const categories = ['all',...new Set(menu.map((item) => item.category))]

console.log(categories);

// map -get all instances
// new Set - narrow down
// ['all',...] -  turn it back to Array

const result = document.querySelector('.result')
result.innerHTML = categories.map((category) =>{
  return `<button>${category}</button>`
}).join('')