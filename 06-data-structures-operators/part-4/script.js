'use strict';

const airline = 'TAP Air Portugal';

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//Fix capitalisation in name
const passanger = 'sAhIl';
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);

//Fix email
const email = 'sh@outlook.in';
console.log('original email: ', email);
const loginEmail = '  sh@outLook.In   ';
console.log('input email: ', loginEmail);
console.log(email === loginEmail);

//fix
// const emailLower = loginEmail.toLowerCase();
// const emailCorrect = emailLower.trim();
// console.log(emailCorrect);
// console.table(email === emailCorrect);
//we can do it in a single line itself!

const emailFixed = loginEmail.toLowerCase().trim();
console.log(emailFixed);
console.log(email === emailFixed);

//the "replace" method

// const priceINR = '85 Rs';
// const priceUSD = priceINR.replace('Rs', '$'). replace(" ", '');
// console.log(priceUSD);

const announcement =
  'All passangers come through the boarding door 45. Boarding door 45 shall close soon...';
console.log(announcement);
const announcementFixed = announcement.replace('door', 'gate');
console.log(announcementFixed); //Did not work :(

const announcementAll = announcement.replaceAll('door', 'gate');
console.log(announcementAll);

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed to board');
  } else console.log('You are welcome aboard :)');
};

checkBaggage('I have a phone, a gun and chips');
checkBaggage('I have a phone, a gun and knife for protection');
checkBaggage('I have a laptop');

// const plane = 'A320';

//Part -3

console.log('a+very+nice+string'.split('+'));
console.log('Sahil Hussain'.split(' '));

const [firstName, lastName] = 'Sahil Hussain'.split(' ');
console.table(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  //names stores array of separated 'name'
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //another easier approach

    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('safiqul hussain');
capitalizeName('sahil hussain');

//padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '#'));
console.log('sahil'.padStart(20, '*').padEnd(30, '#'));

const maskCreditCard = function (number) {
  const str = number + ''; //str becomes a string due to '' being added to the number
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(12345678));
console.log(maskCreditCard(1234567812345678));

// const x = 'shakil jubair';
// const y = x.split(' ');
// // console.log(y);

// const z = [];

// for (const i of y) {
//   console.log(i);
//   z.push(i[0].toUpperCase() + i.slice(1));
//   console.log(z.join(' '));
// }

// function checkMiddleSeat(seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log("You've got the middle seat :(");
//   } else console.log("You've got the side seat :)");
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('45A');
// checkMiddleSeat('63E');

//Repeat method
const message2 = 'Bad weather.. All departures delayed. ';

console.log(message2.repeat(2));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine('1');
planesInLine('2');
planesInLine('3');
planesInLine('4');
planesInLine('5');
