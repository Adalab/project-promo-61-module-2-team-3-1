const panel = document.querySelector(".panel");
const header = document.querySelector(".panel-header");

header.addEventListener("click", () => {
  panel.classList.toggle("open");
});

