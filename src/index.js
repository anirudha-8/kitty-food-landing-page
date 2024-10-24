const menu = document.querySelector("nav ul");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

menuOpen.addEventListener("click", () => {
	menu.classList.add("menu-toggle-helper");
});

menuClose.addEventListener("click", () => {
	menu.classList.remove("menu-toggle-helper");
});
