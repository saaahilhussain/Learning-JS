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

//Solution to challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 120);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at a speed of ${this.speed} km/hr.`);
};
Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} is going at a speed of ${this.speed} km/hr.`);
};

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();

// Lec 226: ES-6 Classes
class Expression
const Person = class {}

class Declaration

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to the .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }
  get age() {
    return 2025 - this.birthYear;
  }
  greet() {
    console.log(`Hi there, ${this.firstName}`);
  }
}

const sahil = new Person('Sahil', 2003);
console.log(sahil);
sahil.calcAge();
console.log(sahil.__proto__ === Person.prototype);
console.log(sahil.age);

// Person.prototype.greet = function () {
//   console.log(`Hi there, ${this.firstName}`);
// };

sahil.greet();

//Lec 227: setters and getts

const account = {
  owner: 'sahil',
  movements: [100, 50, 200, 129],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 729;
console.log(account.latest);

//solution to coding challenge 2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at a speed of ${this.speed} km/hr.`);
  }
  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at a speed of ${this.speed} km/hr.`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 60;
console.log(ford);

//Lec - 231 - Inheritance between classes

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.firstName} and I study ${this.course}`);
};

const arup = new Student('arup', 2002, 'Medical Science');
console.log(arup);

arup.introduce();
arup.calcAge();

console.log(arup.__proto__);
console.log(arup.__proto__.__proto__);

console.log(arup instanceof Student);
console.log(arup instanceof Person);
console.log(arup instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

solution to exercise / coding challenge 3 :-

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 120);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at a speed of ${this.speed} km/hr.`);
};
Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} is going at a speed of ${this.speed} km/hr.`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Linking the prototype

EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at a speed of ${this.speed} km/hr. with a charge of ${this.charge}`
  );
};

const Tesla = new EV('Tesla', 120, 23);
Tesla.chargeBattery(40);
console.log(Tesla);
Tesla.brake();
Tesla.accelerate();
Tesla.accelerate();
Tesla.accelerate();

// Lec - 233 : Inheritance betn classes - ES-Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
  }
  get age() {
    return 2025 - this.birthYear;
  }
  greet() {
    console.log(`Hi there, ${this.fullName}`);
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always needs to happen first in order to set the "this"
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.table(`Hi my name is ${this.fullName} and I study ${this.course}.`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2025 - this.birthYear
      } years old. But given these circumstances, I feel more like a ${
        2025 - this.birthYear + 15
      } year old instead :(...`
    );
  }
}
const sahil = new StudentCl('Sahil Hussain', 2003, 'Computer Science');

console.log(sahil);

sahil.introduce();
sahil.calcAge();

// Lec - 233 : Inheritance betn classes - Object.create

const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const amrit = Object.create(PersonProto);
// console.dir(amrit);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.table(`Hi my name is ${this.firstName} and I study ${this.course}.`);
};

const shakilur = Object.create(StudentProto);
shakilur.init('shakilur', 2001, 'BioTechnology');
console.log(shakilur);
shakilur.introduce();
shakilur.calcAge();

Lec 235 - More on Classes

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account Mr. ${owner}.`);
  }

  //Public Interface
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved.`);
    }
  }
}

const acc1 = new Account('Sahil', 'INR-USD', 1212);
acc1.deposit(299);
acc1.withdraw(125);

acc1.requestLoan(500);
acc1.approveLoan(500);
console.log(acc1);

// Lec - 236: Encapsulation:Private Class Fields and Methods
1. Public Fields
2. Private Fields
3. Public Methods
4. Private Methods

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this.movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account Mr. ${owner}.`);
  }

  //Public Interface (API)
  getMovements() {
    return this.#movements;
    //NOt chainable
    //can only be added at the end of the chain
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    //private method
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved.`);
    }
    return this;
  }
}

const acc1 = new Account('Sahil', 'INR-USD', 1212);
acc1.deposit(299);
acc1.withdraw(125);

acc1.requestLoan(500);
// acc1.#approveLoan(500);
acc1.deposit(3000);
console.log(acc1);

//lec 237 : Chaining the methods

const movements = acc1
  .deposit(10)
  .deposit(50)
  .withdraw(100)
  .deposit(16)
  .requestLoan(500)
  .withdraw(10)
  .getMovements();

console.log(movements);

// Soluction to Exercise 4 / coding challenge 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at a speed of ${this.speed} km/hr.`);
  }
  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at a speed of ${this.speed} km/hr.`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at a speed of ${
        this.speed
      } km/hr. with a charge of ${this.#charge}`
    );
    return this;
  }
}

const rivian = new EVCl('rivian', 120, 20);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .brake()
  .accelerate();

  console.log(rivian.speedUS);