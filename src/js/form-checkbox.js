'use strict';


const selectCheckbox = document.querySelector('.form-checkbox');
const addPhotoDOM = document.querySelector('.background1');


selectCheckbox.addEventListener("click", (e) => {
    addPhotoDOM.classList.add("background2");
    console.log('funciona');
})