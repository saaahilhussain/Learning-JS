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
// 2. function is called with the the "this" keyword set to the {}
//      for example, in : const sahil = new Person('sahil', 2003);
//      here the "this" keyword is set to sahil as it calls the constructor function using the new Keyword and creates an object.
// 3. {} is then linked to a prototype
// 4. function automatically returns the {}

console.log(sahil, kumar, shakil);

console.log(sahil instanceof Person);

//Prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

sahil.calcAge();

//Each and every function in JS has a property called "prototype" and that includes constructor functions as well

//Every object created by using a certain constructor fucntion will get access to all the methods and properties that we define on the constructor's prototype property

kumar.calcAge();
shakil.calcAge();

console.log(sahil.__proto__);
console.log(sahil.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(sahil));
console.log(Person.prototype.isPrototypeOf(kumar));
console.log(Person.prototype.isPrototypeOf(shakil));
console.log(Person.prototype.isPrototypeOf(Person));

/////////////////
Person.prototype.relation = 'Friends';
console.log(sahil);
console.log(sahil.hasOwnProperty('relation'));
console.log(sahil.hasOwnProperty('firstName'));

//Prototypal Inheritance

console.log(sahil.__proto__);
//Object.prototype
console.log(sahil.__proto__.__proto__);
console.log(sahil.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 6, 8, 4, 9];
console.log(arr.__proto__ === Array.prototype);

//Making a new array method using prototype

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(Array.prototype)
const number = '2266889944';
const arrNumber = number.split('');
console.log(arrNumber.unique());

//It is also not recommended to add methods to in-built objects and functions to in-built objects. Another bad practice

document.querySelector('h1'); //has deep nested prototypes
console.dir(x => x + 1); //also has prototype since functions are objects and objects have prototypes
