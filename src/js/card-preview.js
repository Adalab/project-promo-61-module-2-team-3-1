'use strict';

//boton reset

const buttonReset = document.getElementById('button_reset');
const resetInputValue = document.querySelectorAll('.campo');
const containerToBlur = document.querySelectorAll('.container-blur');
const inputValueInDom = document.querySelectorAll('.style-preview');

buttonReset.addEventListener("click", () => {
    console.log('reset');
     
    resetInputValue.forEach(input => {
        input.value = '';
        
    });
    
 });
const nameResult = document.getElementById('form_container-result-name');
const proposalResult = document.getElementById('form_container-result-proposal');
const cityResult = document.getElementById('form_container-result-city');
const phoneResult = document.getElementById('form_container-result-phone');
const mailResult = document.getElementById('form_container-result-mail');
const photoResult = document.getElementById('form_container-result-photo');


buttonReset.addEventListener('click', function () {
  nameResult.textContent = '';
  proposalResult.textContent = '';
  cityResult.textContent = '';
  phoneResult.textContent = '';
  mailResult.textContent = '';

  photoResult.src = '';
  photoResult.classList.add('hidden');
});