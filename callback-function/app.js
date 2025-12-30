function makeUppercase(value) {
  console.log(value.toUpperCase());
}

// makeUppercase('peter');

function reverseString(value) {
    console.log(value.split('').reverse().join(''));
    
}

function handleName(name, cb){
    const fullName = `${name} smith`
    cb(fullName)
    // some more logic
    
}


// handleName('peter', makeUppercase)
// handleName('peter', reverseString);

//As a arrow func
// handleName('susan', function (value){
//     console.log(value);
    
// })

// As a arrow func
handleName('susan', function (value){
    console.log(value);
    
})

// array method, setTimeout, event listeners etc
