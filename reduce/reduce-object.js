// Reduce - Object

// cart example
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.9,
    amount: 1,
  },
  {
    title: "google pixel",
    price: 499.9,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.9,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.9,
    amount: 3,
  },
];

let {totalItems, cartTotal} = cart.reduce(
  (total, cartItem) => {
    // console.log(cartItem)
    const { amount, price } = cartItem;
    //count items
    total.totalItems += amount;
    // count sum
    total.cartTotal = amount * price
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

cartTotal = parseFloat(cartTotal.toFixed(2))
// console.log(total); for reference - it been distructure from reducer functon itself
console.log(totalItems, cartTotal)
// github repos Example

const url = "https://api.github.com/users/john-smilga/repos?per_page=100";
