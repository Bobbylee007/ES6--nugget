// Javascript Nuggets - Promises

// Async await
// consume/use promises

// Pending, Rejected, Fulfilled

const promises = new Promise((resolve, reject)=>{
//  resolve([1,2,3])
// reject('there was an error')
})

console.log(promises);

promises.then((data)=>console.log(data))