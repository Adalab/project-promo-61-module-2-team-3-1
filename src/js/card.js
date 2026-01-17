'use strict';

document.addEventListener("DOMContentLoaded", () => {

  // Cogemos la URL completa
  const urlParams = new URLSearchParams(window.location.search);


  const id = urlParams.get("id");

  // Si no hay id, no seguimos
  if (!id) {
    console.log("No hay id");
    return;
  }

  // Pedimos los datos de la tarjeta al servidor
  fetch("https://dev.adalab.es/api/info/" + id)
    .then(response => response.json())
    .then(data => {

      // Si hay error en la respuesta
      if (data.success === false) {
        console.log("Error al cargar la tarjeta");
        return;
      }

      // Guardamos los datos recibidos
      const card = data.data;

      document.querySelector(".js-name").innerHTML = card.field3;
      document.querySelector(".js-proposal").innerHTML = card.field2;
      document.querySelector(".js-city").innerHTML = card.field4;
      document.querySelector(".js-email").innerHTML = card.field5;
      document.querySelector(".js-phone").innerHTML = card.field6;

      if (card.photo) {
        document.querySelector(".js-photo").src = card.photo;
      }

      if (card.field8) {
        document.querySelector(".background1").src = card.field8;
      }
    });

});
