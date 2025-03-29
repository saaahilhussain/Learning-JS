'use strict';

//selected buttons & stored in a variable
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

//modal window and screen overlay stored in a variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// console.log(btnsShowModal);

//testing buttons
for(let i=0; i<btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
});
    btnCloseModal.addEventListener('click', function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });

