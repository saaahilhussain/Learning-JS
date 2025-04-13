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
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    ISBN: 40350,
    keywords: 'Entrepreneurship, technology',
  },
  {
    title: 'Influence',
    author: 'Robert B. Cialdini',
    ISBN: 92492,
    keywords: 'Business, psychology, Persuasion',
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
