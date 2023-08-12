const navbar = document.querySelector(".nav-bar");
const humburger = document.querySelector(".humburger");
const cardActivity = document.querySelectorAll(".card-tourist-activity");
const cardPreferDestination = document.querySelectorAll(
	".card-prefer-destination div"
);
const btnViewAll = document.querySelector(".view-all");
const hiddenActivityCard = document.querySelectorAll(
	".hidden-tourist-activity"
);

let titleCardActivity = document.querySelectorAll(
	".bottom-card-activity h4.color-h"
);
let imgPreferDestination = document.querySelectorAll(
	".card-prefer-destination img"
);
// 1 = lihat Semua, 0 = lebih sedikit
let btnActive = 0;

window.onscroll = () => {
	console.log("coba");
	if (window.scrollY > 50 && screen.width > 768) {
		navbar.classList.add("nav-active");
	} else {
		navbar.classList.remove("nav-active");
	}
};

humburger.addEventListener("click", () => {
	document.querySelector(".list-navbar").classList.toggle("active-humburger");
});

for (let i = 0; i < cardActivity.length; i++) {
	cardActivity[i].addEventListener("mouseover", function () {
		titleCardActivity[i].style.textDecoration = "underline";
	});
	cardActivity[i].addEventListener("mouseleave", function () {
		titleCardActivity[i].style.textDecoration = "none";
	});
}

for (let i = 0; i < cardPreferDestination.length; i++) {
	cardPreferDestination[i].addEventListener("mouseover", function () {
		imgPreferDestination[i].style.transform = "scale(1.2)";
	});
	cardPreferDestination[i].addEventListener("mouseleave", function () {
		imgPreferDestination[i].style.transform = "scale(1)";
	});
}

btnViewAll.addEventListener("click", () => {
	for (let i = 0; i < 3; i++) {
		console.log("Test");
		hiddenActivityCard[i].classList.toggle("hidden");
	}
	if (btnActive === 0) {
		btnViewAll.textContent = "Lebih Sedikit";
		btnActive--;
	} else {
		btnViewAll.textContent = "Lihat Semua";
		btnActive++;
	}
});
