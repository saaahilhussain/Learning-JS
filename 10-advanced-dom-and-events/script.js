'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabContent.forEach(c => c.classList.remove('operations__content--active'));

  //ACTIVATE TAB
  clicked.classList.add('operations__tab--active');

  //Add content dynamically as per data-set
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};
// console.log(nav);
//we could also be using 'mouseenter' instead of 'mouseover' but the problem being - 'mouseenter' does not bubble during event delegation

//here bind is the opacity passed as "arguement", refer to the function definition for "this" keyword
nav.addEventListener('mouseover', handleHover.bind(0.5));

//mouseout is opposite to mouseover

nav.addEventListener('mouseout', handleHover.bind(1));

// //Making the navigation appear with section 1

// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//Sticky Navigation: The Intersection Observer API
//does the same work above but more efficiently

// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOption = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallBack, obsOption);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries; //similary to [entry] = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //dynamically added the height and it must be negative
});

headerObserver.observe(header);

//Lec 210 - Reveal Sections (revealing elements on scroll)

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  // console.log(entries);

  entries.forEach(entry => {
    // console.log(entry);

    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);

  // section.classList.add('section--hidden');
});

//Lec 212 - Lazy Loading Images

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replace all img with org src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const allImgs = document.querySelectorAll('img[data-src]');

const observeImg = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

allImgs.forEach(img => observeImg.observe(img));

//Sliders
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  let curSlide = 0;
  const maxSlide = slides.length;
  const dotContainer = document.querySelector('.dots');

  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `
      <button class="dots__dot" data-slide="${i}"></button>
      `
      );
    });
  };
  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translate(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else curSlide++;

    goToSlide(curSlide);
    activateDots(curSlide);

    //slide - 1: -100%, 0%, 100%, 200%
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else curSlide--;

    goToSlide(curSlide);
    activateDots(curSlide);
  };

  //init
  const init = function () {
    goToSlide(0);
    createDots();
    activateDots(0);
  };
  init();
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  //Event Handlers
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
    // if (e.key === 'ArrowRight') nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDots(curSlide);
      // console.log('DOT');
    }
  });
};

slider();

/////////////////////////////////
//////LECTURES

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

//What is the intersection observer API?
//The Intersection Observer API is a web API that allows developers to efficiently monitor the visibility and intersection of elements (like images, divs, etc.) within a web page, relative to a parent element or the viewport.
