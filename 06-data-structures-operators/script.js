'use strict';

//Destructuring Arrays
//Ex 1.1
const books = ['The Silk Roads', 'Marcus Aurelius', 'Influence'];

//destructuring them into two variables
const [firstBook, secondBook] = books;
console.log(firstBook);
console.log(secondBook);

//Ex 1.2
//Destructure the books array into a variable called thirdBook. You must skip the first two books.

const [, , thirdBook] = books;
console.log(thirdBook);

//Ex 1.3
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
