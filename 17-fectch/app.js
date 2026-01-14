// Javascript Nuggets
// Fetch API - Browser API for HTTP  (AJAX) Request
// Default - GET Requst, supports other methods as well
// Returns Promise

const url = "https://www.course-api.com/react-tour-project";

// console.log(fetch(url));
fetch(url)
  .then((resp) => console.log())
  .catch((err) => console.log(err));
