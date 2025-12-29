// Optional Chaining works for deep nexted properties

const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  {
    name: "peter",
    location: { street: "123 Pine street", },
  },
  { name: "ssusan", location: { street: "123 Apple street", timezone: { offset: "+9:00" } } },
];


const result =document.querySelector('.result')
// to iterate over the list

people.forEach((person)=>{
    // console.log(person.name);

    // with AND operator
    // console.log(person.location && person.location.timezone && person.location.timezone.offset);
    
    // with optional chaining
    console.log(person?.location?.timezone?.offset  || "hello world");


    result.innerHTML = `<h2>Locantion and timezone ${
      person?.location?.timezone?.offset || "hello world"
    } </h2>`;
})

//befoer optional chaining
// console.log(true && 'hello world');
// console.log(false && "hello people");
