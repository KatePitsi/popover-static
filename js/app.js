// Footer year
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

// Dropdowns, Mega Menu, Cart Popover
document.querySelectorAll("[data-toggle]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.toggle);
    target.classList.toggle("show");
  });
});

// Tooltip → γίνεται μόνο με CSS ::after, δεν χρειάζεται JS

// Dialog
const openDialog = document.getElementById("openDialog");
const dialog = document.getElementById("myDialog");
if (openDialog && dialog) {
  openDialog.addEventListener("click", () => dialog.showModal());
}
