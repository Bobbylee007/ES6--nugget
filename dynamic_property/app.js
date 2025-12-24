// dot notation

const person = {
  name: "john",
};
console.log(person.name);
person.age = 25;
console.log(person);

// square bracket notation

const items = {
  "featured-items": ["item1", "item2"],
};

console.log(items["featured-items"]);
console.log(person["name"]);

// setting up Keys dynamically using square bracket notation

let appState = "loading";
appState = "error";
const keyName = "computer";
const app = {
  [appState]: true,
};
app[keyName] = "apple";
console.log(app);

//Examples

const state = {
  loading: true,
  name: "",
  job: "",
};

// setting function that take 2arg[] keyname and value to update the state variable dynamically

function updateState(key,value){
    state[key] = value
}

updateState("name", "john");
//adding or changing keys
updateState("job", "developer");
updateState("loading", false);

updateState("products", []);
updateState("name", 'peter');



console.log(state);
