// Footer year
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

// Dropdowns / Mega Menu / Cart
document.querySelectorAll("[data-toggle]").forEach(btn => {
  btn.addEventListener("click", e => {
    const targetId = btn.getAttribute("data-toggle");
    const target = document.getElementById(targetId);
    target.classList.toggle("active");
  });
});

// Tooltip
const tooltipBtns = document.querySelectorAll(".tooltip-btn");
tooltipBtns.forEach(btn => {
  let tooltip;
  btn.addEventListener("mouseenter", () => {
    tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerText = btn.dataset.tooltip;
    btn.appendChild(tooltip);
  });
  btn.addEventListener("mouseleave", () => {
    if (tooltip) tooltip.remove();
  });
});

// Native dialog
const dialog = document.getElementById("myDialog");
document.getElementById("openDialog").addEventListener("click", () => {
  dialog.showModal();
});