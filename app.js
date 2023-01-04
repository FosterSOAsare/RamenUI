// Display Menu
(function () {
	let openMenu = document.querySelector(".showMenu");
	let menu = document.querySelector("#phone__menu");
	openMenu.addEventListener("click", () => {
		menu.style.animation = "slideRight 0.5s forwards";
	});
})();

// Close Menu
(function () {
	let closeMenu = document.querySelector(".closeMenu");
	let menu = document.querySelector("#phone__menu");
	closeMenu.addEventListener("click", () => {
		menu.style.animation = "slideLeft 0.5s forwards";
	});
})();
