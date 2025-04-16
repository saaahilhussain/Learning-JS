'use strict';

// const bookings = [];

// const createBookings = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES-6 Way of setting defauld params

//   // ES-5 Way of setting default params
//   //   numPassengers ||= 1;
//   //   price ||= 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   //   bookings.push(booking);
//   //   console.log(bookings);
// };

// createBookings('MH370');
// createBookings('MH370', 2);
// createBookings('MH370', 2, 499);
// createBookings('MH370', 4, undefined);

// How Passing Arguments Works: Value vs. Reference

// const flight = 'MH370';
// const sahil = {
//   name: 'Sahil Hussain',
//   passport: 9864226849,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'A380';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 9864226849) {
//     alert('Checked In!');
//   } else alert('Wrong passport :(');
// };

// checkIn(flight, sahil);
// console.log(flight);
// console.log(sahil);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(sahil);
// checkIn(flight, sahil);
// console.log(sahil);

//Theory lecture (no coding required)

//Functions Accepting Callback Functions

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed using: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// console.log('**************');
// transformer('JavaScript is the best!', oneWord);

// //Another example
// const high5 = function () {
//   console.log('Hiiiiiiiiiiii👋');
// };
// document.body.addEventListener('click', high5);
// const selectH3 = document.querySelector('h3');
// selectH3.addEventListener('click', event => {
//   console.clear();
//   event.stopPropagation();
// });

//Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.table(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hey');
// greeterHey('Sahil');
// greeterHey('Shakil');

// greet('Hello')('Sahil Hussain');

//using arrow

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('Hello')('Sahil');

//The call and apply methods

// const lufthansa = {
//   airline: 'lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum} `
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// const book = lufthansa.book;

// // lufthansa.book(380, 'Sahil Hussain');
// // lufthansa.book(370, 'Arup Biswas');
// // console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// // console.log(eurowings);
// // book.call(eurowings, 729, 'Aslam Siddik');
// // book.call(eurowings, 571, 'Pankaj Boro');

// // console.log(eurowings);

// const swiss = {
//   airline: 'SwissAir',
//   iataCode: 'LX',
//   bookings: [],
// };

// // book.call(swiss, 129, 'Bhabishnu Bordoloi');
// // book.call(swiss, 439, 'Sareen Jannat haque');
// // console.log(swiss);

// // //Apply Method
// // const flightData = [986, 'Sehnaj Sultana'];
// // const flightData1 = [764, 'Reju Sultana'];

// // book.apply(eurowings, flightData);
// // book.apply(swiss, flightData1);

// // console.log(eurowings);
// // console.log(swiss);

// //The Bind Method
// const bookEW = book.bind(eurowings);
// bookEW(911, 'Saklin Mustak');
// bookEW(431, 'Imran Bhai');
// console.log(eurowings);

// //We can even pre-apply the parameters

// const bookLX43 = book.bind(swiss, 43);
// //so while calling we simply use the name parameter (refer to the function definition)
// bookLX43('Kumar Kashyap');
// bookLX43('Tinutpal Kashyap');

// //important use case of bind method
// //when we use objects with eventListeners!

// lufthansa.planes = 45;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.btn')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// //using bind
// const addVAT = addTax.bind(null, 0.15); //this keyword nulled

// console.log(addVAT(200));
// //note:- order of the arguement is important

// //small challenge
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// // console.log(addTaxRate(0.1)(200));
// const addVAT2 = addTaxRate(0.1);
// console.log(addVAT2(100));
// console.log(addVAT2(200));

//IIFE (Immediately Invoked Function Expression)

const runOnce = function () {
  console.log('This function will not run again');
};
runOnce();

//IIFE :-

(function () {
  console.log('This will NEVER run again. (used iife)');
  const privateData = 'This is a private variable';
  console.log(privateData);
})();
//We can hide variables inside IIFEs.

//iife in arrow functions
(() => console.log('This will ALSO never RUN AGAIN'))();

{
  const isPrivate = 45;
  var isNotPrivate = 49;
}
console.log(isNotPrivate); // not hidden since we used 'var'
console.log(isPrivate); //got hidden inside scope

//We can hide variables inside scopes using let & const
//we cannot hide variables inside a scope using var keyword
