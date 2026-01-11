console.log('>> Ready form:)');

const inputs = document.querySelectorAll(".campo");
const parrafo = document.getElementById("form_container-result");
const form = document.querySelector(".form_container-sign");



inputs.forEach(input => {
input.addEventListener('input', manejarInput);
});

function manejarInput(event) {
  const input = event.currentTarget;
  const campoResultado = document.getElementById(input.dataset.id);
  campoResultado.textContent = input.value;
  
}

//Guardar datos en Local Storage

function loadLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem('formData'));

  if (savedData) {
    form.elements.firstName.value = savedData.firstName || '';
    form.elements.proposal.value = savedData.proposal || '';
    form.elements.city.value = savedData.city || '';
    form.elements.phone.value = savedData.phone || '';
    form.elements.email.value = savedData.email || '';
  }
}

loadLocalStorage();

form.addEventListener('input', () => {
  const formData = {
    firstName: form.elements.firstName.value,
    proposal: form.elements.proposal.value,
    city: form.elements.city.value,
    phone: form.elements.phone.value,
    email: form.elements.email.value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
});