document.addEventListener("click", function (ev) {
  const header = ev.target.closest(".panel-header");
  if (!header) return;

  const panel = header.closest(".panel");
  panel.classList.toggle("open");
});
