'use strict';

//its a convention or a good practice to write constructor functions using the first word in UPPER Case
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //NEVER DO THIS (Bad Practice)
  //   this.calcAge = function () {
  //     console.log(2025 - birthYear);
  //   };
};

const sahil = new Person('sahil', 2003);
const kumar = new Person('kumar', 2002);
const shakil = new Person('shakil', 2004);

//calling a function using the 'new' keyword :-
// 1. a new {empty object is created}
// 2. function is called with the the this keyword set to the {}
// 3. {} is then linked to a prototype
// 4. function automatically returns the {}

console.log(sahil, kumar, shakil);

console.log(sahil instanceof Person);
