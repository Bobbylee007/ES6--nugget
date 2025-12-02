// Filter - returns a new array, can manipulate the size 0f new array (unlike map), returns based on condition
// Find - return single instance, returns first match, if no match -  undefind

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

const fruits = ["orande", "pear", "lemon"];

// =======================================================================/

// filter
const youngPeople = people.filter((person) => {
  // console.log(person)
  //   if (person.age < 30) {
  //     return person;
  //   }
  return person.age < 30; // 1-liner
});
console.log(youngPeople);

// const developer = people.filter((person) => {
//     if (person.position === "developer") {

//         return person
//     }
// })

const developer = people.filter((person) => person.position === "developer");

console.log(developer);

// no match
const seniorDev = people.filter((item) => item.postion === "senior dev");
console.log(seniorDev);

// ======================================================================/

// find

const peter = people.find((person) => person.name === "peter");
console.log(peter);

const fruit = fruits.find((fruit) => fruit === "lemon");
console.log(fruit);

// no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

// ===============================================================================/

// multiple matches - first match

const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

// NB - it fine to use find() when u have unique values Eg Api(_id)

// difference btw filter & find

//find
console.log(peter.position);
//filter
const anna = people.filter((person) => person.name === "anna");
console.log(anna[0].position);
