console.log('>> Ready :)');


const inputs = document.querySelectorAll('.campo');
const form = document.querySelector('.form_container-sign');

const photoInput = document.getElementById('photoInput');
const photoPreview = document.getElementById('form_container-result-photo');
const resetButton = document.getElementById('button_reset');

//Elementos de preview

function paintPreview(data) {
  document.getElementById('form_container-result-name').textContent =
    data.firstName || '';

  document.getElementById('form_container-result-proposal').textContent =
    data.proposal || '';

  document.getElementById('form_container-result-city').textContent =
    data.city || '';

  document.getElementById('form_container-result-phone').textContent =
    data.phone || '';

  document.getElementById('form_container-result-mail').textContent =
    data.email || '';

  if (data.photo) {
    photoPreview.src = data.photo;
  }
}


//Guardar datos en Local Storage

function loadLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem('formData'));
  if (!savedData) return;

  // Rellenar inputs
  form.elements.firstName.value = savedData.firstName || '';
  form.elements.proposal.value = savedData.proposal || '';
  form.elements.city.value = savedData.city || '';
  form.elements.phone.value = savedData.phone || '';
  form.elements.email.value = savedData.email || '';

  // Pintar preview derecha
  paintPreview(savedData);
}

//Guardar los inputs

form.addEventListener('input', () => {
  const formData = {
    firstName: form.elements.firstName.value,
    proposal: form.elements.proposal.value,
    city: form.elements.city.value,
    phone: form.elements.phone.value,
    email: form.elements.email.value,
    photo: photoPreview.src || ''
  };

  localStorage.setItem('formData', JSON.stringify(formData));
  paintPreview(formData);
});

//Hacer click en la imagen y guardarla

photoPreview.addEventListener('click', () => {
  photoInput.click();
});

photoInput.addEventListener('change', () => {
  const file = photoInput.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    const savedData = JSON.parse(localStorage.getItem('formData')) || {};
    savedData.photo = file.name;

    localStorage.setItem('formData', JSON.stringify(savedData));
    photoPreview.src = reader.result;
  };

  reader.readAsDataURL(file);
});

//Botón Reset

resetButton.addEventListener('click', () => {
  localStorage.removeItem('formData');
  location.reload();
});


loadLocalStorage();