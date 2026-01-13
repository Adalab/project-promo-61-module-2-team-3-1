'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const panel = document.querySelector(".panel");
  const header = panel.querySelector(".panel-header");

  header.addEventListener("click", () => {
    panel.classList.toggle("open");
    console.log("click"); // para comprobar que funciona
  });
});
