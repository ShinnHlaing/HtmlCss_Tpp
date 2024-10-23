// let container = document.getElementById("container");

// let text = document.createElement("p");
// text.textContent = `Hello Welcome my page!`;

// container.appendChild(text);
document.addEventListener("DOMContentLoaded", function () {
  let inputNum = document.getElementById("inputNum");
  inputNum.addEventListener("input", function () {
    let currentNum = Number(this.value);
    let info = document.getElementById("container");
    info.innerHTML = `Current Number : ${currentNum} <br>
    to fixed : ${currentNum.toFixed(2)} <br>
    to exponent : ${currentNum.toExponential(2)} <br>
    is interger : ${Number.isInteger(currentNum)}`;
  });
});

let add = "";
let array = ["apple", "orange", "magon"];
let box = document.getElementById("info");
let sumNum = [1, 2, 3, 4, 5];
let total = document.getElementById("total");
let price = document.getElementById("price");
const cart = [
  { item: "apple", price: 1.5, quantity: 2 },
  { item: "banana", price: 1.2, quantity: 5 },
  { item: "orange", price: 1.8, quantity: 3 },
];
// exercise1
array.forEach(function (value, index) {
  let result = value.charAt(0).toUpperCase() + value.slice(1);
  add = index + 1 + "." + " " + result;
  box.innerHTML += `${add} <br>`;
});
//exercise2
let totalSum = 0;
sumNum.reduce(function (accumulate, current) {
  totalSum = accumulate + current;
  return totalSum;
});
total.innerHTML = totalSum;
//exercise3
let priceTotal = 0;
cart.forEach(function (element, index) {
  //   console.log(element.price, index);
  priceTotal += element.price * element.quantity;
});
price.innerHTML = `Total price : ${priceTotal}`;
//exercise4
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let showall = document.getElementById("all");
// filter
let even = numbers.filter((value) => {
  return value % 2 == 0;
});
// map
let multiply = even.map((value) => value * 2);
// reduce
let sum = multiply.reduce((accumulate, current) => accumulate + current);

showall.innerHTML = `
Even Number ==>  ${even} <br>
Multiply of 2 ==>  ${multiply} <br>
Total sum is ==>  ${sum} <br>
`;
