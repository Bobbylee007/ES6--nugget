// Javascript Nuggets
// ansyn / await
// async must be Present, always returns a Promise
// await awaits till promise is settled
// error handling - try/catch block

// const example = async () =>{
//     return 'hello there'
// }

// async function someFunc () {
// const result = await example()
// console.log(result);
// console.log('hello world');

// }

const users = [
  { id: 1, name: "jhon" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
  { id: 4, name: "bobby" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
  { userId: 4, articles: ["ten"] },
];

const getData = async () => {
    const user = await getUser('bobby') 
    console.log(user);
    
}

getData()
// using .then() approach
// getUser("susan")

//    .then((user) => console.log(user))

//   .then((user) => getArticles(user.id))
//   .then((articles)=>console.log(articles))
//   .catch((err) => console.log(err));

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);

    if (user) {
      return resolve(user);
    } else {
      reject(`No such user with name : ${name}`);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);

    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      reject(`No Article find with this ${userId}`);
    }
  });
}
