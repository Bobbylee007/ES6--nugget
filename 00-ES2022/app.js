// Javascript Nuggets
// ECMAScript 2022
// at() - takes integer and returns the item at that index - string,array

// Top Level Await - Basic Example
import fetchTabs from "./fetchTabs.js";
const tabs = await fetchTabs()
console.log(tabs);



const scores = [99, 90, 100];
const oldLast = scores[scores.length - 1];
console.log(oldLast);

const newLast = scores.at(-1);
console.log(newLast);
const channel = "Coding Addict";
console.log(channel.at(0));

//  fetch("https://www.course-api.com/react-tabs-project")
//    .then((resp) => resp.json())
//    .then((data) => console.log(data));

// const fetchData = async () => {
//   const resp = await fetch("https://www.course-api.com/react-tabs-project");
//   const data = await resp.json();
//   console.log(data);
// };
// fetchData();

  const resp = await fetch("https://www.course-api.com/react-tabs-project");
  const data = await resp.json();
  console.log(data);

