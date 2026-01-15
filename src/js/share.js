'use strict';

//flecha arrow
document.addEventListener("click", function (ev) {
  const header = ev.target.closest(".panel-header");
  if (!header) return;

  const panel = header.closest(".panel");
  panel.classList.toggle("open");
});

//funcionamiento del botón
document.addEventListener("click", function (ev) {
  const button = ev.target.closest(".card_button");
  if (!button) return;

  createCard();
});

// tarjeta
function createCard() {
  const form = document.querySelector(".form_container-sign");
  if (!form) return;

  const data = {
    field1: 1,
    field2: form.elements.firstName.value,
    field3: form.elements.proposal.value,
    field4: form.elements.email.value,
    field5: form.elements.phone.value || "000000000",
    field6: form.elements.city.value,
    field7: "Postre",
    photo: "/images/photo-cupcake-original.png"
  };

  fetch("https://dev.adalab.es/api/info/data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      console.log("API result:", result);

      const link = document.querySelector(".share_link");

      if (result.success && link) {
      const url = `form_index.html?id=${result.infoID}`;
      link.textContent = url;
      link.href = url;
      }
    });
}
