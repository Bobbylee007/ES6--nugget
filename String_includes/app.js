// String includes() - checks if a string contains another string.

const products = [
  { title: "high-back bench", company: "ikea" },
  { title: "albany table", company: "marcos" },
  { title: "accent chair", company: "caressa" },
  { title: "wooden table", company: "ikea" },
];



//===============tech=================
// const firstName = 'Bobby'
// // const result = firstName.includes('b',2)


// const product = {
//     title:"Leather Chair",
// }


// const result = product.title.includes('Leather')
// console.log(result);


// ============function that will get text and check if styles includes the text==========
const text = 'a'

const filteredProducts = products.filter((product)=> product.title.toLowerCase().includes(text))
console.log(filteredProducts);
