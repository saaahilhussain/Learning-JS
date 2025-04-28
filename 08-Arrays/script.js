'use strict';

// //Simple array methods
const account1 = {
  owner: 'Sahil Hussain',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, //%
  pin: 1111,
  type: 'premium',
};
const account2 = {
  owner: 'Aslam Siddik',
  // movements: [5000, 3400, -150, -790, -3210, -1000, 8000, -30],
  movements: [5000, 3400, -150, -790, -3210],
  interestRate: 1.5,
  pin: 2222,
  type: 'basic',
};
const account3 = {
  owner: 'Arup Biswas',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  // movements: [430, 1000, 700, 50, 90],
  movements: [430],
  interestRate: 1,
  pin: 4444,
  type: 'standard',
};
const account5 = {
  owner: 'Sahil Hussain II',
  // movements: [430, 1000, 700, 50, 90],
  // movements: [430],
  movements: [],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4, account5];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//

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

//creating shallow copy of arrays using slice
// console.log(arr.slice());
// //similar to:
// console.log([...arr]);
// //
// console.log('----SPLICE METHOD----');
//SPLICE - mutates the original array removing the extracted part

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

// const arr = [49, 45, 35];

// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr.at(1));

// //Use cases
// //getting last element of an array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// //doing the same using at method is easier!
// console.table(arr.at(-1));

// //example: finding last character of a string

// console.log('sahil'.at(0));
// console.log('sahil'.at(-1));

// //FOR EACH
// //First for of revision

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
// }

// //doing the same using for each
// console.log('----For Each----');
// movements.forEach(function (movement, i) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
// });

//forEach with Maps and Sets
// //on Maps:-
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //on sets
// const uniqueCurr = new Set(['INR', 'USD', 'EUR', 'USD', 'GBP']);
// console.log(uniqueCurr);

// uniqueCurr.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// //Map method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const usdToInr = 90;

// const movementsINR = movements.map(mov => mov * usdToInr);

// console.log(movements);
// console.log(movementsINR);

//Filter Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// // console.log(movements);
// console.log(deposits);

// //Doing the same using for of
// const deposits2 = [];
// for (const mov1 of movements)
//   if (mov1 > 0) {
//     deposits2.push(mov1);
//   }
// console.log(deposits2);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log('Withdrawals: ', withdrawals);

//Reduce method

// // const balance = movements.reduce((acc, cur) => acc + cur, 0);
// // console.log(balance);
// //Maximum value using reduce method

// const maximum = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(maximum);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);
// // fundamental difference -
// //find method returns the first element that fulfills the logic where as filter returns an entire array itself

// //Similarly, findLast and findLastIndex
// console.log(movements);
// const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);
// const IndexlastWithdrawal = movements.findLastIndex(mov => mov < 0);
// console.log(`index of last withdrawal: ${IndexlastWithdrawal}`);

//Some and Every

// //Some method is quite similar to includes
// console.log(movements.includes(-400));
// // [dot]includes checks for EQUALITY

// //Where AS, [dot]some method checks for CONDITION

// const anyDeposit = movements.some(mov => mov > 0);
// console.table(anyDeposit);

// //EVERY
// //returns true only if all elemetns fullfil the condition

// console.log(movements.every(mov => mov > 0)); //false
// console.log(account4.movements.every(mov => mov > 0)); //true`

// //Separate call backs

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// // flat and flatMap
// // example
// const arr1 = [1, 2, 3, 4];
// console.log(arr1.flat());

// const arr2 = [1, [2, 3, 4], 5, 6];
// console.log(arr2.flat());

// const arrDeep = [1, [2, 3, 4], 5, [6, [7, 8]]];
// console.log(arrDeep);
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));

// // combining ALL movements into a single one
// const movementsAll = accounts.map(acc => acc.movements);
// console.log(movementsAll);

// const movementsCombined = movementsAll.flat();
// console.log(movementsCombined);

// const movementsTotal = movementsCombined.reduce((acc, mov) => acc + mov, 0);
// console.log(movementsTotal);

// //chaining them all into one using FLAT MAP
// const movementsFlatMapped = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(movementsFlatMapped);

// const arr = ['Sahil', 'Aslam', 'Kumar', 'Anurag', 'Das'];

// console.log(arr.sort());

//ascending
// console.log(movements);
// const movements2 = movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// const movements2 = movements.sort((a, b) => a - b);

// console.log(movements2);
// //using .sort() mutates the original array. careful!

// //descending
// // const movements3 = movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (b > a) return 1;
// // });
// const movements3 = movements.sort((a, b) => b - a);
// console.log(movements3);

//groupBy (ES 2024)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const groupedMovements = Object.groupBy(movements, movement =>
//   movement > 0 ? 'deposit' : 'withdrawal'
// );

// console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'modertately active';
  if (movementCount >= 1) return 'less active';
  return 'inactive';
});

console.log(groupedByActivity);

// const groupedByType = Object.groupBy(accounts, account => account.type);
const groupedByType = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedByType);
