// Solution: is to use FormData()

const form = document.querySelector(".form");
// also valid approach
// const formData = new FormData(form)

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   // won't directly return values

//   //spread out - entries, value, keys
//   const entries = [...formData.entries()]; //for both key and value
//   console.log(entries);

//   const values = [...formData.values()];
//   console.log(values);

//   const keys = [...formData.keys()];
//   console.log(keys);

//   // iterate over with "for of" loop
//   for (let [name, value] of formData) {
//     console.log(`${name} = ${value}`);
//   }
// });

// other way
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);

//   // check for value
//   const name = formData.get('name'); //for both key and value
//   console.log(name);

//   // append
//   formData.append("test", "testValue");

//   // delete
// //   formData.delete( "test");
//   formData.delete( "email");

//   // check property
//  const checkName = formData.has('name')
//  console.log(checkName);
//  const entries = [...formData.entries()]
//  console.log(entries);
// });

// //JSON
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   const entries = [...formData.entries()];
//   console.log(entries);

//  //it's not JSON so... (depends on the server)
// // axiose.post('someUrl', formData)

// const formObject = Object.fromEntries(formData)
// console.log(formObject);
// // will work
// // axios.post('someUrl', formObject)

//   //reset
//   e.currentTarget.reset()
// });

//A typical settup
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const values = [...formData.values()];
  

  // check for empty value
  if (values.includes("")) {
      console.log(" please enter all valuesr ");
    // throw new Error("please enter all values");
  }

  const formObject = Object.fromEntries(formData);
  // do si=omething
  console.log(formObject);

  //reset
  e.currentTarget.reset();
});
