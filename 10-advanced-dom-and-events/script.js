'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

//Selecting elements using DOM Manipulation

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const IdSec1 = document.getElementById('section--1');
console.log(IdSec1);

const tagName = document.getElementsByTagName('button');
console.log(tagName);

const btn = document.getElementsByClassName('btn');
console.log(btn);

//Creating and Inserting Elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class= "btn btn--close-cookies">Got it!</button>';
// console.log(message);

header.prepend(message);
// header.append(message); //prepend and append cant work both at the same time
header.append(message.cloneNode(true)); //so, to make them appear in both, we need to clone the selection by using (cloneNode(true))

//inserting before and after some element
// header.before(message);
// header.after(message);

//deleting elements
document
  .querySelector('.btn--close-cookies')
  .addEventListener('click', function () {
    message.remove();
  });
