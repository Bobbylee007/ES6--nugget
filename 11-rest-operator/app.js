// Reat operator...
// gatheers/collects items
// destructuring, functions
//placement important, careful with the same name
//rest when declare function, spread when invoke th fnction

// arrays
const fruits = ["apple", "orange", "lemon", "banana", "pear"];
const [first, secoond, ...restOfTheFruits] = fruits;
console.log(first, secoond, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit == "lemon");
console.log(specificFruit);

// objects
const person = { name: "john", lastName: "smith", job: "developer" };
// const {...rest, job } = person;
const { job, ...rest } = person;
console.log(job, rest);
// NB: ...rest always go last because it copy rest of the items in arrays or objects

// functions

const getAverage = (name,...scores)=>{
    console.log(name);
    console.log(scores);
    const avearge = scores.reduce((total,item)=>{return total +=item}, 0)/scores.length
    console.log(avearge);
    
}
// getAverage(person.name,89,76,81,100)
const testScores = [23,45,67,89]
getAverage(person.name, ...testScores);