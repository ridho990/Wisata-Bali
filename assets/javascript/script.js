const navbar = document.querySelector(".nav-bar");
window.onscroll = () => {
	console.log("coba");
	if (window.scrollY > 50 && screen.width > 768) {
		navbar.classList.add("nav-active");
	} else {
		navbar.classList.remove("nav-active");
	}
};

let humburger = document.querySelector(".humburger");
humburger.addEventListener("click", () => {
	document.querySelector(".list-navbar").classList.toggle("active-humburger");
});
