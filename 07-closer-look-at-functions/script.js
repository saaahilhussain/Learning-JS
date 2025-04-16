'use strict';

const bookings = [];

const createBookings = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES-6 Way of setting defauld params

  // ES-5 Way of setting default params
  //   numPassengers ||= 1;
  //   price ||= 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  //   bookings.push(booking);
  //   console.log(bookings);
};

createBookings('MH370');
createBookings('MH370', 2);
createBookings('MH370', 2, 499);
createBookings('MH370', 4, undefined);
