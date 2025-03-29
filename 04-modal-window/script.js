'use strict';

//selected buttons & stored in a variable
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

//modal window and screen overlay stored in a variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//storing hide & show rules in a function order to avoid repetition of similar code blocks

function showModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function hideModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//testing buttons
for(let i=0; i<btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', showModal);

//after the modal is open
btnCloseModal.addEventListener('click', hideModal); 
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function(event){
    //passing an argument here is necessary
    //argument[dot]key selects the key that is pressed
    if(event.key === 'Escape')
        // console.log('Escape was pressed');
        hideModal();
})

    

