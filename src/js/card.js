'use strict';

window.addEventListener("load", function () {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) return;

  fetch(`https://dev.adalab.es/api/info/${id}`)
    .then(res => res.json())
    .then(result => {
      if (result.success) {
        paintCard(result.data);
        document.body.classList.add("show-card");
      }
    });

  function paintCard(data) {
    document.querySelector(".card_name").textContent = data.field2;
    document.querySelector(".card_proposal").textContent = data.field3;
    document.querySelector(".card_city").textContent = data.field6;
    document.querySelector(".card_type").textContent = data.field7;

    document.querySelector(".card_email").href = "mailto:" + data.field4;
    document.querySelector(".card_phone").href = "tel:" + data.field5;

    document.querySelector(".card_photo").style.backgroundImage =
      `url(${data.photo})`;
  }

});
