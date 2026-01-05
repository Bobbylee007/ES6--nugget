// faster.easier way to access/unpack variables from arrys, object (later vidoes);

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

const last = 'some value'
const {last:shakeAndBake,first, city, zip, siblings:{sister:favoriteSiblings} } = bob
console.log(first,city, zip, shakeAndBake, favoriteSiblings);


// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;


function printPersont({first,last,city,siblings:{sister}}){
 // const {first,last} = person
console.log(first, last, sister);
  
}
printPersont(bob)