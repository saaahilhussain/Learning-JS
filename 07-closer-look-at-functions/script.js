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

const flight = 'MH370';
const sahil = {
  name: 'Sahil Hussain',
  passport: 9864226849,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'A380';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 9864226849) {
    alert('Checked In!');
  } else alert('Wrong passport :(');
};

checkIn(flight, sahil);
console.log(flight);
console.log(sahil);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(sahil);
checkIn(flight, sahil);
console.log(sahil);
