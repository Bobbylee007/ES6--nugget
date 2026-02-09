// "CMD + K + Q" - Existing File,  "CMD + K + J" New file
// how many days, between two days

const date1 = new Date("may 27, 2026");
const date2 = new Date("june 5, 2027");

// const getDays = (date1, date2)=>{
//     const oneDay = 1000 * 60 * 60 * 24
//     const time2 = date2.getTime() 
    // console.log(date1, date2);
//     console.log(time2);

//     const time1 = date1.getTime(); 
//     console.log(time1);

//     let time = time2 - time1
//     console.log(time);
    
//     time = time / oneDay;
//     console.log(time);
    // to get real value not decimals or negative value we use Math.absolute n Math.round()
//     time = Math.round(Math.abs(time))
//     console.log(time);
// }

// one liner
   const getDays = (date1,date2)=> Math.round(Math.abs((date2 - date1)/(1000 *60*60*24)))
console.log(getDays(date1,date2));
// NB: when a date() object is convected to number it becomes a timestamps same as getTime() method 