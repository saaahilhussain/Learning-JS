'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling to section 1 (Lec - Smooth Scrolling)

btnScrollTo.addEventListener('click', function (e) {
  console.log('click');
  const s1coords = section1.getBoundingClientRect();
  console.log('section: ', s1coords);

  console.log('button: ', e.target.getBoundingClientRect());

  console.log('current scroll position (x/y): ', scrollX, scrollY);

  // console.log(
  //   'current vp dimensions: ',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientHeight
  // );

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //added current scroll position because :-
  //the s1coords.top is relative to viewport only and not document top

  // //Smooth scrolling
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, //or + scollX
  //   top: s1coords.top + window.pageYOffset, //or + scrollY
  //   behavior: 'smooth',
  // });

  //Modern Way
  section1.scrollIntoView({ behavior: 'smooth' });
});
//////////////
//page navigaion (Lec 204 - Event Delegation)
// const navLinks = document
//   .querySelectorAll('.nav__link')
//   .forEach(function (link) {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();
//       // console.log('click');

//       const id = this.getAttribute('href');
//       // console.log(id);

//       document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     });
//   });
//the above method is not the best optimised approach to page navigation. if we were to work on a larger codebase then this would lead to performance issues.

//we will solve that problem by using the concept of event bubbling & event capturing

//steps to do it
//1. Add event listener to common parent (example- here it is '.nav__links')
//2. Determine what event originated the event
//3. Determine a matching strategy to execute

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // console.log(e.target);
  // here e.target is a very important concept and helps us to know where exactly the event is taking place

  //Matching strategt
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log('link', id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////
//Lec - 205 Building a tabbed component

//tabbed components
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t =>
//   t.addEventListener('click', function (e) {
//     console.log('CLICK');
//   })
// );  //Unoptimised code and might cause performance problems

//Better approach - event delegation
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return;
  //before adding the active class, remove it from the class tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active');
});

/////////////////////////////////
//////LECTURES/

// //Selecting elements using DOM Manipulation

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// const IdSec1 = document.getElementById('section--1');
// console.log(IdSec1);

// const tagName = document.getElementsByTagName('button');
// console.log(tagName);

// const btn = document.getElementsByClassName('btn');
// console.log(btn);

// //Creating and Inserting Elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';

// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class= "btn btn--close-cookies">Got it!</button>';
// // console.log(message);

// // header.prepend(message);
// // header.append(message); //prepend and append cant work both at the same time
// // header.append(message.cloneNode(true)); //so, to make them appear in both, we need to clone the selection by using (cloneNode(true))

// //inserting before and after some element
// // header.before(message);
// header.after(message);

// //deleting elements
// document
//   .querySelector('.btn--close-cookies')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message);
//   });
// message.style.width = '120%';

// /////styles

// message.style.backgroundColor = '#37383d';
// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).height);
// message.style.height = parseInt(getComputedStyle(message).height) + 30 + 'px';

// //on CSS variables
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// // Don't use
// logo.clasName = 'jonas';

//  From Lectures
// // More on Event Listeners

// const fnHoverH1 = function (e) {
//   alert('check console');
//   console.log('You just hovered on h1');

//   // h1.removeEventListener('mouseenter', fnHoverH1);
// };

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', fnHoverH1);

// setTimeout(() => h1.removeEventListener('mouseenter', fnHoverH1), 5000); //removes eventListener after 5 seconds

// h1.onmouseenter = function (e) {
//   console.log('Hover activity on h1');
// };

//Lec - Event propogation in practice

// (function randInt(min = 0, max = 10) {
//   console.log(Math.trunc(Math.random() * (max - min) + 1));
// })();

//storing random colour rgb(255, 255, 255);

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

///////////////////
///Lec 205 - Dom Traversing

// // Sometimes we need to select elements relative to the other elements

// const h1 = document.querySelector('h1');

// //going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); //selects literally everything downwards child
// console.log(h1.children); //selects only the html elemts under it

// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'orangered';
// h1.lastElementChild.style.color = 'blue';

// // going upwards: parents
// console.log(h1.parentNode); //selects the direct parent element
// console.log(h1.parentElement); // does the same in this case

// //select the closest parent
// h1.closest('.header').style.background = 'var(--gradient-secondary)'; //selects the closest parent element that is called or selected - receives a query string just like querySelector
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// //if we were to select all the sibligs rather than the previous or next one then there is a trick - in which we can move up to the parent element and then select all of the children

// //HTML collection is not an array but since it is an iterable we can store it in an array using the spread operator and loop over it

// console.log([...h1.parentElement.children]);
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
