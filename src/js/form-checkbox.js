'use strict';


const selectCheckbox = document.querySelector('.form-checkbox');
const changeURLPhoto = document.querySelector('.background1');
const checkOption1 = document.getElementById('input-option1');
const checkOption2 = document.getElementById('input-option2');
const checkOption3 = document.getElementById('input-option3');


selectCheckbox.addEventListener("change", (e) => {
    if (checkOption1.checked) {
       changeURLPhoto.setAttribute('src', '/images/photo-entrante3-original.png'); 
    } else if (checkOption2.checked) {
       changeURLPhoto.setAttribute('src', '/images/photo-tartar-original.png'); 
    } else if (checkOption3.checked) {
        changeURLPhoto.setAttribute('src', '/images/photo-dessert-original.png');
    }   
})





