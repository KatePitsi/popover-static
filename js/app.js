// Footer year
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

// Dropdown
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const menu = btn.nextElementSibling;
    menu.classList.toggle("active");
  });
});

// Mega Menu
const megaBtn = document.querySelector(".mega-btn");
const megaMenu = document.querySelector(".mega-menu");
if (megaBtn) {
  megaBtn.addEventListener("click", () => {
    megaMenu.classList.toggle("active");
  });
}

// Tooltip
const tooltipBtn = document.querySelector(".tooltip-btn");
const tooltip = document.querySelector(".tooltip");
if (tooltipBtn) {
  tooltipBtn.addEventListener("mouseenter", () => tooltip.classList.add("active"));
  tooltipBtn.addEventListener("mouseleave", () => tooltip.classList.remove("active"));
}

// Modal Dialog
const dialog = document.getElementById("myDialog");
const openDialog = document.querySelector(".dialog-btn");
if (openDialog) {
  openDialog.addEventListener("click", () => dialog.showModal());
}
