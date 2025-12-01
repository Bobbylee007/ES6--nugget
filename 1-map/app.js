// MAP Method

const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },

  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 36,
    position: "intern",
  },
];

// Quokka.js -Extension Ctrl+K Q to start Quokka on a file

// returns a new array
// does not change the size of orignal array (unlike filter)
// uses values from original array when making new one

// return
// const ages = people.map((person) => {

//   return person.age * 2;
// });
// console.log(ages);

// one liner
// const ages = people.map((person) => person.age *2 )

//regular Funct
const getAges = (person) => person.age * 2; //refrence a funct

const ages = people.map(getAges); //parse it
console.log(ages);

//construct object
const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);


// Wrap your Data in react or html

// 1liner
const names_1 = people.map((person)=> `<h2>${person.name}</h2>`)


// const names = people.map((person)=>{
//   return `<h2>${person.name}</h2>`
// })

const result = document.querySelector('.result');
result.innerHTML = names_1.join(' ');