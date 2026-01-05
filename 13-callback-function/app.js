function makeUppercase(value) {
  console.log(value.toUpperCase());
}

// makeUppercase('peter');

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
  // some more logic
}

// handleName('peter', makeUppercase)
// handleName('peter', reverseString);

// As a arrow funct
//  handleName('susan', function (value){
//     console.log(value);

// })

// As a liner
handleName("susan", (value) => console.log(value));


const btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    console.log('hello world');
    
    
})
// array method, setTimeout, event listeners etc
