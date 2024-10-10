'use strict';

const modalElement = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal')
const openModalBtn = document.querySelectorAll('.show-modal');

const openBtn = () => {
    modalElement.classList.remove("hidden"); 
    overlay.classList.remove('hidden');
}

const closeBtn = () => {
    modalElement.classList.add("hidden");
    overlay.classList.add('hidden');
}

for (let i = 0; i < openModalBtn.length; i++) {
    openModalBtn[i].addEventListener('click', openBtn);
}

closeModalBtn.addEventListener('click', closeBtn);
closeModalBtn.addEventListener('click', closeBtn);
overlay.addEventListener('click', closeBtn);
document.addEventListener('keydown',function(e) {
    console.log(e.key);
    if(e.key === 'Escape'){
        closeBtn();
    }
});
