'use strict';

document.addEventListener("DOMContentLoaded", () => {

  // Abrir y cerrar el panel
  const panel = document.querySelector(".panel");
  const header = document.querySelector(".panel-header");

  if (panel && header) {
    header.addEventListener("click", () => {
      panel.classList.toggle("open");
    });
  }

  // Elementos del formulario
  const form = document.querySelector(".form_container-sign");
  const imgResult = document.getElementById("form_container-result-photo");
  const button = document.querySelector(".card_button");

  // Enviar el formulario
  if (form && button) {
    button.addEventListener("click", () => {
      form.requestSubmit();
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Fondo elegido
      const background = document.querySelector(".background1");
      let backgroundSrc = "";

      if (background) {
        backgroundSrc = background.src;
      }

      // Datos del formulario
      const data = {
        field1: 1,
        field2: form.elements.proposal.value,
        field3: form.elements.firstName.value,
        field4: form.elements.city.value,
        field5: form.elements.email.value,
        field6: form.elements.phone.value,
        field8: backgroundSrc,
        photo: imgResult ? imgResult.src : ""
      };

      // Enviar datos al servidor
      fetch("https://dev.adalab.es/api/info/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            window.location.href = "card.html?id=" + result.infoID;
          } else {
            alert(result.error);
          }
        });
    });
  }

  // Compartir en Twitter
  const twitterButton = document.querySelector(".share-twitter");

  if (twitterButton) {
    twitterButton.addEventListener("click", () => {

      const url = window.location.href;
      const text = "¡Mira mi plato para Sabor Extremo! 🍽️🔥";

      const twitterUrl =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text) +
        "&url=" +
        encodeURIComponent(url);

      window.open(twitterUrl, "_blank");
    });
  }

});

