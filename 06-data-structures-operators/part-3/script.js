'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES-6 Enhanced object literals
  // openingHours,
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Set

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// const name = new Set('Sahil');

// //we can only add iterables in Set, it removes duplicates
// //Set retrieves the distinct elements

// console.log(ordersSet);
// console.log(new Set('Sahil')); //Strings are iterable
// console.log(new Set()); //we can log empty string as well

// //uses:- add, delete, has, size
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pasta'));
// console.log(ordersSet.has('Chicken'));

// //methods add, delete

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// name.delete('S');
// console.log(name);

// //We can loop over Sets

// for (const order of ordersSet) console.log(order);
// for (const letter of name) console.log(letter);

// ordersSet.clear();
// console.log(ordersSet);

// name.clear();
// console.log(name);

// const staff = [
//   'Waiter',
//   'Manager',
//   'Waiter',
//   'Supervisor',
//   'Waiter',
//   'Chef',
//   'Waiter',
//   'Manager',
// ];

// //storing it into an array
// const staffUnique1 = new Set(staff);
// const staffArr = [...staffUnique1];
// console.log(staffArr);

// //easier way to do the same

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

//New operations in Sets

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

//intersection method
const commonFood = italianFoods.intersection(mexicanFoods);
console.log('intersection: ', commonFood);
console.log([...new Set(commonFood)]);

//union method
const italianMexianFusion = italianFoods.union(mexicanFoods);
console.log(italianMexianFusion);

console.log('union: ', [...new Set(italianMexianFusion)]);

//Difference method

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Unique Italian Foods: ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Unique Mexican Foods: ', uniqueMexicanFoods);

//symmetric difference method (removes common element from both and gives a union set)

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);

console.log(uniqueItalianAndMexicanFoods);

//isDisjointFrom

console.log(italianFoods.isDisjointFrom(mexicanFoods));
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
