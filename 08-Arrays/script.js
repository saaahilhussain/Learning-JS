'use strict';

//Simple array methods
const account1 = {
  owner: 'Sahil Hussain',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, //%
  pin: 1111,
};
const account2 = {
  owner: 'Aslam Siddik',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8000, -30],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: 'Arup Biswas',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// //slice method on arrays
// const arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(`length of ${'arr'}: ${arr.length}`);
// console.log(arr.slice(0, 3));
// console.log(arr.slice(0, arr.length));
// console.log(arr.slice(0, arr.length - 1));

// console.log('----negative----');
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr.slice(-3));
// console.log(arr.slice(-arr.length));

// console.log(arr.slice(0, -1));
// console.log(arr.slice(0, -2));
// console.log(arr.slice(0, -3));
// console.log(arr.slice(0, -arr.length)); //-5  and second parameters ignores the mentioned index-number

// //creating shallow copy of arrays using slice
// console.log(arr.slice());
// //similar to:
// console.log([...arr]);
// //
// console.log('----SPLICE METHOD----');
// //SPLICE - mutates the original array removing the extracted part

// // console.log(`Extracted elements: ${arr.splice(3)}`);
// console.log(arr);

// //Reverse
// const arr2 = ['f', 'g', 'h', 'i', 'j', 'k'];
// // arr2.reverse(arr2);
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log([...arr, ...arr2]);
// console.log(letters);

// //JOIN Method
// console.log(letters.join('-'));
// //turns array into a string

//The New 'at' method

const arr = [49, 45, 35];

console.log(arr[0]);
console.log(arr.at(0));
console.log(arr.at(1));

//Use cases
//getting last element of an array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

//doing the same using at method is easier!
console.table(arr.at(-1));

//example: finding last character of a string

console.log('sahil'.at(0));
console.log('sahil'.at(-1));
