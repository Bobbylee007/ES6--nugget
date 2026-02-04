// Set object - stores a collection of unique values of type
// new Set()
// add(value)
// delete(value)
// clear(value) - removes all items
// has(value)

// iterators
// enteries(), keys(),values(), forEach()

//================ tech========================
// const unique = new Set();

// const random = "third"

// unique.add("first");
// unique.add("second");
// unique.add(random);
// unique.add("first");
// unique.add("first");
// unique.add(4);

// // const result = unique.delete('third')
// // console.log(result);

// // const result = unique.delete('five')
// // console.log(result);

// const isValue = unique.has(4)
// console.log(isValue);

// console.log(unique);

// =============Example=======================

// new Set() - accepts iterable object

const products = [
  { title: "high-back bench", company: "ikea" },
  { title: "albany table", company: "marcos" },
  { title: "accent chair", company: "caressa" },
  { title: "wooden table", company: "ikea" },
];

// const companies = products.map((item)=> item.company)
// console.log(companies);


// const uniqueCompanies = new Set(companies)
// console.log(uniqueCompanies);

//turn it to array to be display
// const finalCompanies = ['all', ...uniqueCompanies ]
// console.log(finalCompanies);

// using one liner
const result = ['all', ...new Set(products.map((item)=>item.company))]
console.log(result);
