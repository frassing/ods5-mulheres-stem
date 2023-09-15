function menuOpen() {
	let menuMobile = document.querySelector('.mobile-menu');
	menuMobile.classList.toggle('open');

}

let menuMobileIcon = document.querySelector('.menu-icon');
menuMobileIcon.addEventListener('click', menuOpen);