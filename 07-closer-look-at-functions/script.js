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

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('Hello')('Sahil');
