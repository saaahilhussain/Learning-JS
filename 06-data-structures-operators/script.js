'use strict';

//Destructuring Arrays
//Ex 1.1
//const books = ['The Silk Roads', 'Zero to One', 'Influence'];

// //destructuring them into two variables
// const [firstBook, secondBook] = books;
// console.log(firstBook);
// console.log(secondBook);

// //Ex 1.2
// Destructure the books array into a variable called thirdBook. You must skip the first two books.

// const [, , thirdBook] = books;
// console.log(thirdBook);

// //Ex 1.3
//Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingCount]] = ratings;
// console.log(rating, ratingCount);

// //Ex 1.4
// //Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings=0] = ratingStars;

// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

//Destructuring Objects

const books = [
  {
    title: 'The Silk Roads',
    author: 'Peter Frankopan',
    ISBN: 6849,
    keywords: 'History, Medieval History, Trade History',
    thirdParty: {
      goodreads: {
        rating: 4.41, // Added from exercise page
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    ISBN: 40350,
    keywords: 'Entrepreneurship, technology',
    thirdParty: {
      goodreads: {
        rating: 4.41, // <-- HERE
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
  },
  {
    title: 'Influence',
    author: 'Robert B. Cialdini',
    ISBN: 92492,
    keywords: 'Business, psychology, Persuasion',
    thirdParty: {
      goodreads: {
        rating: 4.41, // <-- HERE
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
  },
];

//Ex 2.1
//Destructure the first book object from the books array into variables called title, author and ISBN.

const { title, author, ISBN } = books[0];

//Ex 2.2
// Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

const { keywords: tags } = books[0];
console.log(tags);

//Ex 2.3
// The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

books[6] = 'The Almanack of Naval Ravikant';
const { language, programmingLanguage = 'Unknown' } = books[6];
console.log(programmingLanguage);

//Ex 2.4
// Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle);
console.log(bookAuthor);

//Ex 2.5
//Each book object has a deeply nested rating property as illustrated below:

// {
//     title: 'Algorithms',
//     ...
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,              // Added above
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13
//       }
//     }
//   },
//   Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

//   Please do most of the work on the left side of the assignment operator: const ... = books[0];

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

//Ex 2.6
//Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

// Example 1
// Example 2
// Code:

// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
// Expected output:

// "Algorithms by Robert Sedgewick, 2011"

// Solution

// function printBookInfo({title, author, year='year unknown'}){
//     console.log(`${title} by ${author}, ${year}`);
// }

// printBookInfo({title: 'the silk roads', author:'Sahil', year:2001})

//The Spread Operator

//Ex 3.1
//Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

//Ex 3.2
// Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

// Example
// Code:

// spellWord('JavaScript')
// Expected output:

// "J a v a S c r i p t"

// function spellWord(word) {
//   console.log(word.split('').join(' '));
// }

// spellWord('sahil');

//REST Operator
// '...' is used on the left hand side of "="
//Example:-
const arrSahil = [1, 2, 3, 4, 5];
//destructuring it and implementing rest operator
const [a, b, ...bakiElements] = arrSahil;
//elemets 1, 2 stored in a & b as destructured
//rest of the elements get stored in "bakiElements" array
console.log(a, b, bakiElements);

//using rest operator with OBJECTS
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Destructuring this object, storing sat into its own variable named 'sat' & storing objects fri & thurs into weekdays named variable
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat);
console.log(weekDays);

//using REST operator in functions

const add = function (...numbers) {
  // console.log(numbers);
};
add(2, 4);
add(2, 5, 7, 7);
add(1, 2, 3, 4, 5);
