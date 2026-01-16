console.log('>> Ready :)');


//VISTA PREVIA DE LOS INPUTS
inputs.forEach(input => {
input.addEventListener('input', manejarInput);
});

function manejarInput(event) {
  
  const input = event.currentTarget;
  const campoResultado = document.getElementById(input.dataset.id);
  campoResultado.textContent = input.value;
  
}
//para la imagen
const inputImage = document.querySelector('input[name="selectImage"]');
const imgResult = document.getElementById('form_container-result-photo');
const liPhoto = document.querySelector('.liPhoto');
inputImage.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    imgResult.src = URL.createObjectURL(file);
    liPhoto.classList.add('liPhoto-view'); //para que no se vea el rectangulo
    photoResult.classList.remove('hidden');
  } else {
    liPhoto.classList.add('hidden');
  }
});


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