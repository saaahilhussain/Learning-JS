'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

function checkMiddleSeat(seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log("You've got the middle seat :(");
  } else console.log("You've got the side seat :)");
}
checkMiddleSeat('11B');
checkMiddleSeat('45A');
checkMiddleSeat('63E');
